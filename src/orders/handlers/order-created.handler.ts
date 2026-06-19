import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { OrderCreatedEvent } from '../events/order-created.event';
import { OrdersProjection } from '../projections/orders.projection';

@EventsHandler(OrderCreatedEvent)
export class OrderCreatedHandler
    implements IEventHandler<OrderCreatedEvent> {
    constructor(
        private readonly projection: OrdersProjection,
    ) { }

    handle(event: OrderCreatedEvent) {
        this.projection.add({
            id: event.orderId,
            status: 'PENDING',
        });
    }
}