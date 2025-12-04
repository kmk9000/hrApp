import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";

const EmployeesTable = () => {
  const { get, BASE_URL } = useAxios();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedData = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  useEffect(() => {
    get(BASE_URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No employees found.</div>;
  }

  return (
    <TableContainer component={Paper} sx={{ m: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Animal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.id}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.title}</TableCell>
              <TableCell>{employee.salary}</TableCell>
              <TableCell>{employee.phone}</TableCell>
              <TableCell>{employee.animal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[]}
      />
    </TableContainer>
  );
};

export default EmployeesTable;
