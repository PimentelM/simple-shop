import {DomainId} from "types-ddd";
import ValueObject from "types-ddd/dist/core/value-object";

interface ShoppingCartItemProps {
    productId: DomainId,
    quantity: number
}

export class ShoppingCartItemValueObject extends ValueObject<ShoppingCartItemProps> {
    get productId(): DomainId {
        return this.props.productId;
    }

    get quantity(): number {
        return this.props.quantity;
    }

    public static create(props: ShoppingCartItemProps): ShoppingCartItemValueObject {
        return new ShoppingCartItemValueObject(props);
    }
}
