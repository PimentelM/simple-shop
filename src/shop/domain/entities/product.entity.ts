import {BaseEntity} from "./base.entity";
import {clone} from "lodash";


type ProductState = {
    name: string;
    description: string;

    price: number;
    images: string[]; // Images Ids
    tags: string[];

    stockQuantity: number;
    stockReserved: number;
}


export class Product extends BaseEntity<ProductState> {

    public get name(): string {
        return this.state.name;
    }

    public get description(): string {
        return this.state.description;
    }

    public get price(): number {
        return this.state.price;
    }

    public get images(): ReadonlyArray<string> {
        return clone(this.state.images);
    }

    public get tags(): ReadonlyArray<string> {
        return clone(this.state.tags);
    }

    public get stockQuantity(): number {
        return this.state.stockQuantity;
    }

    public get stockReserved(): number {
        return this.state.stockReserved;
    }

}
