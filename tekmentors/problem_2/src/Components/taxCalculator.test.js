import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaxCalculator from "./TaxCalculator";
import Entities from "../entities.json";
import EntityRow from "./EntityRow";
test("should be render taxCalculator component in documnet", () => {
  render(<TaxCalculator />);
  const header = screen.getByText("TAX CALCULATOR");
  expect(header).toBeInTheDocument();
});

test("should be table headers in the docunment", () => {
  render(<TaxCalculator />);
  const sno = screen.getByText("S.No");
  const amount = screen.getByText("Amount");
  const item_type = screen.getByText("Item_type");
  const tax = screen.getByText("Calculate Tax");
  expect(sno).toBeInTheDocument();
  expect(amount).toBeInTheDocument();
  expect(item_type).toBeInTheDocument();
  expect(tax).toBeInTheDocument();
});

test("should be calculate buttons in the document", () => {
  render(<TaxCalculator />);
  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(Entities.invoices.length);
});
test("should be calculate tax", () => {
  render(<TaxCalculator />);
  const calculateButton = screen.getByTestId("btn-1");
  const tax = screen.getByTestId("tax");
  fireEvent.click(calculateButton);
  expect(tax.textContent).toBe("575.0000");
});
test("should not be calculate wrong tax", () => {
  render(<TaxCalculator />);
  const calculateButton = screen.getByTestId("btn-1");
  const tax = screen.getByTestId("tax");
  fireEvent.click(calculateButton);
  expect(tax.textContent).not.toBe("576.0000");
});
