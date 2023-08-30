"use client";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import Image from "next/image";
import logo from "../assets/logo/headerLogo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: "black",
          textTransform: "none",
          padding: "5px 10px 5px 10px",
          borderRadius: "7px",
          margin: "1px 2px 1px 2px",
          "&:hover": {
            backgroundColor: "lightgray",
          },
        },

        contained: {
          color: "#ffff",
          textTransform: "none",
          backgroundColor: "#f36623",
          borderRadius: "9px",
          "&:hover": {
            backgroundColor: "#f36623",
          },
        },
      },
    },
  },
});

const Header = () => {
  const [activeButtion, setActiveButton] = useState(1);
  function handelclick(int) {
    console.log(int, "button working ");
    setActiveButton(int);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          <Image src={logo} alt="h" />
          <Button
            sx={{
              display: {
                xs: "block",
                // sm: 200, //600
                md: "none",
              },
            }}
          >
            <MenuIcon />
          </Button>
        </Stack>
        <Box
          sx={{ display: { xs: "none", md: "flex" } }}
          flexDirection="row"
          display="flex"
          spacing={2}
          mt={1}
        >
          {[
            { id: 1, buttonName: "Home" },
            { id: 2, buttonName: "Programe Details" },
            { id: 3, buttonName: "Vhiecal details" },
          ].map((item, i) => {
            return (
              <Box display="flex" key={i * 0.025} flexDirection="column">
                <Button
                  onClick={() => handelclick(item.id)}
                  variant="text"
                  margin={1}
                >
                  {item.buttonName}
                </Button>
                {activeButtion == item.id ? (
                  <Box
                    sx={{
                      width: "100%",
                      height: "2px",
                      backgroundColor: "#f36623",
                      borderRadius: "2px",
                    }}
                  ></Box>
                ) : (
                  ""
                )}
              </Box>
            );
          })}
        </Box>
        <Box direction="row" spacing={2} mt={1}>
          <Button onClick={handleClick} variant="contained">
            <AccountCircleIcon sx={{ margin: "2px", marginRight: "10px" }} />
            <Typography>sonai sani</Typography>
            <ExpandMoreIcon sx={{ margin: "2px", marginLeft: "5px" }} />
          </Button>
        </Box>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          PaperProps={{
            style: {
              width: "200px",
              marginTop: "2px",
            },
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
