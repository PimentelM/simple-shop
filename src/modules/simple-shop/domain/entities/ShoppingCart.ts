import {BaseDomainEntity} from "types-ddd";
import {ShoppingCartItemValueObject} from "../value-objects/ShoppingCartItem";

export class ShoppingCartEntity extends BaseDomainEntity {
    private items: ShoppingCartItemValueObject[] = [];

    addItem(item: ShoppingCartItemValueObject) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }
}
