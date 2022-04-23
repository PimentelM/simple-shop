import {BaseEntity} from "./base.entity";

export class Customer  extends BaseEntity {
    name: string;
    username: string;
    shoppingCart : CartItem[];
}

interface CartItem {
    productId: number;
    quantity: number;
}
