import {BaseDomainEntity, DomainId, OrderStatusValueObject} from "types-ddd";
import {CustomerEntity} from "./Customer";
import {OrderItemEntity} from "./OrderItem";


export class OrderEntity extends BaseDomainEntity {
    customer: CustomerEntity;
    orderItems: OrderItemEntity[];
    status: OrderStatusValueObject;
}
