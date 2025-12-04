import animalEmojis from "../assets/animalEmojis.json";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import styles from "./PersonCard.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

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
  loading,
}) {
  const yearsEmployed =
    new Date().getFullYear() - new Date(startDate).getFullYear();
  const { patch, BASE_URL } = useAxios();
  const [isEditing, setIsEditing] = useState(false);
  const [person, setPerson] = useState({
    salary,
    location,
    department,
    skills,
  });

  const update = (url = BASE_URL, body = {}, headers = {}) => {
    patch(url, body, { headers });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    update(`${BASE_URL}/${id}`, person);
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

  if (loading) {
    return (
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "2rem",
          width: 400,
        }}
      >
        <CircularProgress />
      </Card>
    );
  }

  return (
    <Card
      variant="outlined"
      sx={{ padding: "1rem", margin: "0.5rem 1rem", width: 400 }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              width: 56,
              height: 56,
              fontSize: "2rem",
              bgcolor: "primary.light",
            }}
          >
            {animalEmojis[animal] ?? "❓"}
          </Avatar>
        }
        title={
          <Typography variant="h6" component="div" fontWeight="bold">
            {name}
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        }
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          "& .MuiCardHeader-subheader": {
            color: "rgba(255, 255, 255, 0.9)",
          },
        }}
      />
      <Box sx={{ border: "solid 2px black" }}>
        <div className={styles.noticeCardRed}>
          {yearsEmployed < 0.5 && <p>🔔 Schedule probation review.</p>}
        </div>
        <div className={styles.noticeCardGreen}>
          {yearsEmployed === 5 && <p>🎉 Schedule recognition meeting. </p>}
          {yearsEmployed === 10 && <p>🎉 Schedule recognition meeting. </p>}
          {yearsEmployed === 15 && <p>🎉 Schedule recognition meeting. </p>}
        </div>
      </Box>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>
        Favorite animal:
        {animalEmojis[animal] ?? "❓"}
      </p>
      <p>Start date: {startDate}</p>
      <p>Years employed: {yearsEmployed}</p>
      <div className={styles.editableCard}>
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
      <Button
        variant="contained"
        onClick={() => {
          if (isEditing) handleEdit();
          setIsEditing((prev) => !prev);
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </Button>
      {isEditing && (
        <Button
          variant="contained"
          onClick={() => {
            if (isEditing) handleEdit();
            setIsEditing((prev) => !prev);
          }}
        >
          Cancel
        </Button>
      )}
      <Button
        variant="contained"
        onClick={() => {
          if (window.confirm(`Are you sure you want to delete ${name}`)) {
            handleDeleteEmployee(id);
          }
        }}
      >
        Delete
      </Button>
    </Card>
  );
}
