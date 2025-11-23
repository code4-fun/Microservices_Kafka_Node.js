import { Topics } from './topics';
import { OrderCreatedData } from './TSTypes/orders.order.created.v1-value';

export interface OrderCreatedEvent {
  topic: Topics.OrderCreated;
  data: OrderCreatedData;
}
