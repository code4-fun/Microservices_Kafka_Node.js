/* eslint-disable @typescript-eslint/no-namespace */

export type PaymentCreatedData = Payments.PaymentCreatedData;

export namespace Payments {
    export const PaymentCreatedDataSchema = "{\"type\":\"record\",\"name\":\"PaymentCreatedData\",\"namespace\":\"payments\",\"fields\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"orderId\",\"type\":\"string\"},{\"name\":\"stripeId\",\"type\":\"string\"},{\"name\":\"error\",\"type\":\"string\"},{\"name\":\"attempts\",\"type\":\"int\"},{\"name\":\"failedAt\",\"type\":\"string\"}]}";
    export const PaymentCreatedDataName = "payments.PaymentCreatedData";
    export interface PaymentCreatedData {
        id: string;
        orderId: string;
        stripeId: string;
        error: string;
        attempts: number;
        failedAt: string;
    }
}
