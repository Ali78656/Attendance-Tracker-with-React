import React from "react";
import "../Styles/ExportCSV.css";

function ExportCSV({ students }) {
  const exportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Name,Status"]
        .concat(
          students.map((s) => `${s.name},${s.present ? "Present" : "Absent"}`)
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "attendance.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <button className="export-btn" onClick={exportCSV}>
      Export CSV
    </button>
  );
}

export default ExportCSV;
