import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";

const Feature = (props) => {
  let col = "white",
    col4 = "black";
  if (props.mode) {
    col = "white";
    col4 = "black";
  } else {
    col = "black";
    col4 = "white";
  }
  const [show1, setShow] = useState([true,false,false]);

  const handleClick1 = () => {
    setShow([true,false,false]);
  };
  const handleClick2 = () => {
    setShow([false,true,false]);
  };
  const handleClick3 = () => {
    setShow([false,false,true]);
  };
  return (
    <>
      <Grid
        container
        style={{
          backgroundColor: col,
          color: col4,
          padding: "4%",
          paddingTop:"8%"
        }}
      >
        <Grid size={12}>
          <Typography variant="h6" style={{ fontWeight: "bolder" }}>
            Product Features
          </Typography>
        </Grid>
        <Grid size={{ lg: 7, md: 10, sm: 12 }}>
          <Typography variant="b">
            Provide a brief overview of the key features of the product. For
            example, you could list the number of features, their types or
            benefits, and add-ons.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          backgroundColor: col,
          color: col4,
          padding: "3%",
          paddingTop: "0%",
        }}
      >
        <Grid size={{ md: 6, sm: 12 }}>
          {show1[0] ? (
            <>
              <Box
                style={{
                  border: "1px solid #E7E9EF",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img src="Images/10002.png" width="100%" height="100%" alt="" />
              </Box>
            </>
          ) : null}

          {show1[1] ? (
            <>
              <Box
                style={{
                  border: "1px solid #E7E9EF",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img src="Images/10003.png" width="100%" height="100%" alt="" />
              </Box>
            </>
          ) : null}
          {show1[2] ? (
            <>
              <Box
                style={{
                  border: "1px solid #E7E9EF",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img src="Images/10004.png" width="100%" height="100%" alt="" />
              </Box>
            </>
          ) : null}
        </Grid>

        <Grid
          size={{ md: 6, sm: 12 }}
          style={{ padding: "4%", paddingTop: "0%", paddingBottom: "0%" }}
        >
          <Box
            style={{
              padding: "5%",
              border: "1px solid #E7E9EF",
              borderRadius: "15px",
              marginBottom: "5%",
              
            }}
            onClick={handleClick1}
          >
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Dashboard
            </Typography>
            <Typography variant="b">
              This item could provide a snapshot of the most important metrics
              or data points related to the product.
            </Typography>
          </Box>
          <Box
            style={{
              padding: "5%",
              border: "1px solid #E7E9EF",
              borderRadius: "15px",
              marginBottom: "5%",
              
            }}
            onClick={handleClick2}
          >
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Mobile Integration
            </Typography>
            <Typography variant="b">
              This item could provide a snapshot of the most important metrics
              or data points related to the product.
            </Typography>
          </Box>
          <Box
            style={{
              padding: "5%",
              border: "1px solid #E7E9EF",
              borderRadius: "15px",
              marginBottom: "5%",
              
            }}
            onClick={handleClick3}
          >
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Available on All platform
            </Typography>
            <Typography variant="b">
              This item could provide a snapshot of the most important metrics
              or data points related to the product.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Feature;
