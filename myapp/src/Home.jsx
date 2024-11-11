import {
  Box,
  Button,
  Container,
  FormControlLabel,
  // FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Feature from "./Feature";
import Testinomial from "./Testinomial";
import Highlight from './Highlight';
import FAQ from "./FAQ";

const Home = () => {
  return (
    <>
      <Container
        sx={{ bgcolor: "white", p: 5, marginTop:"8%" }}
        style={{
          // border: "2px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box textAlign="center" style={{ width: "50%" }}>
          <Typography variant="h3" style={{fontWeight:"bold", textAlign: "center" }}>
           Our Latest Products
          </Typography>

          <Typography variant="b" color="#5C677D">
            Explore our cutting-edge dashboard, delivering high-quality
            solutions tailored to your needs. Elevate your experience with
            top-tier features and services.
          </Typography>

          <Box style={{ width: "100%", padding: "3%" }}>
            <TextField
              style={{ width: "60%", padding: "1%" }}
              placeholder="Your mail"
            />
            <FormControlLabel style={{margin:"2%"}}
              control={
                <Button style={{ backgroundColor: "black", color: "white"}}>
                  Start
                </Button>
              }
            />
          </Box>
        </Box>
      </Container>

      <Stack
        spacing={5}
        style={{ backgroundColor: "white", width: "90%", padding: "5%" }}
      >
        <Box style={{boxShadow:"0px 0px 10px gray"}}>
          <img src="Images/work.jpg" style={{ width: "100%" }}></img>
        </Box>
      </Stack>

      <Stack spacing={2} style={{ backgroundColor: "white"}}>
        <Typography textAlign='center'>Trusted by the best companies</Typography>
        <Box style={{padding:"2%"}}>
          <img src="Images/s1.jpg" style={{width:"100%"}} alt="" />
        </Box>
      </Stack>


      <Feature/>
      <Testinomial/>
      <Highlight/>
      <FAQ/>
    </>
  );
};

export default Home;
