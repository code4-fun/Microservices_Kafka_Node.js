/* eslint-disable @typescript-eslint/no-namespace */

export type TicketUpdatedData = Tickets.TicketUpdatedData;

export namespace Tickets {
    export const TicketUpdatedDataSchema = "{\"type\":\"record\",\"name\":\"TicketUpdatedData\",\"namespace\":\"tickets\",\"fields\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"title\",\"type\":\"string\"},{\"name\":\"price\",\"type\":\"double\"},{\"name\":\"userId\",\"type\":\"string\"},{\"name\":\"orderId\",\"type\":[\"null\",\"string\"],\"default\":null},{\"name\":\"version\",\"type\":\"int\"},{\"name\":\"error\",\"type\":\"string\"},{\"name\":\"attempts\",\"type\":\"int\"},{\"name\":\"failedAt\",\"type\":\"string\"}]}";
    export const TicketUpdatedDataName = "tickets.TicketUpdatedData";
    export interface TicketUpdatedData {
        id: string;
        title: string;
        price: number;
        userId: string;
        /**
         * Default: null
         */
        orderId: null | string;
        version: number;
        error: string;
        attempts: number;
        failedAt: string;
    }
}
