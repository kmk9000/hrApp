import PersonCard from "./PersonCard";
import employees from "../data";
export default function PersonList() {
  return employees.map((employee) => (
    <PersonCard key={employee.id} {...employee} />
  ));
}
