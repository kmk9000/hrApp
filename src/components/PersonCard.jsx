export default function Card(props) {
  let yearsEmployed =
    new Date().getFullYear() - new Date(props.startDate).getFullYear();
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Title: {props.title}</p>
      <p>Salary: {props.salary}</p>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <p>Animal: {props.animal}</p>
      <p>Start date: {props.startDate}</p>
      <p>
        Years employed: {yearsEmployed}{" "}
        {yearsEmployed == 5 ? "Schedule recognition meeting." : ""}
        {yearsEmployed == 10 ? "Schedule recognition meeting." : ""}
        {yearsEmployed == 15 ? "Schedule recognition meeting." : ""}
      </p>
      <p>Location: {props.location}</p>
      <p>Department: {props.department}</p>
      <p>Skills: {props.skills.join(", ")}</p>
    </div>
  );
}
