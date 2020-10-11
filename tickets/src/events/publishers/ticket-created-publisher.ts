import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@ggabellatickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
