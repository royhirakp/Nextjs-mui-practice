"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Animations from "./Animations";
import { Button } from "@mui/material";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "DL1ZD3524",
    "Jun 09,2023 09:56 AM",
    "Jun 09,2023 10:09 AM",
    "201301, Bakhtawarpur, Sector 126, Noida, Uttar Pradesh 201313, India",
    "201301, Bakhtawarpur, Sector 126, Noida, Uttar Pradesh 201313, India"
  ),
  createData(
    "DL1ZD3524",
    "Jun 09,2023 09:56 AM",
    "Jun 09,2023 10:09 AM",
    "201301, Bakhtawarpur, Sector 126, Noida, Uttar Pradesh 201313, India",
    "201301, Bakhtawarpur, Sector 126, Noida, Uttar Pradesh 201313, India"
  ),
];

export default function DataTable({ data }) {
  const [state, setState] = React.useState(false);
  function toggleState() {
    setState(true);
    setTimeout(() => {
      setState(false);
    }, 2000);
  }
  const { tHeadData, tBodyData } = data;
  return (
    <>
      <TableContainer component={Paper} sx={{ boxShadow: "0", border: "0" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Vehicle Number</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="right">End Date</TableCell>
              <TableCell align="right">Start Address</TableCell>
              <TableCell align="right">End Address</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          {state ? (
            <></>
          ) : (
            <>
              <TableBody>
                {/* <TableRow>
          </TableRow> */}

                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    // sx={{
                    //   boxShadow:
                    //     "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                    //   "&:last-child td, &:last-child th": { border: 0 },
                    // }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">
                      <Button onClick={toggleState} variant="contained">
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
          )}
        </Table>
      </TableContainer>

      {state ? <Animations /> : ""}
    </>
  );
}
