"use client";
import React from "react";
import Image from "next/image";
import amazonLogo from "../../../assets/amazon/amazon_logo.png";
import { Box, Button, Stack } from "@mui/material";
const Header = () => {
  return (
    <Box>
      <Stack>
        <Button>
          <Image width="100%" src={amazonLogo} alt="loggg" />
          {/* <img src="../../../assets/amazon/amazon_logo.png" alt="logo" /> */}
        </Button>
      </Stack>
    </Box>
  );
};

export default Header;
