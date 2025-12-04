import { Topics } from './topics';
import { ExpirationCompleteData } from './TSTypes/expiration.expiration.complete.v1.DLQ-value';

export interface ExpirationCompleteEventDLQ {
  topic: Topics.ExpirationCompleteDLQ;
  data: ExpirationCompleteData;
}
