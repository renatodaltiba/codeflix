import InvalidUuidError from "../../@shared/errors/invalid-uuid.error";
import UniqueEntityId from "./unique-entity-id.vo";
import { validate as uuidValidate, validate } from "uuid";

describe("UniqueEntity Id Value Object", () => {
  const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");

  it("should throw error when uuid is invalid", () => {
    expect(() => new UniqueEntityId("invalid-uuid")).toThrow(
      new InvalidUuidError()
    );
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept a uuid passed in constructor", () => {
    const vo = new UniqueEntityId("67ce192a-3f27-40d2-9e08-3bc153e382ac");

    expect(vo.id).toBe("67ce192a-3f27-40d2-9e08-3bc153e382ac");

    expect(validateSpy).toHaveBeenCalled();
  });

  it("should accept a uuid passed in constructor", () => {
    const vo = new UniqueEntityId();

    expect(uuidValidate(vo.id)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  });
});
