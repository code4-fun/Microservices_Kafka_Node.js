/* eslint-disable @typescript-eslint/no-namespace */

export type ExpirationCompleteData = Expiration.ExpirationCompleteData;

export namespace Expiration {
    export const ExpirationCompleteDataSchema = "{\"type\":\"record\",\"name\":\"ExpirationCompleteData\",\"namespace\":\"expiration\",\"fields\":[{\"name\":\"orderId\",\"type\":\"string\"},{\"name\":\"error\",\"type\":\"string\"},{\"name\":\"attempts\",\"type\":\"int\"},{\"name\":\"failedAt\",\"type\":\"string\"}]}";
    export const ExpirationCompleteDataName = "expiration.ExpirationCompleteData";
    export interface ExpirationCompleteData {
        orderId: string;
        error: string;
        attempts: number;
        failedAt: string;
    }
}
