import React from "react";
import { calculateTax } from "../utils/calculateTax";

const EntityRow = ({ item, setTax, index }) => {
  const handleClick = () => {
    setTax(calculateTax(item.amount, item.item_type));
  };
  return (
    <tr style={{ backgroundColor: item.sno % 2 === 0 ? "#F6F6F6" : "#FFFF" }}>
      <td>{item.sno}</td>
      <td>{item.amount}</td>
      <td>{item.item_type}</td>
      <td>
        <button data-testid={`btn-${index}`} onClick={handleClick}>
          Calculate
        </button>
      </td>
    </tr>
  );
};

export default EntityRow;
