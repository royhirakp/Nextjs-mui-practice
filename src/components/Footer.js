"use client";
import { Box, Stack, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import logo from "../assets/logo/headerLogo.png";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "space-between" },
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: {
          xs: "center",
          md: "center",
        },
        margin: "10px 0px 20px 0px",
      }}
    >
      <Stack>
        <Image src={logo} alt="h" />
      </Stack>

      <Stack
        // display="flex"
        // mt={3}
        // justifyContent="center"
        direction="row"
      >
        <Button variant="text"> Home </Button>
        <Button variant="text"> About us</Button>
      </Stack>

      <Stack direction="row" spacing={0}>
        <Button variant="text">
          <LinkedInIcon />{" "}
        </Button>
        <Button variant="text">
          <InstagramIcon />
        </Button>
        <Button variant="text">
          <SportsBasketballIcon />
        </Button>
      </Stack>
    </Box>
  );
};

export default Footer;
