/* eslint-disable @typescript-eslint/no-namespace */

export type OrderCancelledData = Orders.OrderCancelledData;

export namespace Orders {
    export const OrderCancelledTicketSchema = "{\"type\":\"record\",\"name\":\"OrderCancelledTicket\",\"fields\":[{\"name\":\"id\",\"type\":\"string\"}]}";
    export const OrderCancelledTicketName = "orders.OrderCancelledTicket";
    export interface OrderCancelledTicket {
        id: string;
    }
    export const OrderCancelledDataSchema = "{\"type\":\"record\",\"name\":\"OrderCancelledData\",\"namespace\":\"orders\",\"fields\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"ticket\",\"type\":{\"type\":\"record\",\"name\":\"OrderCancelledTicket\",\"fields\":[{\"name\":\"id\",\"type\":\"string\"}]}},{\"name\":\"version\",\"type\":\"int\"}]}";
    export const OrderCancelledDataName = "orders.OrderCancelledData";
    export interface OrderCancelledData {
        id: string;
        ticket: Orders.OrderCancelledTicket;
        version: number;
    }
}
