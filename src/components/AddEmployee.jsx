import { Typography } from "@mui/material";
import styles from "./AddEmployee.module.css";
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
    <div className={styles.card}>
      <Typography>
        <h2>Add Employee</h2>
      </Typography>
      <form onSubmit={handleSubmit} className={styles.form}>
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
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="salary">Salary</label>
        <input
          id="salary"
          name="salary"
          type="number"
          value={formData.salary}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="animal">Animal</label>
        <input
          id="animal"
          name="animal"
          value={formData.animal}
          onChange={handleChange}
        />

        <label htmlFor="startDate">Start date</label>
        <input
          id="startDate"
          name="startDate"
          type="date"
          value={formData.startDate}
          onChange={handleChange}
        />

        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />

        <label htmlFor="department">Department</label>
        <input
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />

        <label htmlFor="skills">Skills</label>
        <input
          id="skills"
          name="skills"
          placeholder="Please separate skills with a comma"
          value={formData.skills}
          onChange={handleChange}
        />

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
      </form>
    </div>
  );
}
