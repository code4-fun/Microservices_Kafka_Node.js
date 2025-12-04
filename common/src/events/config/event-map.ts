import { TicketCreatedEvent } from '../ticket-created-event';
import { TicketUpdatedEvent } from '../ticket-updated-event';
import { OrderCreatedEvent } from '../order-created-event';
import { OrderCancelledEvent } from '../order-cancelled-event';
import { ExpirationCompleteEvent } from '../expiration-complete-event';
import { PaymentCreatedEvent } from '../payment-created-event';
import { TicketCreatedEventDLQ } from '../ticket-created-event-dlq';
import { TicketUpdatedEventDLQ } from '../ticket-updated-event-dlq';
import { OrderCreatedEventDLQ } from '../order-created-event-dlq';
import { OrderCancelledEventDLQ } from '../order-cancelled-event-dlq';
import { ExpirationCompleteEventDLQ } from '../expiration-complete-event-dlq';
import { PaymentCreatedEventDLQ } from '../payment-created-event-dlq';

export interface EventMap {
  TicketCreated: TicketCreatedEvent;
  TicketUpdated: TicketUpdatedEvent;
  OrderCreated: OrderCreatedEvent;
  OrderCancelled: OrderCancelledEvent;
  ExpirationComplete: ExpirationCompleteEvent;
  PaymentCreated: PaymentCreatedEvent;

  TicketCreatedDLQ: TicketCreatedEventDLQ;
  TicketUpdatedDLQ: TicketUpdatedEventDLQ;
  OrderCreatedDLQ: OrderCreatedEventDLQ;
  OrderCancelledDLQ: OrderCancelledEventDLQ;
  ExpirationCompleteDLQ: ExpirationCompleteEventDLQ;
  PaymentCreatedDLQ: PaymentCreatedEventDLQ;
}
