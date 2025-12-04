import { Topics } from './topics';
import { TicketCreatedData } from './TSTypes/tickets.ticket.created.v1.DLQ-value';

export interface TicketCreatedEventDLQ {
  topic: Topics.TicketCreatedDLQ;
  data: TicketCreatedData;
}
