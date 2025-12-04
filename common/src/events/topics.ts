export enum Topics {
  TicketCreated = 'tickets.ticket.created.v1',
  TicketCreatedDLQ = 'tickets.ticket.created.v1.DLQ',
  TicketUpdated = 'tickets.ticket.updated.v1',
  TicketUpdatedDLQ = 'tickets.ticket.updated.v1.DLQ',

  OrderCreated = 'orders.order.created.v1',
  OrderCreatedDLQ = 'orders.order.created.v1.DLQ',
  OrderCancelled = 'orders.order.cancelled.v1',
  OrderCancelledDLQ = 'orders.order.cancelled.v1.DLQ',

  ExpirationComplete = 'expiration.expiration.complete.v1',
  ExpirationCompleteDLQ = 'expiration.expiration.complete.v1.DLQ',

  PaymentCreated = 'payments.payment.created.v1',
  PaymentCreatedDLQ = 'payments.payment.created.v1.DLQ',
}
