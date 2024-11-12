import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const Highlight = (props) => {
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
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "3%",paddingTop:"8%",backgroundColor:col1,color:col2
        }}
      >
        <Grid
          size={{ md: 8, sm: 12 }}
          style={{ padding: "3%", textAlign: "center" }}
        >
          <Typography textAlign="center" variant="h6" fontWeight="bold">
            Highlights
          </Typography>
          <Typography variant="b">
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer
            support and precision in every detail.
          </Typography>
        </Grid>

        <Grid size={12}>
          <Grid container>
            <Grid
              size={{ lg: 4, md: 6, sm: 12 }}
              style={{
                padding: "1%",
              }}
            >
              <Box
                style={{
                  border: "1px solid #E7E9EF",
                  borderRadius: "2%",
                  padding: "5%",
                }}
              >
                <Typography variant="b">
                  <b>Adaptable performance</b> <br />
                  Our product effortlessly adjusts to your needs, boosting
                  efficiency and simplifying your tasks.
                </Typography>
              </Box>
            </Grid>
            <Grid
              size={{ lg: 4, md: 6, sm: 12 }}
              style={{
                padding: "1%",
              }}
            >
              <Box
                style={{
                  border: "1px solid #E7E9EF",
                  borderRadius: "2%",
                  padding: "5%",
                }}
              >
                <Typography variant="b">
                  <b>Built to last</b> <br />
                  Experience unmatched durability that goes above and beyond
                  with lasting investment.
                </Typography>
              </Box>
            </Grid>
            <Grid
              size={{ lg: 4, md: 6, sm: 12 }}
              style={{
                padding: "1%",
              }}
            >
              <Box
                style={{
                  border: "1px solid #E7E9EF",
                  borderRadius: "2%",
                  padding: "5%",
                }}
              >
                <Typography variant="b">
                  <b>Great user experience</b>
                  <br /> Integrate our product into your routine with an
                  intuitive and easy-to-use interface
                </Typography>
              </Box>
            </Grid>
            <Grid
              size={{ lg: 4, md: 6, sm: 12 }}
              style={{
                padding: "1%",
              }}
            >
              <Box
                style={{
                  border: "1px solid #E7E9EF",
                  borderRadius: "2%",
                  padding: "5%",
                }}
              >
                <Typography variant="b">
                  <b>Innovative functionality</b> <br />
                  Stay ahead with features that set new standards, addressing
                  your evolving needs better than the rest.
                </Typography>
              </Box>
            </Grid>
            <Grid
              size={{ lg: 4, md: 6, sm: 12 }}
              style={{
                padding: "1%",
              }}
            >
              <Box
                style={{
                  border: "1px solid #E7E9EF",
                  borderRadius: "2%",
                  padding: "5%",
                }}
              >
                <Typography variant="b">
                  <b>Reliable support</b>
                  <br />
                  Count on our responsive customer support, offering assistance
                  that goes beyond the purchase.
                </Typography>
              </Box>
            </Grid>
            <Grid
              size={{ lg: 4, md: 6, sm: 12 }}
              style={{
                padding: "1%",
              }}
            >
              <Box
                style={{
                  border: "1px solid #E7E9EF",
                  borderRadius: "2%",
                  padding: "5%",
                }}
              >
                <Typography variant="b">
                  <b>Precision in every detail</b> <br />
                  Enjoy a meticulously crafted product where small touches make
                  a significant impact on your overall experience.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Highlight;
