import { calculateTax } from "./calculateTax";

test("should be return correct output", () => {
  const result = calculateTax(10000, 2);
  expect(result).toBe("1200.0000");
});
test("should not be return correct output", () => {
  const result = calculateTax(10000, 2);
  expect(result).not.toBe("1100.0000");
});
test("should not calculate tax if type is not 0 or 1 or 2", () => {
  const result = calculateTax(10000, 3);
  expect(result).toBe("10000.0000");
});
