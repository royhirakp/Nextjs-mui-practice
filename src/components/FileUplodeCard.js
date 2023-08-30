import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Stack } from "@mui/material";

import FolderIcon from "@mui/icons-material/Folder";
import ProgresBar from "./ProgresBar";
export default function FileUplodeCard() {
  return (
    <Box>
      <Card
        sx={{
          minWidth: 250,
          // width: "250px",
          minHeight: "300px",
          padding: "15px",
          position: {
            xs: "initial",
            md: "relative",
          },
          top: "98px",
          right: "98px",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FolderIcon />
        </Box>
        <Typography mt={2} variant="h5">
          Files uploading...
        </Typography>

        {[10, 50, 40, 100].map((item, i) => {
          return <ProgresBar key={i * 0.02} value={item} />;
        })}
      </Card>

      {/* <Card
        sx={{
          zIndex: "55",
          position: "relative",
          bottom: "321px",
          alignItems: "center",
          left: "134px",
          width: "88px",
          textAlign: "center",
          height: "62px",
          paddingTop: "19px",
          borderRadius: "24px",
        }}
      >
        <Typography variant="h4">56%</Typography>
      </Card> */}
    </Box>
  );
}
