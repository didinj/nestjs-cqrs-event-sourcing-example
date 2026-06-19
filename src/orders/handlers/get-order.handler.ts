import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetOrderQuery } from '../queries/get-order.query';
import { OrdersProjection } from '../projections/orders.projection';

@QueryHandler(GetOrderQuery)
export class GetOrderHandler
    implements IQueryHandler<GetOrderQuery> {
    constructor(
        private readonly projection: OrdersProjection,
    ) { }

    async execute(query: GetOrderQuery) {
        return this.projection.findById(query.id);
    }
}