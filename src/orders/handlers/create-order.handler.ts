import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateOrderCommand } from '../commands/create-order.command';
import { OrderAggregate } from '../order.aggregate';

@CommandHandler(CreateOrderCommand)
export class CreateOrderHandler
    implements ICommandHandler<CreateOrderCommand> {
    async execute(command: CreateOrderCommand) {
        const order = new OrderAggregate(command.orderId);

        order.create();

        order.commit();

        return {
            id: command.orderId,
            status: 'PENDING',
        };
    }
}