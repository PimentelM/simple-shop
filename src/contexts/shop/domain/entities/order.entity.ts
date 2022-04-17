import {BaseDomainEntity, DomainId, OrderStatusValueObject} from "types-ddd";
import {CustomerEntity} from "./customer.entity";
import {OrderItemEntity} from "./order-item.entity";


export class OrderEntity extends BaseDomainEntity {
    customer: CustomerEntity;
    orderItems: OrderItemEntity[];
    status: OrderStatusValueObject;
}
