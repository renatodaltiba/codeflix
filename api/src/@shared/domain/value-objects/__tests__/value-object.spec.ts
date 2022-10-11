import ValueObject from "../value-object";

class StubValueObject extends ValueObject {}

describe("Value Object Unit Tests", () => {
  it("should set value", () => {
    let vo = new StubValueObject("any_value");
    expect(vo.value).toBe("any_value");

    vo = new StubValueObject({
      name: "any_name",
    });
    expect(vo.value).toStrictEqual({
      name: "any_name",
    });
  });
});
