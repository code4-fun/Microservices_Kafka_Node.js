import { Topics } from './topics';
import { ExpirationCompleteData } from './TSTypes/expiration.expiration.complete.v1-value';

export interface ExpirationCompleteEvent {
  topic: Topics.ExpirationComplete;
  data: ExpirationCompleteData;
}
