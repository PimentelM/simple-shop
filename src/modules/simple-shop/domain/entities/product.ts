import {BaseDomainEntity} from "types-ddd";

export class ProductEntity extends BaseDomainEntity {

    name: string;
    description: string;

    price: number;
    image: string;
    tags: string[];

    stockQuantity: number;
    stockReserved: number;
}
