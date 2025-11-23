import { Topics } from './topics';
import { OrderCancelledData } from './TSTypes/orders.order.cancelled.v1-value';

export interface OrderCancelledEvent {
  topic: Topics.OrderCancelled;
  data: OrderCancelledData;
}
