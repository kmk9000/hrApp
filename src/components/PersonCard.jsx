import animalEmojis from "../assets/animalEmojis.json";

export default function PersonCard({
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
      <div style={{ color: "red" }}>
        {yearsEmployed < 0.5 ? "🔔 Schedule probation review." : ""}
      </div>
      <div style={{ color: "green" }}>
        {yearsEmployed == 5 ? "🎉 Schedule recognition meeting." : ""}
        {yearsEmployed == 10 ? "🎉 Schedule recognition meeting." : ""}
        {yearsEmployed == 15 ? "🎉 Schedule recognition meeting." : ""}
      </div>
      <p>Title: {title}</p>
      <p>Salary: {salary}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>
        Favorite animal:
        {animalEmojis[animal] ?? " Unknown"}
      </p>
      <p>Start date: {startDate}</p>
      <p>Years employed: {yearsEmployed}</p>
      <p>Location: {location}</p>
      <p>Department: {department}</p>
      <p>Skills: {(skills ?? []).join(", ")}</p>
      {/* ?? nullish coalescing operator, if first condition is undefined, it will do the second
      this was an issue because using a method like join broke the site when skills was undefined
      REMEMBER THIS*/}
    </div>
  );
}
