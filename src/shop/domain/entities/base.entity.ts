import {ObjectId} from "mongodb";

export class BaseEntity {
  private _id: ObjectId | string = new ObjectId();
  public readonly createdAt: Date = new Date();
  public readonly updatedAt: Date = new Date();
  public readonly deletedAt: Date;

  public get isDeleted(): boolean {
    return this.deletedAt !== undefined;
  }

  public get id(): string {
    if(typeof this._id === 'string') {
      return this._id;
    }
    return this._id.toHexString();
  }

  public updateTimestamp(): void {
    (this as any).updatedAt = new Date();
  }

  public markAsDeleted(): void {
    (this as any).deletedAt = new Date();
  }


}
