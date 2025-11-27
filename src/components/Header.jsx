import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>hrApp</h1>
      <nav>
        <Link to="/">Persons</Link>
        <Link to="/about">About</Link>
        <Link to="/add-employee">Add Employee</Link>
      </nav>
    </header>
  );
}
