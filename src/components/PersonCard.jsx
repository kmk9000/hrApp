import animalEmojis from "../assets/animalEmojis.json";
import { useState } from "react";
import axios from "axios";

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
  id,
  handleDeleteEmployee,
}) {
  const yearsEmployed =
    new Date().getFullYear() - new Date(startDate).getFullYear();

  const [isEditing, setIsEditing] = useState(false);
  const [person, setPerson] = useState({
    salary,
    location,
    department,
    skills,
  });

  const update = (url = "http://localhost:3001", body = {}, headers = {}) => {
    axios.patch(url, body, { headers });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    update(`http://localhost:3001/employees/${id}`, person);
  };

  const renderEditForm = (value, field) => {
    const capitalizeWords = (text) =>
      text
        .toString()
        .replace(
          /\w\S*/g,
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
    const displayValue = value
      ? Array.isArray(value)
        ? value.join(", ")
        : capitalizeWords(value)
      : "N/A";
    const displayName = field ? capitalizeWords(field) : "N/A";

    return isEditing ? (
      <p>
        {displayName}:
        <input
          value={value || ""}
          name={field.toLowerCase()}
          onChange={handleInputChange}
        />
      </p>
    ) : (
      <p>
        {displayName}: {displayValue}
      </p>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>{name}</h2>
        <div className="notice-card" style={{ color: "red" }}>
          {yearsEmployed < 0.5 && <p>🔔 Schedule probation review.</p>}
        </div>
        <div className="notice-card" style={{ color: "green" }}>
          {yearsEmployed === 5 && <p>🎉 Schedule recognition meeting. </p>}
          {yearsEmployed === 10 && <p>🎉 Schedule recognition meeting. </p>}
          {yearsEmployed === 15 && <p>🎉 Schedule recognition meeting. </p>}
        </div>
      </div>
      <p>Title: {title}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>
        Favorite animal:
        {animalEmojis[animal] ?? "❓"}
      </p>
      <p>Start date: {startDate}</p>
      <p>Years employed: {yearsEmployed}</p>
      <div className="editable-card">
        {renderEditForm(person.salary, "Salary")}
        {renderEditForm(person.location, "Location")}
        {renderEditForm(person.department, "Department")}
        {renderEditForm(person.skills, "Skills")}
      </div>
      {/* <p>Salary: {salary}</p>
      <p>Location: {location}</p>
      <p>Department: {department}</p>
      <p>Skills: {(skills ?? []).join(", ")}</p> */}
      {/* ?? nullish coalescing operator, if first condition is undefined, it will do the second
      this was an issue because using a method like join broke the site when skills was undefined
      REMEMBER THIS*/}
      <button
        onClick={() => {
          if (isEditing) handleEdit();
          setIsEditing((prev) => !prev);
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      {isEditing && (
        <button
          onClick={() => {
            if (isEditing) handleEdit();
            setIsEditing((prev) => !prev);
          }}
        >
          Cancel
        </button>
      )}
      <button
        onClick={() => {
          if (window.confirm(`Are you sure you want to delete ${name}`)) {
            handleDeleteEmployee(id);
          }
        }}
      >
        Delete
      </button>
    </div>
  );
}
