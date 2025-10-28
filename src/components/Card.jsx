export default function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Title: {props.title}</p>
      <p>Salary: {props.salary}</p>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <p>Animal: {props.animal}</p>
    </div>
  );
}
