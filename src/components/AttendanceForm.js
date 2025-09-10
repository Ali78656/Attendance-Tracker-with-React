import React, { useState } from "react";
import "../Styles/AttendanceForm.css";

function AttendanceForm({ addStudent }) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    addStudent(name);
    setName("");
  };

  return (
    <div className="form-container">
      <input
        type="text"
        className="input"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn" onClick={handleSubmit}>
        Mark Attendance
      </button>
    </div>
  );
}

export default AttendanceForm;
