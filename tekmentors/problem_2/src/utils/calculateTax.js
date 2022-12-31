export const calculateTax = (amount, type, setTax) => {
  let tax =
    type == 0 ? amount * 0.05 : type == 1 ? amount * 0.08 : amount * 0.12;
  setTax(tax);
};
