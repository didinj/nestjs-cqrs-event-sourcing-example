import { AggregateRoot } from '@nestjs/cqrs';
import { OrderCreatedEvent } from './events/order-created.event';

export class OrderAggregate extends AggregateRoot {
    constructor(
        public readonly id: string,
        public status: string = 'PENDING',
    ) {
        super();
    }

    create() {
        this.apply(new OrderCreatedEvent(this.id));
    }
}