import {ObjectId} from "mongodb";
import {DeepReadonly} from "ts-essentials";

type BaseState = {_id: ObjectId | string, createdAt: Date, updatedAt: Date, deletedAt: Date};

export abstract class BaseEntity<EntityState = any> {
  protected state : EntityState & BaseState;

  constructor(entityState?: EntityState & Partial<BaseState>) {
    this.state = {
      _id: new ObjectId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      ...entityState
    }
  }

  public get id(): string {
    if(typeof this.state._id === 'string') {
      return this.state._id;
    }
    return this.state._id.toHexString();
  }

  public get createdAt() : Date{
    return this.state.createdAt;
  }

  public get updatedAt() : Date {
    return this.state.updatedAt;
  }

  public get deletedAt(): Date | null {
    return this.state.deletedAt;
  }

  public get isDeleted(): boolean {
    return this.state.deletedAt instanceof Date;
  }

  public updateTimestamp(): void {
    this.state.updatedAt = new Date();
  }

  public markAsDeleted(): void {
    this.state.deletedAt = new Date();
  }

  public toString(){
    throw new Error('.toString() method is not implemented.');
  }

  public toJSON() : DeepReadonly<EntityState & BaseState>{
    // Safer than cloneDeep but a bit slower.
    // Avoids returning state reference directly so it can't be mutated outside of the entity.
    return JSON.parse(JSON.stringify(this.state));
  }


}
