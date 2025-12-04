import { Topics } from './topics';
import { TicketUpdatedData } from './TSTypes/tickets.ticket.updated.v1.DLQ-value';

export interface TicketUpdatedEventDLQ {
  topic: Topics.TicketUpdatedDLQ;
  data: TicketUpdatedData;
}
