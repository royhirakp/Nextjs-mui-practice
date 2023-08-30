"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Stack } from "@mui/material";
import logo from "../assets/Home/user.png";
import Image from "next/image";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

export default function ImageCard() {
  return (
    <Box>
      <Card
        sx={{
          minWidth: 250,
          minHeight: "300px",
          // width: { md: "" },
          borderRadius: "20px",
          padding: "15px",
        }}
      >
        <CardActionArea>
          <Stack
            // direction="row"
            // sx={{ display: "flex", justifyContent: "center" }}
            spacing={2}
          >
            <Image
              style={{ width: "100%", height: "auto" }}
              src={logo}
              alt="h"
            />
          </Stack>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mark Philips
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Program Manager
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          display: "inline",
          bottom: "390px",
          left: "120px",
          position: "relative",
        }}
      >
        <Button
          size="small"
          color="primary"
          sx={{
            backgroundColor: "#ffff",
            color: "#f36623",
            width: "50px",
            height: "59px",
            borderRadius: "50%",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              backgroundColor: "#ffff",
            },
          }}
        >
          <MailIcon />
        </Button>
        <Button
          size="small"
          sx={{
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#ffff",
            color: "#f36623",
            width: "50px",
            height: "59px",
            borderRadius: "50%",
            "&:hover": {
              backgroundColor: "#ffff",
            },
          }}
          color="primary"
        >
          <CallIcon />
        </Button>
      </Stack>
    </Box>
  );
}
