import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonList from "./components/PersonList";
import AddEmployee from "./components/AddEmployee";
import employeeData from "./assets/employeeData.json";

function App() {
  const [employees, setEmployees] = useState(employeeData);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
    startDate: "",
    location: "",
    department: "",
    skills: "",
  });

  const handleClick = (employeeData) => {
    setEmployees([
      ...employees,
      {
        id: Date.now(),
        name: formData.name,
        title: formData.title,
        salary: formData.salary,
        phone: formData.phone,
        email: formData.email,
        animal: formData.animal,
        startDate: formData.startDate,
        location: formData.location,
        department: formData.department,
        skills: formData.skills.split(",").map((skill) => skill.trim()),
      },
    ]);
  };

  return (
    <div className="container">
      <Header />
      <main>
        <PersonList employees={employees} />
        <AddEmployee
          formData={formData}
          setFormData={setFormData}
          handleClick={handleClick}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
