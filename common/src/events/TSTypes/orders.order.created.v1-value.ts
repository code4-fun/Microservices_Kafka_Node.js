/* eslint-disable @typescript-eslint/no-namespace */

export type OrderCreatedData = Orders.OrderCreatedData;

export namespace Orders {
    export const OrderStatusSchema = "{\"type\":\"enum\",\"name\":\"OrderStatus\",\"symbols\":[\"created\",\"cancelled\",\"awaiting_payment\",\"complete\"]}";
    export const OrderStatusName = "orders.OrderStatus";
    export type OrderStatus = "created" | "cancelled" | "awaiting_payment" | "complete";
    export const OrderTicketSchema = "{\"type\":\"record\",\"name\":\"OrderTicket\",\"fields\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"price\",\"type\":\"double\"}]}";
    export const OrderTicketName = "orders.OrderTicket";
    export interface OrderTicket {
        id: string;
        price: number;
    }
    export const OrderCreatedDataSchema = "{\"type\":\"record\",\"name\":\"OrderCreatedData\",\"namespace\":\"orders\",\"fields\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"status\",\"type\":{\"type\":\"enum\",\"name\":\"OrderStatus\",\"symbols\":[\"created\",\"cancelled\",\"awaiting_payment\",\"complete\"]}},{\"name\":\"userId\",\"type\":\"string\"},{\"name\":\"expiresAt\",\"type\":\"string\"},{\"name\":\"ticket\",\"type\":{\"type\":\"record\",\"name\":\"OrderTicket\",\"fields\":[{\"name\":\"id\",\"type\":\"string\"},{\"name\":\"price\",\"type\":\"double\"}]}},{\"name\":\"version\",\"type\":\"int\"}]}";
    export const OrderCreatedDataName = "orders.OrderCreatedData";
    export interface OrderCreatedData {
        id: string;
        status: Orders.OrderStatus;
        userId: string;
        expiresAt: string;
        ticket: Orders.OrderTicket;
        version: number;
    }
}
