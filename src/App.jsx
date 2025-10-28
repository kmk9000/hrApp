import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonCard from "./components/PersonCard";
import employees from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        {employees.map((employee) => (
          <PersonCard
            key={employee.id}
            name={employee.name}
            title={employee.title}
            salary={employee.salary}
            phone={employee.phone}
            email={employee.email}
            animal={employee.animal}
            startDate={employee.startDate}
            location={employee.location}
            department={employee.department}
            skills={employee.skills}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
