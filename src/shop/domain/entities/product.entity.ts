import {BaseEntity} from "./base.entity";
import {ArrayNotEmpty, IsMongoId, IsPositive, IsString, MaxLength, MinLength, validate} from "class-validator";
import {validateOrThrow} from "../../../utils/schemaValidator";
import {ObjectId} from "mongodb";


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

    public get images(): string[] {
        return this.state.images;
    }

    public get tags(): string[] {
        return this.state.tags;
    }

    public get stockQuantity(): number {
        return this.state.stockQuantity;
    }

    public get stockReserved(): number {
        return this.state.stockReserved;
    }


    constructor(state: ProductState) {
        super(state);
    }


}
