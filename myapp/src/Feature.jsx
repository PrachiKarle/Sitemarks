import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";

const Feature = () => {
  const [show1, setShow] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [col1, setCol1] = useState("#F6F6F8");
  const [col2, setCol2] = useState("white");
  const [col3, setCol3] = useState("white");
  //
  let style1 = {
    padding: "5%",
    border: "1px solid #E7E9EF",
    borderRadius: "15px",
    marginBottom: "5%",
    backgroundColor: col1,
  };
  let style2 = {
    padding: "5%",
    border: "1px solid #E7E9EF",
    borderRadius: "15px",
    marginBottom: "5%",
    backgroundColor: col2,
  };
  let style3 = {
    padding: "5%",
    border: "1px solid #E7E9EF",
    borderRadius: "15px",
    marginBottom: "5%",
    backgroundColor: col3,
  };
  const handleClick1 = () => {
    setShow(true);
    setShow2(false);
    setShow3(false);
    setCol1("#F6F6F8");
    setCol2("white");
    setCol3("white");
  };
  const handleClick2 = () => {
    setShow2(true);
    setShow(false);
    setShow3(false);
    setCol1("white");
    setCol2("#F6F6F8");
    setCol3("white");
  };
  const handleClick3 = () => {
    setShow(false);
    setShow2(false);
    setShow3(true);
    setCol1("white");
    setCol2("white");
    setCol3("#F6F6F8");
  };
  return (
    <>
      <Grid container style={{ backgroundColor: "white", padding: "4%",paddingTop:"0%", marginTop:"10%"  }}>
        <Grid size={12}>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Product Features
          </Typography>
        </Grid>
        <Grid size={{ lg: 7, md: 10, sm: 12 }}>
          <Typography variant="b" color="#47536B">
            Provide a brief overview of the key features of the product. For
            example, you could list the number of features, their types or
            benefits, and add-ons.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        style={{ backgroundColor: "white", padding: "3%", paddingTop: "0%" }}
      >
        <Grid size={{ md: 6, sm: 12 }}>
          {show1 ? (
            <>
              <Box style={{ border: "1px solid #E7E9EF", padding: "5%" }}>
                <img src="Images/10002.png" width="100%" height="100%" alt="" />
              </Box>
            </>
          ) : null}

          {show2 ? (
            <>
              <Box style={{ border: "1px solid #E7E9EF", padding: "5%" }}>
                <img src="Images/10003.png" width="100%" height="100%" alt="" />
              </Box>
            </>
          ) : null}
          {show3 ? (
            <>
              <Box style={{ border: "1px solid #E7E9EF", padding: "5%" }}>
                <img src="Images/10004.png" width="100%" height="100%" alt="" />
              </Box>
            </>
          ) : null}
        </Grid>

        <Grid
          size={{ md: 6, sm: 12 }}
          style={{ padding: "4%", paddingTop: "0%", paddingBottom: "0%" }}
        >
          <Box style={style1} onClick={handleClick1}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Dashboard
            </Typography>
            <Typography variant="b">
              This item could provide a snapshot of the most important metrics
              or data points related to the product.
            </Typography>
          </Box>
          <Box style={style2} onClick={handleClick2}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              Mobile Integration
            </Typography>
            <Typography variant="b">
              This item could provide a snapshot of the most important metrics
              or data points related to the product.
            </Typography>
          </Box>
          <Box style={style3} onClick={handleClick3}>
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
