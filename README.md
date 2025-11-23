Это форк проекта по продаже билетов из курса Стивена Гридера 
"Microservices with Node JS and React". В оригинальный код внесены
следующие изменения:

- Устаревший **NATS Streaming** заменен на **Apache Kafka**

- В сервисе orders вместо MongoDB + Mongoose использован 
  **PostgreSQL** + **Prisma**

- Для тестов в сервисе orders используется **Testcontainers**

- Для проверки структуры и совместимости событий используется 
  **Confluent Schema Registry** вместо TypeScript-типов
