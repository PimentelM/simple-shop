import {BaseEntity} from "./base.entity";

export class Test extends BaseEntity<{field : string}> {
    get field() {
        return this.state.field;
    }

    constructor(state : {field : string} = {field : 'yes'}) {
        super(state);
    }


    toString() {
        return `Test #${JSON.stringify({id: this.id, field: this.field})}`;
    }


}







