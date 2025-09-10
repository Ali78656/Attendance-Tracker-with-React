import React, { useState, useEffect } from "react";
import "./Styles/App.css";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceTable from "./components/AttendanceTable";
import ExportCSV from "./components/ExportCSV";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [students, setStudents] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("attendanceData");
    if (storedData) {
      setStudents(JSON.parse(storedData));
    }
    const storedTheme = localStorage.getItem("darkMode");
    setDarkMode(storedTheme === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("attendanceData", JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const addStudent = (name) => {
    if (name.trim() === "") return;
    const newStudent = { id: Date.now(), name, present: true };
    setStudents([...students, newStudent]);
  };

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  return (
    <motion.div
      className={`app-container ${darkMode ? "dark-mode" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="title">Student Attendance Tracker</h2>
      <motion.button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </motion.button>
      <div className="content">
        <AttendanceForm addStudent={addStudent} />
        <AttendanceTable
          students={students}
          toggleAttendance={toggleAttendance}
        />
        <ExportCSV students={students} />
      </div>
    </motion.div>
  );
}

export default App;
