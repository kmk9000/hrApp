import PersonCard from "./PersonCard";
export default function PersonList({ employees, onDelete, loading, error }) {
  if (!employees) {
    return (
      <>
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
      error={error}
    />
  ));
}
