/* eslint-disable @typescript-eslint/no-namespace */

export type TicketCreatedData = Tickets.TicketCreatedData;

export namespace Tickets {
    export const TicketCreatedDataSchema = "{\"type\":\"record\",\"name\":\"TicketCreatedData\",\"namespace\":\"tickets\",\"fields\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"title\",\"type\":\"string\"},{\"name\":\"price\",\"type\":\"double\"},{\"name\":\"userId\",\"type\":\"string\"},{\"name\":\"version\",\"type\":\"int\"}]}";
    export const TicketCreatedDataName = "tickets.TicketCreatedData";
    export interface TicketCreatedData {
        id: string;
        title: string;
        price: number;
        userId: string;
        version: number;
    }
}
