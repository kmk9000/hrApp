import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonList from "./components/PersonList";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <PersonList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
