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
      <div className="card-header">
        <h2>{name}</h2>
        <div className="notice-card" style={{ color: "red" }}>
          {yearsEmployed < 0.5 && <p>🔔 Schedule probation review.</p>}
        </div>
        <div className="notice-card" style={{ color: "green" }}>
          {yearsEmployed == 5 && <p>🎉 Schedule recognition meeting. </p>}
          {yearsEmployed == 10 && <p>🎉 Schedule recognition meeting. </p>}
          {yearsEmployed == 15 && <p>🎉 Schedule recognition meeting. </p>}
        </div>
      </div>
      <p>Title: {title}</p>
      <p>Salary: {salary}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>
        Favorite animal:
        {animalEmojis[animal] ?? "❓"}
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
