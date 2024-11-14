import {
  Box,
  Button,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Feature from "./Feature";
import Testinomial from "./Testinomial";
import Highlight from "./Highlight";
import FAQ from "./FAQ";
import Grid from "@mui/material/Grid2";

const Home = (props) => {
  
  let col1 = "white",
    col2 = "black";
  if (props.mode) {
    col1 = "white";
    col2 = "black";
  } else {
    col1 = "black";
    col2 = "white";
  }
  return (
    <>
      <Grid container size={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: col1,
          color: col2,
          margin: "0%",
          padding:"10%",
          width: "100%",
        }}
      >
        <Box textAlign="center" style={{ width: "60%" }}>
          <Typography
            variant="h3"
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            Our Latest Products
          </Typography>

          <Typography variant="b">
            Explore our cutting-edge dashboard, delivering high-quality
            solutions tailored to your needs. Elevate your experience with
            top-tier features and services.
          </Typography>

          {props.mode ? (
            <>
              <Box style={{ width: "100%", padding: "3%" }}>
                <TextField
                  style={{ width: "60%", padding: "1%" }}
                  placeholder="Your mail"
                />
                <FormControlLabel
                  style={{ margin: "2%" }}
                  control={<Button variant="contained">Start</Button>}
                />
              </Box>
            </>
          ) : null}
        </Box>
      </Grid>

      <Stack
        spacing={5}
        style={{
          width: "90%",
          padding: "5%",
          backgroundColor: col1,
          color: col2,
        }}
      >
        <Box style={{ boxShadow: "0px 0px 10px gray" }}>
          <img src="Images/work.jpg" style={{ width: "100%" }}></img>
        </Box>
      </Stack>

     

      <Feature mode={props.mode}/>
      <Testinomial  mode={props.mode}/>
      <Highlight mode={props.mode}/>
      <FAQ mode={props.mode}/>
    </>
  );
};

export default Home;
