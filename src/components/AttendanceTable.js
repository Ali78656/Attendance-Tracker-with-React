import React from "react";
import "../Styles/AttendanceTable.css";

function AttendanceTable({ students, toggleAttendance }) {
  return (
    <table className="attendance-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td className={student.present ? "present" : "absent"}>
              {student.present ? "Present" : "Absent"}
            </td>
            <td>
              <button
                className="toggle-btn"
                onClick={() => toggleAttendance(student.id)}
              >
                Toggle
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AttendanceTable;
