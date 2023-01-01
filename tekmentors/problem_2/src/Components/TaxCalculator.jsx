import React, { useState } from "react";
import Entities from "../entities.json";
import EntityRow from "./EntityRow";
const TaxCalculator = () => {
  const [tax, setTax] = useState(null);
  return (
    <div className="dashboard" data-testid="dashboard">
      <h2>TAX CALCULATOR</h2>
      <div className="table-dashboard">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Amount</th>
              <th>Item_type</th>
              <th>Calculate Tax</th>
            </tr>
          </thead>
          <tbody>
            {Entities?.invoices?.map((item, index) => {
              return (
                (item.item_type == 0 ||
                  item.item_type == 1 ||
                  item.item_type == 2) && (
                  <EntityRow
                    key={item.sno}
                    item={item}
                    setTax={setTax}
                    index={index}
                  />
                )
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="result-dashboard">
        <h3>Calculated Tax Value :</h3>
        <p data-testid="tax">{tax}</p>
      </div>
    </div>
  );
};

export default TaxCalculator;
