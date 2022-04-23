import {IS_MONGO_ID, IsMongoId, IsNumber, IsOptional, IsPositive, IsString} from "class-validator";
import {CreateProductParams, Product} from "../../domain/entities/product.entity";

export class ProductUsecases {

    async createProduct(params: CreateProductParams) : Promise<any> {

        // Creates product entity
        let product = Product.CreateNew(params);

        // Save it on database using a repository


        // Return product data

    }


}





