export const calculateTax = (amount, type) => {
  let tax =
    type == 0
      ? amount * 0.05
      : type == 1
      ? amount * 0.08
      : type == 2
      ? amount * 0.12
      : amount;

  return tax.toFixed(4);
};
