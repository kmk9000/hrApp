import PersonCard from "./PersonCard";
export default function PersonList({ employees, onDelete, loading }) {
  if (!employees) {
    return (
      <>
        <PersonCard loading={true} />
        <PersonCard loading={true} />
        <PersonCard loading={true} />
      </>
    );
  }

  return employees.map((employee) => (
    <PersonCard
      key={employee.id}
      {...employee}
      handleDeleteEmployee={onDelete}
      loading={loading}
    />
  ));
}
