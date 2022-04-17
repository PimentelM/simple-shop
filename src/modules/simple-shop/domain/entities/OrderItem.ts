import {ProductEntity} from "./Product";

export class OrderItemEntity {
    product: ProductEntity;
    quantity: number;
    price: number;
}
