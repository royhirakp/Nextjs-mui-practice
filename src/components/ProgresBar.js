"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Typography, Button, Stack } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
export default function ProgresBar({ value }) {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "5px",
        marginTop: "16px",
        marginBottom: "2px",
        display: "flex",
      }}
    >
      <Stack mr={2}>
        <Button variant="contained">
          <FileCopyIcon />
        </Button>
      </Stack>

      <Stack sx={{ width: "100%", marginRight: "5px" }} mt={3}>
        <LinearProgress variant="determinate" value={value} />
      </Stack>

      <Typography mt={1}>{value}%</Typography>
    </Box>
  );
}
