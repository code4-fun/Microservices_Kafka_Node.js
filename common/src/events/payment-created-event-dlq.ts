import { Topics } from './topics';
import { PaymentCreatedData } from './TSTypes/payments.payment.created.v1.DLQ-value';

export interface PaymentCreatedEventDLQ {
  topic: Topics.PaymentCreatedDLQ;
  data: PaymentCreatedData;
}
