import React from "react";
// import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
// import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Link from "next/link";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    // valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

const page = () => {
  return (
    <div className="flex ">
      <div className="sidebar mt-8">
        <Paper sx={{ width: 200, maxWidth: "100%", height: "100%" }}>
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Documents</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Prescription</ListItemText>
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Patients</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Grant</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </div>
      <div className="hospDash">
        <div className="flex flex-row justify-around items-stretch">
          <h1 className="text-xl mt-4 ml-8 font-bold "> Dashboard</h1>
          <Button className="border-black w-64 mt-4">
            <Link
              href="\hospital\upload-record"
              className="text-white bg-slate-700 hover:text-gray-300 w-48 h-8 rounded-md align-middle pt-1 mt-2"
            >
              Add a record
            </Link>
          </Button>
        </div>

        <div className="flex flex-row p-3 m-4 ml-0">
          <div className="bg-slate-300 h-32 w-64 rounded-md mx-8 flex flex-col justify-center p-4">
            <h5 className="text-sm ">No. of Patients</h5>
            <h1 className="text-xl font-bold">100</h1>
          </div>
          <div className="bg-slate-300 h-32 w-64 rounded-md  mx-8 flex flex-col justify-center p-4">
            <h5 className="text-sm ">No. of Doctors</h5>
            <h1 className="text-xl font-bold">20</h1>
          </div>
          <div className="bg-slate-300 h-32 w-64 rounded-md  mx-8 flex flex-col justify-center p-4 ">
            <h5 className="text-sm ">No. of Beds</h5>
            <h1 className="text-xl font-bold">50</h1>
          </div>
        </div>
        <div className="p-4 mt-4 ml-4 "></div>
        <div className="ml-4">
          <Paper sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              sx={{ border: 0 }}
            />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default page;
