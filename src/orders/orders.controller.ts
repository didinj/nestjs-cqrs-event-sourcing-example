import {
    Controller,
    Post,
    Get,
    Param,
} from '@nestjs/common';

import {
    CommandBus,
    QueryBus,
} from '@nestjs/cqrs';

import { randomUUID } from 'crypto';

import { CreateOrderCommand } from './commands/create-order.command';
import { GetOrderQuery } from './queries/get-order.query';

@Controller('orders')
export class OrdersController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) { }

    @Post()
    create() {
        const id = randomUUID();

        return this.commandBus.execute(
            new CreateOrderCommand(id),
        );
    }

    @Get(':id')
    getOrder(
        @Param('id') id: string,
    ) {
        return this.queryBus.execute(
            new GetOrderQuery(id),
        );
    }
}