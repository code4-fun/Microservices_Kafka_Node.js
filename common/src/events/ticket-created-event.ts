import { Topics } from './topics';
import { TicketCreatedData } from './TSTypes/tickets.ticket.created.v1-value';

export interface TicketCreatedEvent {
  topic: Topics.TicketCreated;
  data: TicketCreatedData;
}
