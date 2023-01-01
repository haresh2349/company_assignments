import { render, screen } from "@testing-library/react";
import { TaxCalculator } from "./TaxCalculator";

test("should be render taxCalculator component in documnet", () => {
  render(<TaxCalculator />);
  const header = screen.getByText("GET YOUR TAX DETAILS");
  expect(header).toBeInTheDocument();
});
test("should be upload file button in documnet", () => {
  render(<TaxCalculator />);
  const uploadFileButton = screen.getByText("UPLOAD FILE");
  expect(uploadFileButton).toBeInTheDocument();
});
test("should be download in documnet", () => {
  render(<TaxCalculator />);
  const downloadButton = screen.getByText("DOWNLOAD ✨");
  expect(downloadButton).toBeInTheDocument();
});
