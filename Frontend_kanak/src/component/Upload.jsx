import { useState, useEffect } from "react";
import { parse } from "papaparse";
import Navbar from "./Navbar";
import { MdCloudUpload } from "react-icons/md";
import axios from "axios";

const Upload = () => {
  const [contacts, setContacts] = useState([]);
  const [arr, setArr] = useState([]);

  const getData = () => {
    return axios.get(`http://localhost:4000/workflowid`).then((res) => {
      console.log(res.data);
      setArr(res.data);
    });
  };

  function populateSelect() {
    return arr.map((item, index) => (
      <option key={index} value={item.workflow_id}>
        {item.workflow_id}
      </option>
    ));
  }

  useEffect(() => {
    getData();
    populateSelect();
  }, []);

  let file;

  const handledropfile = (e) => {
    e.preventDefault();
    file = e.dataTransfer.files;
    console.log(e.dataTransfer.files);
    Array.from(e.dataTransfer.files).filter((file) => file.type === "text/csv");
    // .forEach(async (file) => {
    //   const text = await file.text();
    //   const result = parse(text, { headers: true });
    //   console.log(result.data);
    //   setContacts((existing) => [...existing, ...result.data, workflow_id]);
    // });
  };

  const uploadcsv = (e) => {
    let workflow_id = document.querySelector(".selectid").value;
    Array.from(file).forEach(async (file) => {
      const text = await file.text();
      const result = parse(text, { headers: true });
      console.log(result.data);
      setContacts((existing) => [...existing, ...result.data, workflow_id]);
    });
  };

  return (
    <div className="drop">
      <Navbar />
      <div
        style={{
          border: "2px dashed grey",
          fontSize: "25px",
          width: "20%",
          marginLeft: "370px",
          marginTop: "100px",
          height: "300px",
          width: "700px",
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={handledropfile}
      >
        <MdCloudUpload
          style={{ fontSize: "150px", marginLeft: "270px", color: "blue" }}
        />
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          Drop and drop Files Here to Upload
        </p>
      </div>

      <p style={{ textAlign: "center" }}>
        Select Workflow ID
        <select
          style={{ padding: "5px", marginLeft: "10px", fontWeight: "bold" }}
          className="selectid"
        >
          {populateSelect()}
        </select>
      </p>

      <button
        style={{
          marginLeft: "800px",
          padding: "7px",
          fontWeight: "bold",
          border: "0px",
          background: "#D9EAD3",
        }}
        onClick={uploadcsv}
      >
        Run Workflow
      </button>

      <ul>
        {contacts.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Upload;
