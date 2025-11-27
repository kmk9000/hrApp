import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useAxios from "./hooks/useAxios";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonList from "./components/PersonList";
import AddEmployee from "./components/AddEmployee";
import About from "./components/About";

function App() {
  const { get, post, del, BASE_URL } = useAxios();
  const [employees, setEmployees] = useState([]);
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

  useEffect(() => {
    get(BASE_URL).then((response) => {
      setEmployees(response.data);
    });
  }, []);

  const handleClick = () => {
    post(BASE_URL, {
      ...formData,
      skills: formData.skills
        ? formData.skills.split(", ").map((skill) => skill.trim())
        : [],
      isFavourite: false,
    }).then((response) => {
      setEmployees([...employees, response.data]);
    });
  };

  const handleDeleteEmployee = (id) => {
    del(`${BASE_URL}/${id}`).then((response) => {
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id)
      );
    });
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <PersonList
                  employees={employees}
                  onDelete={handleDeleteEmployee}
                />
              }
            />
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
