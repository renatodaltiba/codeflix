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

  it("should convert to a string", () => {
    const date = new Date();

    let arrange = [
      { received: null, expected: "null" },
      { received: undefined, expected: "undefined" },
      { received: 0, expected: "0" },
      { received: 1, expected: "1" },
      { received: "any_string", expected: "any_string" },
      { received: true, expected: "true" },
      { received: false, expected: "false" },
      { received: date, expected: date.toString() },
      { received: { name: "any_name" }, expected: '{"name":"any_name"}' },
      { received: [1, 2, 3], expected: "1,2,3" },
    ];

    arrange.forEach((item) => {
      const vo = new StubValueObject(item.received);

      expect(vo + "").toBe(item.expected);
    });
  });
});
