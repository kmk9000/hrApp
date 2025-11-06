import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonList from "./components/PersonList";
import "./components/AddEmployee";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <PersonList />
        <AddEmployee />
      </main>
      <Footer />
    </div>
  );
}

export default App;
