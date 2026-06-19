import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersProjection {
    private readonly orders = new Map();

    add(order: any) {
        this.orders.set(order.id, order);
    }

    findById(id: string) {
        return this.orders.get(id);
    }

    findAll() {
        return [...this.orders.values()];
    }
}