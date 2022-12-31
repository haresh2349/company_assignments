import React, { useRef, useState } from "react";
import CsvDownloadButton from "react-json-to-csv";
import Papa from "papaparse";
import { parse } from "papaparse";
import { calculateTax, successNotify, warnNotify } from "../utils/calculateTax";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const TaxCalculator = () => {
  const [dataWitTax, setDataWithTax] = useState([]);
  const [file, setFile] = useState("");
  let dropBox = useRef(null);
  let inputFile = useRef(null);
  const changeHandler = (event) => {
    console.log(event.target.files[0]);
    if (event.target.files[0]?.name?.includes(".csv") === false) {
      warnNotify("Please upload only CSV file!");
      return;
    } else {
      Papa.parse(event.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          if (results.data[0].amount && results.data[0].item_type) {
            setDataWithTax(calculateTax(results.data));
            successNotify("File uploaded!");
            setFile(event.target.files[0].name);
          } else {
            warnNotify("Please Upload file with valid headers");
          }
        },
      });
    }
  };
  const handleDragFile = (event) => {
    event.preventDefault();
  };
  const handleDropFile = (event) => {
    event.preventDefault();
    Array.from(event.dataTransfer.files).map(async (file) => {
      if (file.name.includes(".csv") === false) {
        warnNotify("Please upload only CSV file!");
        return;
      } else {
        let text = await file.text();
        let results = parse(text, { header: true });
        if (results.data[0].amount && results.data[0].item_type) {
          setDataWithTax(calculateTax(results.data));
          successNotify("File uploaded!");
          setFile(file.name);
        } else {
          warnNotify("Please Upload file with valid headers");
        }
      }
    });
  };

  return (
    <>
      <div className="dashboard">
        <div className="csv-reader-box">
          <h3>GET YOUR TAX DETAILS</h3>
          <div
            className="file-input"
            onDragOver={handleDragFile}
            onDrop={handleDropFile}
            ref={dropBox}
          >
            <h3>Drop File to Upload </h3>
            <p>{file}</p>
            <img
              src="https://static.thenounproject.com/png/481896-200.png"
              alt=""
            />
            <button
              className="upload-btn"
              onClick={() => inputFile.current.click()}
            >
              UPLOAD FILE
            </button>
            <input
              type={"file"}
              accept=".csv"
              ref={inputFile}
              onChange={changeHandler}
            />
          </div>
          <div className="download-btn">
            <CsvDownloadButton
              data={dataWitTax}
              filename="result.csv"
              delimiter=","
            >
              DOWNLOAD ✨
            </CsvDownloadButton>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
