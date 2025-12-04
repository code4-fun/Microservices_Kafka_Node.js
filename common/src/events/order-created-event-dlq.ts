import { Topics } from './topics';
import { OrderCreatedData } from './TSTypes/orders.order.created.v1.DLQ-value';

export interface OrderCreatedEventDLQ {
  topic: Topics.OrderCreatedDLQ;
  data: OrderCreatedData;
}
