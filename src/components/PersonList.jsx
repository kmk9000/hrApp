import PersonCard from "./PersonCard";
// import employeeData from "../assets/employeeData.json";
// comment: former js data import
// import employees from "../data";
// export default function PersonList() {
//   return employees.map((employee) => (
//     <PersonCard key={employee.id} {...employee} />
//   ));
// }

export default function PersonList({ employees, onDelete }) {
  return employees.map((employee) => (
    <PersonCard
      key={employee.id}
      {...employee}
      handleDeleteEmployee={onDelete}
    />
  ));
}
