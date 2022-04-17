import {ProductEntity} from "./product.entity";

export class OrderItemEntity {
    product: ProductEntity;
    quantity: number;
    price: number;
}
