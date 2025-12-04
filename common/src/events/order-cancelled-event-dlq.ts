import { Topics } from './topics';
import { OrderCancelledData } from './TSTypes/orders.order.cancelled.v1.DLQ-value';

export interface OrderCancelledEventDLQ {
  topic: Topics.OrderCancelledDLQ;
  data: OrderCancelledData;
}
