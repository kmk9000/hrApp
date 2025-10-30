import animalEmojis from "../assets/animalEmojis.json";

export default function Card({
  name,
  title,
  salary,
  phone,
  email,
  animal,
  startDate,
  location,
  department,
  skills,
}) {
  const yearsEmployed =
    new Date().getFullYear() - new Date(startDate).getFullYear();
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Title: {title}</p>
      <p>Salary: {salary}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Animal: {animalEmojis[animal]}</p>
      <p>Start date: {startDate}</p>
      <p>
        Years employed: {yearsEmployed}{" "}
        {yearsEmployed == 5 ? "🎉 Schedule recognition meeting." : ""}
        {yearsEmployed == 10 ? "🎉 Schedule recognition meeting." : ""}
        {yearsEmployed == 15 ? "🎉 Schedule recognition meeting." : ""}
        {yearsEmployed < 0.5 ? "🔔 Schedule probation review." : ""}
      </p>
      <p>Location: {location}</p>
      <p>Department: {department}</p>
      <p>Skills: {skills.join(", ")}</p>
    </div>
  );
}
