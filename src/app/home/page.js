import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ImageCard from "@/components/ImageCard";
import FileUplodeCard from "@/components/FileUplodeCard";
import Stack from "@mui/material/Stack";
import AllPrograme from "@/components/AllPrograme";
import Footer from "@/components/Footer";
import Amazon from "@/components/amazon/Amazon";
const index = () => {
  return (
    <>
      <Box>
        <Stack
          direction={{ xs: "column", md: "row" }}
          mt={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "50%",
              },
              // display: "flex",
              // justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                textAlign: {
                  xs: "center",
                },
              }}
              variant="h3"
            >
              Our Programs
            </Typography>
            <Typography
              pr={8}
              sx={{
                textAlign: {
                  xs: "center",
                },
                padding: {
                  xs: "0px",
                  md: "16px 64px 24px 0px",
                },
              }}
              pb={3}
              pt={2}
              variant="body1"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae deserunt consequuntur assumenda ratione atque placeat
              nemo blanditiis sequi, alias, enim rerum? Deleniti magni nesciunt
              dignissimos minus reprehenderit sequi placeat doloribus.
            </Typography>
            <Box
              sx={{
                display: {
                  md: "block",
                  xs: "flex",
                },
                justifyContent: "center",
              }}
            >
              <Button variant="contained">CAT BUTTON </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "50%",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* image cards */}
            <Box
              sx={{
                display: {
                  xs: "block",
                  md: "flex",
                },
                marginTop: {
                  xs: "80px",
                  md: "0px",
                },
              }}
            >
              <ImageCard />
              <FileUplodeCard />
            </Box>
          </Box>
        </Stack>
        {/* ongoing Progtem */}
        <Box>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontSize: "1.5rem",
              lineHeight: "2rem",
              fontWeight: "700",
              marginBottom: "50px",
              marginTop: "53px",
            }}
          >
            Ongoing Programs
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "1.25rem",
              lineHeight: "1.75rem",
            }}
            variant="body1"
          >
            No ongoing programs as of now!
          </Typography>
        </Box>

        <AllPrograme />
      </Box>
      <Footer />

      {/* AMAZON */}
      <Amazon />
    </>
  );
};

export default index;
