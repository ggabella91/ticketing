import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@ggabellatickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
 