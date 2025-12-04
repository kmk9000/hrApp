import { Box, Card, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function AddEmployee({ formData, setFormData, handleClick }) {
  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeData = {
      ...formData,
      animal:
        formData.animal.charAt(0).toUpperCase() +
        formData.animal.slice(1).toLowerCase(),
      skills: formData.skills.split(",").map((skill) => skill.trim()),
    };
    handleClick(employeeData);
    console.log(employeeData);

    setFormData({
      name: "",
      title: "",
      salary: "",
      phone: "",
      email: "",
      animal: "",
      startDate: "",
      location: "",
      department: "",
      skills: "",
    });
  };

  return (
    <Card
      sx={{
        padding: "2rem",
        margin: "1rem 2rem",
        maxWidth: 800,
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center" }} gutterBottom>
        Add Employee
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* {Object.keys(formData).map((key) => (
          <div key={key}>
            <label htmlFor={key}>{key}</label>
            <input
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))} */}
        <TextField
          variant="standard"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          variant="standard"
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          variant="standard"
          label="Salary"
          name="salary"
          type="number"
          value={formData.salary}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          variant="standard"
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          variant="standard"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          variant="standard"
          label="Animal"
          name="animal"
          value={formData.animal}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          variant="standard"
          label="Start Date"
          name="startDate"
          type="date"
          value={formData.startDate}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          variant="standard"
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          variant="standard"
          label="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          variant="standard"
          label="Skills"
          name="skills"
          placeholder="Please separate skills with a comma"
          value={formData.skills}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Box>
          <Button variant="contained" type="submit">
            Add employee
          </Button>
          <Button
            variant="contained"
            type="reset"
            onClick={() => {
              setFormData({
                name: "",
                title: "",
                salary: "",
                phone: "",
                email: "",
                animal: "",
                startDate: "",
                location: "",
                department: "",
                skills: "",
              });
            }}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Card>
  );
}
