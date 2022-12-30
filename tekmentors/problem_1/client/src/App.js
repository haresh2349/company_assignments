import "./App.css";
import Papa from "papaparse";
import { useState } from "react";
import CsvDownloadButton from "react-json-to-csv";

function App() {
  const [dataWitTax, setDataWithTax] = useState([]);
  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setDataWithTax(calculateTax(results.data));
      },
    });
  };

  const calculateTax = (data) => {
    if (data.length > 0) {
      let newData = data.map((item) => {
        let tax = 0;
        if (item.item_type == 0) {
          tax = item.amount * 0.05;
          item["tax"] = tax;
        } else if (item.item_type == 1) {
          tax = item.amount * 0.08;
          item["tax"] = tax;
        } else if (item.item_type == 2) {
          tax = item.amount * 0.12;
          item["tax"] = tax;
        } else {
          return false;
        }
        return item;
      });
      return newData;
    }
  };
  return (
    <div className="container">
      <div className="inner-box">
        <div className="csv-reader-box">
          <h3>GET YOUR TAX DETAILS</h3>
          <div className="file-input">
            <input type={"file"} accept=".csv" onChange={changeHandler} />
          </div>
          <div className="download-btn">
            <CsvDownloadButton data={dataWitTax} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
