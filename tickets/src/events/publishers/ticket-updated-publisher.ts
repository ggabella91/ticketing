import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@ggabellatickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
