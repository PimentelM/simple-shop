import {Test} from "./test.entity";
import {BaseEntity} from "./base.entity";

describe("TestEntity", () => {
  it("can be created", () => {
    const testEntity = new Test();
    expect(testEntity).toBeTruthy();
  });

  it("has a field id", () => {
    const testEntity = new Test();
    expect(testEntity.id).toBeTruthy();
  });

  test("a getter defined property can be destructured", () => {
    const testEntity = new Test();
    const {id} = testEntity;
    expect(id).toBeTruthy();
  });

  it("can be stringfied when summed with a string", () => {
    const testEntity = new Test();
    let convertedToString = testEntity + "";
    expect(convertedToString).toBeTruthy();
  });

  it("returns it's state when converted to JSON", () => {
    const testEntity = new Test();
    let entityConvertedToJson = JSON.stringify(testEntity);
    let stateConvertedToJSon = JSON.stringify(testEntity['state']);
    expect(entityConvertedToJson).toBe(stateConvertedToJSon);
  });


});
