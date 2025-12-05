import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";

const EmployeesTable = () => {
  const { get, BASE_URL } = useAxios();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    setPage(0); // Reset to first page when sorting
  };

  const sortData = (array) => {
    if (!orderBy) return array;

    return [...array].sort((a, b) => {
      let aValue = a[orderBy];
      let bValue = b[orderBy];

      // Handle salary as numbers
      if (orderBy === "salary") {
        aValue = parseFloat(aValue) || 0;
        bValue = parseFloat(bValue) || 0;
      } else {
        // Handle name as strings (case-insensitive)
        aValue = String(aValue).toLowerCase();
        bValue = String(bValue).toLowerCase();
      }

      if (order === "asc") {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      } else {
        return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
      }
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedData = sortData(data);
  const paginatedData = sortedData.slice(
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
    <TableContainer component={Paper} sx={{ m: 4, alignSelf: "center" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "name"}
                direction={orderBy === "name" ? order : "asc"}
                onClick={() => handleSort("name")}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "title"}
                direction={orderBy === "title" ? order : "asc"}
                onClick={() => handleSort("title")}
              >
                Title
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "salary"}
                direction={orderBy === "salary" ? order : "asc"}
                onClick={() => handleSort("salary")}
              >
                Salary
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "location"}
                direction={orderBy === "location" ? order : "asc"}
                onClick={() => handleSort("location")}
              >
                Location
              </TableSortLabel>
            </TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
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
              <TableCell>{employee.location}</TableCell>
              <TableCell>{employee.phone}</TableCell>
              <TableCell>{employee.email}</TableCell>
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
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10, 25, 50, 100]}
      />
    </TableContainer>
  );
};

export default EmployeesTable;
