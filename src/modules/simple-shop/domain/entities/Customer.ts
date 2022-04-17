import {BaseDomainEntity, DomainId} from "types-ddd";
import ValueObject from "types-ddd/dist/core/value-object";
import {ShoppingCartEntity} from "./ShoppingCart";

export class CustomerEntity extends BaseDomainEntity{
    username: string;
    firstName: string;
    lastName: string;
    email: string;

    hashedPassword: string;

    shoppingCart: ShoppingCartEntity;

    get fullname() {
        return `${this.firstName} ${this.lastName}`;
    }
}
