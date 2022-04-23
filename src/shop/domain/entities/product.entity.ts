import {BaseEntity} from "./base.entity";
import {ArrayNotEmpty, IsMongoId, IsPositive, IsString, MaxLength, MinLength, validate} from "class-validator";
import {validateSchema} from "../../../utils/schemaValidator";
import {ObjectId} from "mongodb";

export class Product extends BaseEntity {
    name: string;
    description: string;

    price: number;
    images: string[]; // Images Ids
    tags: string[];

    stockQuantity: number;
    stockReserved: number;



    public static CreateNew(params : CreateProductParams) {

        // Validate input
        let errors = validateSchema(params, CreateProductParams);


        const product = new Product();
        product.name = params.name;
        product.description = params.description;
        product.price = params.price;
        product.images = params.images;
        product.tags = params.tags;
        product.stockQuantity = params.stockQuantity;
        product.stockReserved = 0;

        product.createdAt = new Date();
        product.updatedAt = new Date();
        product.id = new ObjectId().toHexString();

        return product;
    }
}



export class CreateProductParams {
    @IsString()
    @MinLength(2)
    name: string;

    @MinLength(1)
    @MaxLength(1024)
    @IsString()
    description: string;

    @IsPositive()
    price: number;

    @IsMongoId({each: true})
    @ArrayNotEmpty()
    images: string[];

    @IsString()
    tags: string[];

    @IsPositive()
    stockQuantity: number;
}
