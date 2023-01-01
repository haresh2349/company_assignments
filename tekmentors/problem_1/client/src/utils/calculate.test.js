import { calculateTax } from "./calculateTax";
const data = [
  {
    sno: 1,
    amount: 10000,
    item_type: 2,
  },
  {
    sno: 2,
    amount: 51122,
    item_type: 0,
  },
  {
    sno: 3,
    amount: 3133,
    item_type: 3,
  },
];

test("should be return correct calculated data", () => {
  const result = calculateTax(data);
  const resultantData = [
    {
      sno: 1,
      amount: 10000,
      item_type: 2,
      tax: "1200.0000",
    },
    {
      sno: 2,
      amount: 51122,
      item_type: 0,
      tax: "2556.1000",
    },
  ];
  expect(result).toEqual(resultantData);
});

test("should not be return incorrect data", () => {
  const result = calculateTax(data);
  const resultantData = [
    {
      sno: 1,
      amount: 10000,
      item_type: 2,
      tax: "1300.0000",
    },
    {
      sno: 2,
      amount: 51122,
      item_type: 0,
      tax: "2566.1000",
    },
  ];
  expect(result).not.toEqual(resultantData);
});

test("should be ignore if type is not 0 or 1 or 2", () => {
  const result = calculateTax(data);
  const resultantData = [
    {
      sno: 1,
      amount: 10000,
      item_type: 2,
      tax: "1200.0000",
    },
    {
      sno: 2,
      amount: 51122,
      item_type: 0,
      tax: "2556.1000",
    },
  ];
  expect(result).toEqual(resultantData);
});
