import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Card
          name="Tim Timothy"
          title="CEO"
          salary="5000"
          phone="987-42-112"
          email="tim@company.com"
          animal="Lion"
        />
        <Card
          name="Jim Jimothy"
          title="CTO"
          salary="4500"
          phone="123-45-678"
          email="jim@company.com"
          animal="Eagle"
        />
        <Card
          name="Dim Dimothy"
          title="Consultant"
          salary="3700"
          phone="999-11-000"
          email="dim@company.com"
          animal="Hawk"
        />
        <Card
          name="Michael Chen"
          title="Developer"
          salary="3800"
          phone="555-12-345"
          email="michael@company.com"
          animal="Dolphin"
        />
        <Card
          name="Emily Rodriguez"
          title="Designer"
          salary="3600"
          phone="777-88-999"
          email="emily@company.com"
          animal="Fox"
        />
        <Card
          name="David Wilson"
          title="Manager"
          salary="4200"
          phone="444-33-222"
          email="david@company.com"
          animal="Bear"
        />
        <Card
          name="Jessica Brown"
          title="Analyst"
          salary="3500"
          phone="111-22-333"
          email="jessica@company.com"
          animal="Owl"
        />
        <Card
          name="Robert Taylor"
          title="Engineer"
          salary="4000"
          phone="666-55-444"
          email="robert@company.com"
          animal="Wolf"
        />
        <Card
          name="Amanda Lee"
          title="Director"
          salary="4800"
          phone="222-77-888"
          email="amanda@company.com"
          animal="Swan"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
