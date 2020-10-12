import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from '@ggabellatickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
