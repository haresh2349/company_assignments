import React from "react";
import { calculateTax } from "../utils/calculateTax";

const EntityRow = ({ item, setTax }) => {
  return (
    <tr style={{ backgroundColor: item.sno % 2 === 0 ? "#F6F6F6" : "#FFFF" }}>
      <td>{item.sno}</td>
      <td>{item.amount}</td>
      <td>{item.item_type}</td>
      <td>
        <button
          onClick={() => calculateTax(item.amount, item.item_type, setTax)}
        >
          Calculate
        </button>
      </td>
    </tr>
  );
};

export default EntityRow;
