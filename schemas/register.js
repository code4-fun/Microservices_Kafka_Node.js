const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const { SchemaRegistry, SchemaType } = require('@kafkajs/confluent-schema-registry');
const { toTypeScript } = require('@ovotech/avro-ts');

const ROOT = path.resolve(process.cwd());
const AVSC_DIR = path.join(ROOT, 'avsc');
const TYPES_DIR = path.join(ROOT, 'TSTypes');
const OUTPUT_MAP = path.join(ROOT, 'schema-ids.json');
const SR_URL = process.env.SCHEMA_REGISTRY_URL || 'http://localhost:8081';

async function main() {
  console.log('=== Avro Schema Registration Script ===');
  console.log(`Root: ${ROOT}`);
  console.log(`Schema Registry: ${SR_URL}`);

  const registry = new SchemaRegistry({ host: SR_URL });

  fs.mkdirSync(TYPES_DIR, { recursive: true });
  const schemaFiles = await glob(`${AVSC_DIR}/*.avsc`);

  if (!schemaFiles.length) {
    console.error('No .avsc files found in /schemas/avsc');
    process.exit(1);
  }

  const mapping = {};

  for (const filePath of schemaFiles) {
    const fileName = path.basename(filePath);
    const subject = fileName.replace('.avsc', '');

    console.log(`\nProcessing schema: ${fileName}`);
    console.log(`Subject: ${subject}`);

    // 1. Чтение схемы + валидация
    let schemaJson;
    try {
      const raw = fs.readFileSync(filePath, "utf8");
      schemaJson = JSON.parse(raw);
      console.log("✔ Schema syntax valid");
    } catch (err) {
      console.error(`Invalid JSON in ${fileName}:`, err.message);
      process.exit(1);
    }

    // 2. Регистрация в SR
    try {
      const { id } = await registry.register(
        {
          type: SchemaType.AVRO,
          schema: JSON.stringify(schemaJson),
        },
        { subject }
      );

      console.log(`✔ Registered in Schema Registry with id: ${id}`);
      mapping[subject] = id;
    } catch (err) {
      console.error(`Failed to register ${subject}:`, err.message);
      process.exit(1);
    }

    // 3. Генерация TS типов
    try {
      const ts = toTypeScript(schemaJson);
      const outFile = path.join(TYPES_DIR, `${subject}.ts`);
      fs.writeFileSync(outFile, ts, "utf8");
      console.log(`✔ TypeScript generated → ${outFile}`);
    } catch (err) {
      console.error(`Failed to generate TS for ${subject}:`, err.message);
      process.exit(1);
    }
  }

  // 4. Сохранение JSON-мапинга
  fs.writeFileSync(OUTPUT_MAP, JSON.stringify(mapping, null, 2));
  console.log(`\n✔ Schema ID mapping saved → ${OUTPUT_MAP}`);

  console.log("\n=== Done ===");
}

main().catch((e) => {
  console.error('Fatal error registering schemas:', e);
  process.exit(1);
});
