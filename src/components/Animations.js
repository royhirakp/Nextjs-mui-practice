import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function Animations({ dataCount = 2 }) {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#ffff", padding: "15px" }}>
      <Skeleton height={40} />
      <Skeleton height={40} />
    </Box>
  );
}
