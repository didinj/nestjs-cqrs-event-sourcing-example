import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { OrdersProjection } from './projections/orders.projection';

import { CreateOrderHandler } from './handlers/create-order.handler';
import { OrderCreatedHandler } from './handlers/order-created.handler';
import { GetOrderHandler } from './handlers/get-order.handler';

const CommandHandlers = [
    CreateOrderHandler,
];

const EventHandlers = [
    OrderCreatedHandler,
];

const QueryHandlers = [
    GetOrderHandler,
];

@Module({
    imports: [CqrsModule],
    providers: [
        OrdersProjection,
        ...CommandHandlers,
        ...EventHandlers,
        ...QueryHandlers,
    ],
})
export class OrdersModule { }