import {BaseDomainEntity} from "types-ddd";

class CustomerEntity extends BaseDomainEntity{
    username: string;
    firstName: string;
    lastName: string;
    email: string;

    hashedPassword: string;

    get fullname() {
        return `${this.firstName} ${this.lastName}`;
    }
}
