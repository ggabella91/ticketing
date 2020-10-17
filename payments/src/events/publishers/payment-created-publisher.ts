import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@ggabellatickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
