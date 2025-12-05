import animalEmojis from "../assets/animalEmojis.json";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import {
  CircularProgress,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Alert,
  Divider,
  TextField,
} from "@mui/material";

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
    const displayValue = value
      ? Array.isArray(value)
        ? value.join(", ")
        : value
      : "N/A";
    const displayName = field || "N/A";

    return isEditing ? (
      <TextField
        variant="standard"
        label={displayName}
        value={value || ""}
        name={field.toLowerCase()}
        onChange={handleInputChange}
        size="small"
        fullWidth
        sx={{ mb: 2 }}
      />
    ) : (
      <>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="text.secondary" gutterBottom>
          <strong>{displayName}:</strong> {displayValue}
        </Typography>
      </>
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
      sx={{
        padding: "1rem",
        margin: "0.5rem 1rem",
        width: 400,
        position: "relative",
      }}
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
      <CardContent>
        {/* notifications */}
        {yearsEmployed < 0.5 && (
          <Alert severity="warning" sx={{ mb: 2 }}>
            🔔 Schedule probation review.
          </Alert>
        )}
        {(yearsEmployed === 5 ||
          yearsEmployed === 10 ||
          yearsEmployed === 15) && (
          <Alert severity="success" sx={{ mb: 2 }}>
            🎉 Schedule recognition meeting.
          </Alert>
        )}
        {/* contact info + employment time */}
        <Box sx={{ p: 2, mb: 2 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>Phone:</strong> {phone}
            <Divider sx={{ my: 2 }} />
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>Email:</strong> {email}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color="text.secondary" gutterBottom>
            <strong>Start Date:</strong> {startDate}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color="text.secondary">
            <strong>Years Employed:</strong> {yearsEmployed}
          </Typography>
          {/* <Typography variant="h7">Editable Fields:</Typography>
          <br /> */}
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {renderEditForm(person.salary, "Salary")}
            {renderEditForm(person.location, "Location")}
            {renderEditForm(person.department, "Department")}
            {renderEditForm(person.skills, "Skills")}
          </Typography>
        </Box>

        {/* edit and delete buttons */}
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            bottom: 16,
            left: 0,
            right: 0,
            mx: "auto",
            justifyContent: "center",
            alignContent: "center",
            gap: 1,
          }}
        >
          {" "}
          <Button
            variant="contained"
            startIcon={<EditIcon />}
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
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => {
              if (window.confirm(`Are you sure you want to delete ${name}`)) {
                handleDeleteEmployee(id);
              }
            }}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
