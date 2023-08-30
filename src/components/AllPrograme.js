import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import DataTable from "./DataTable";

const AllPrograme = () => {
  return (
    <Box>
      <Typography variant="h3" pt={6} component="h2" textAlign="center">
        All Programs
      </Typography>
      <Stack
        spacing={2}
        display="flex"
        justifyContent="flex-end"
        direction="row"
        // mr={3}
      >
        <Button variant="contained">xl</Button>
      </Stack>
      <DataTable data={{ tHeadData: [], tBodyData: [{ name: "hirak" }] }} />

      <Stack
        spacing={2}
        display="flex"
        mt={3}
        justifyContent="center"
        direction="row"
      >
        <Button variant="contained"> Prev Page</Button>
        <Button variant="contained"> Next Page</Button>
      </Stack>
    </Box>
  );
};

export default AllPrograme;
