import {BaseEntity} from "./base.entity";

export class Product extends BaseEntity {
    name: string;
    description: string;

    price: number;
    images: string[]; // Images Ids
    tags: string[];

    stockQuantity: number;
    stockReserved: number;
}
