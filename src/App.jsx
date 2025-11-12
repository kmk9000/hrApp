import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonList from "./components/PersonList";
import AddEmployee from "./components/AddEmployee";
import db from "./assets/db.json";
import About from "./components/About";

function App() {
  const [employees, setEmployees] = useState(db.employees);
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
  const handleClick = (employees) => {
    setEmployees([
      ...employees,
      {
        id: Date.now(),
        ...employees,
        skills: formData.skills.split(",").map((skill) => skill.trim()),
      },
    ]);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<PersonList employees={employees} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/add-employee"
              element={
                <AddEmployee
                  formData={formData}
                  setFormData={setFormData}
                  handleClick={handleClick}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
