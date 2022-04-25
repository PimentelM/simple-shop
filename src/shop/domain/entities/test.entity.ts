import {BaseEntity} from "./base.entity";
import {clone} from "lodash";

export class Test extends BaseEntity<TestState> {
    get field() {
        return this.state.field;
    }

    get list(): ReadonlyArray<number> {
        return clone(this.state.list)
    }

    constructor(state : TestState = {field : 'yes', list: [1,2]}) {
        super(state);
    }


    toString() {
        return `Test #${JSON.stringify({id: this.id, field: this.field})}`;
    }


}



type TestState = {field : string, list: number[]};





