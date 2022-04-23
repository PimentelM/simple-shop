import {BaseEntity} from "./base.entity";

export class Order extends BaseEntity {
    userId: number;
    items: OrderItem;
    status: "PENDING_PAYMENT" | "PAID" | "SHIPPED" | "DELIVERED" | "CANCELLED" | "REFUNDED";
}



interface OrderItem {
    productId: number;
    quantity: number;
    price: number;
    discountPercent: number;
}
