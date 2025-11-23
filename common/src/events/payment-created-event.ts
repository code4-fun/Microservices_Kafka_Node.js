import { Topics } from './topics';
import { PaymentCreatedData } from './TSTypes/payments.payment.created.v1-value';

export interface PaymentCreatedEvent {
  topic: Topics.PaymentCreated;
  data: PaymentCreatedData;
}
