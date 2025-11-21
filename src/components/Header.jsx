import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>hrApp</h1>
      <nav>
        <Link to="/">Persons</Link>
        <Link to="/about">About</Link>
        <Link to="/add-employee">Add Employee</Link>
      </nav>
    </header>
  );
}
