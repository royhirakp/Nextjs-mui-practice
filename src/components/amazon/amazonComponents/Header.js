"use client";
import React from "react";
import Image from "next/image";
import amazonLogo from "../../../assets/amazon/amazon_logo.png";
import { Box, Button, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Header = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box>
      <Stack
      // sx={{ backgroundColor: "beige", border: "1px solid", width: "50px" }}
      >
        {/* logooo */}
        <Button sx={{ width: "50px" }}>
          <Image width={100} src={amazonLogo} alt="loggg" />
          {/* <img src="../../../assets/amazon/amazon_logo.png" alt="logo" /> */}
        </Button>
        {/* location */}
        <Button sx={{ width: "50px" }}>
          <LocationOnIcon />
          <Typography varient="h4">Delevaring to kolkata</Typography>
          <Typography variant="body1">Update Location</Typography>
        </Button>
      </Stack>
      {/* search bar */}
      <Stack>
        <Button>All</Button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("workinggg");
          }}
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Button type="submit">Search</Button>
        </form>
      </Stack>

      {/* language */}
      {/* drop down for language */}
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="LN"
            onChange={handleChange}
          >
            <MenuItem value={"EN"}>En</MenuItem>
            <MenuItem value={"bN"}>Twenty</MenuItem>
            <MenuItem value={"TN"}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* acount singin and login  */}

      {/*return and  order and  */}

      {/* cart option  */}
    </Box>
  );
};

export default Header;
