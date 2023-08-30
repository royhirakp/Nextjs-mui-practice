"use client";
import { createTheme } from "@mui/material/styles";
const globalTheam = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        contained: {
          // Some CSS
          // fontSize: "1rem",
          // border: "10px solid",
          color: "#ffff",
          textTransform: "none",
          backgroundColor: "#f36623",
          borderRadius: "15px",
          padding: "10px 15px 10px 15px",
          "&:hover": {
            backgroundColor: "#f36623",
          },
        },
        text: {
          padding: "0px",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#f36623",
    },
  },
});

export default globalTheam;
