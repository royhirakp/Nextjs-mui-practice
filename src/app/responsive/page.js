"use client";
import React from "react";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const page = () => {
  return (
    <Box
      sx={{
        height: "300px",
        width: {
          xs: 100, //0
          sm: 200, //600
          md: 300, //900
          lg: 400, //1200
          xl: 500, //1536
        },
        color: { xs: "palegreen", sm: "red" },
        border: { xs: "1px solid", sm: "5px solid" },
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
      55555
    </Box>
  );
};

export default page;
