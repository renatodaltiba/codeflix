import { deepFreeze } from "../objects";

describe("Object Unit Tests", () => {
  it("should not freeze a scalar value", () => {
    const str = deepFreeze("a");

    expect(typeof str).toBe("string");

    let boolean = deepFreeze(true);
    expect(typeof boolean).toBe("boolean");

    boolean = deepFreeze(false);
    expect(typeof boolean).toBe("boolean");
  });
  it("should be a immutable obj", () => {
    const str = deepFreeze("a");

    expect(typeof str).toBe("string");
  });
});
