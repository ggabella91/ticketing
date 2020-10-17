import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ggabellatickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;

  
}
