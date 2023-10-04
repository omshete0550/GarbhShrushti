import React, { useEffect, useState } from "react";
import "./ApptTable.css";  
import DataTable, { createTheme } from "react-data-table-component";

const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
      background: "#fff",
      color: '#000' // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

const columns = [
  {
    name: "Complaint",
    selector: (row) => row.complaint,
    sortable: true,
  },
  {
    name: "Stage",
    selector: (row) => row.stage,
    sortable: true,
  },
  {
    name: "Doctor Name",
    selector: (row) => row.doctor,
    sortable: true,
  },
  {
    name: "Total Amount",
    selector: (row) => row.amount,
    sortable: true,
  },
  {
    name: "Date of Appt",
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: "Time of Appt",
    selector: (row) => row.time,
    sortable: true,
  },
  {
    name: "Patient ID",
    selector: (row) => row.patientid,
    sortable: true,
  },
  {
    name: "Manage",
    // selector: (row) => row.patientid,
    sortable: true,
    cell: (row) => (
        <div className="TableBtnContainer">
          <button className="btnCancel">CANCEL</button>
        </div>)
  },
];




createTheme(
  "solarized",
  {
    text: {
      primary: "#fff",
      secondary: "#2aa198",
    },
    background: {
      default: "#4B49AC",
    },
    context: {
      background: "#cb4b16",
      text: "#000",
    },
    divider: {
      default: "#fff",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);

// const data = [
//   {
//     id: 1,
//     stage: "Stage 1",
//     complaint: "Fever",
//     amount: "1500",
//     patientid: "Application under reviewed",
//     doctor:"Om Shete",
//     date:"15th Sept 2023",
//     time:"17:30pm"
//   },
//   {
//     id: 2,
//     date: "15 days left",
//     name: "IITian",
//     price: "1500",
//     status: "Accepted",
//     btnclass: "AcceptBtn",
//   },
//   {
//     id: 3,
//     date: "15 days left",
//     name: "IITian",
//     price: "1500",
//     status: "Application under reviewed",
//     btnclass: "UnderReviewBtn",
//   },
//   {
//     id: 4,
//     date: "15 days left",
//     name: "IITian",
//     price: "1500",
//     status: "Accepted",
//     btnclass: "AcceptBtn",
//   },
//   {
//     id: 5,
//     date: "15 days left",
//     name: "IITian",
//     price: "1500",
//     status: "Application under reviewed",
//     btnclass: "UnderReviewBtn",
//   },
//   {
//     id: 6,
//     date: "15 days left",
//     name: "IITian",
//     price: "1500",
//     status: "Not Accepted",
//     btnclass: "NotAcceptBtn",
//   },
//   {
//     id: 7,
//     date: "15 days left",
//     name: "IITian",
//     price: "1500",
//     status: "Application under reviewed",
//     btnclass: "UnderReviewBtn",
//   },
//   {
//     id: 8,
//     date: "15 days left",
//     name: "IITian",
//     price: "1500",
//     status: "Accepted",
//     btnclass: "AcceptBtn",
//   },

// ];



const data = [
    {
      id: 1,
      stage: "Stage 1",
      complaint: "Fever",
      amount: "1500",
      patientid: "PD3244",
      doctor: "Om Shete",
      date: "15th Sept 2023",
      time: "17:30pm"
    },
    {
      id: 2,
      stage: "Stage 2",
      complaint: "Cough",
      amount: "1200",
      patientid: "PD3242",
      doctor: "Lisa Johnson",
      date: "16th Sept 2023",
      time: "10:45am"
    },
    {
      id: 3,
      stage: "Stage 3",
      complaint: "Headache",
      amount: "800",
      patientid: "PD9832",
      doctor: "John Smith",
      date: "17th Sept 2023",
      time: "14:20pm"
    },
    {
      id: 4,
      stage: "Stage 1",
      complaint: "Back pain",
      amount: "1600",
      patientid: "PD8763",
      doctor: "Emily Davis",
      date: "18th Sept 2023",
      time: "09:15am"
    },
    {
      id: 5,
      stage: "Stage 2",
      complaint: "Sore throat",
      amount: "1000",
      patientid: "PD6783",
      doctor: "Michael Brown",
      date: "19th Sept 2023",
      time: "11:30am"
    },
    {
      id: 6,
      stage: "Stage 3",
      complaint: "Stomachache",
      amount: "850",
      patientid: "PD9789",
      doctor: "Sara Johnson",
      date: "20th Sept 2023",
      time: "16:00pm"
    },
    {
      id: 7,
      stage: "Stage 1",
      complaint: "Allergy",
      amount: "1400",
      patientid: "PD1232",
      doctor: "David Wilson",
      date: "21st Sept 2023",
      time: "13:45pm"
    },
    {
      id: 8,
      stage: "Stage 2",
      complaint: "Joint pain",
      amount: "1100",
      patientid: "PD3341",
      doctor: "Emma Smith",
      date: "22nd Sept 2023",
      time: "10:00am"
    },
    {
      id: 9,
      stage: "Stage 3",
      complaint: "Migraine",
      amount: "900",
      patientid: "PD12762",
      doctor: "Daniel Miller",
      date: "23rd Sept 2023",
      time: "15:15pm"
    },
    {
      id: 10,
      stage: "Stage 1",
      complaint: "Fever",
      amount: "1500",
      patientid: "PD12132",
      doctor: "Olivia Johnson",
      date: "24th Sept 2023",
      time: "12:30pm"
    }
  ];
  
const ApptTable = () => {
  // const [data,setData] = useState([]);

  return (
    <>
      <div className="ApplicationTracker" >
        <div style={{"borderRadius":"10px", "boxShadow":"rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
          <DataTable
            columns={columns}
            data={data}
            theme="solarized"
            customStyles={customStyles}
          />
        </div>
      </div>
    </>
  );
};

export default ApptTable;
