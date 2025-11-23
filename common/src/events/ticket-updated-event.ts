import { Topics } from './topics';
import { TicketUpdatedData } from './TSTypes/tickets.ticket.updated.v1-value';

export interface TicketUpdatedEvent {
  topic: Topics.TicketUpdated;
  data: TicketUpdatedData;
}
