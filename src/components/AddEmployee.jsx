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
    <div className="card">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label htmlFor={key}>{key}</label>
            <input
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Add employee</button>
        <button
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
        </button>
      </form>
    </div>
  );
}
