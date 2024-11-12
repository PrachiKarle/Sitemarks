import { Box, Typography, Avatar } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const Testinomial = (props) => {
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
          padding:"3%",paddingTop:"8%",backgroundColor:col1,color:col2
        }}
      >
        <Grid
          size={{ md: 8, sm: 12 }}
          style={{ padding: "3%", textAlign: "center" }}
        >
          <Typography textAlign="center" variant="h6" fontWeight="bold">
            Testinomial
          </Typography>
          <Typography variant="b">
            See what our customers love about our products. Discover how we
            excel in efficiency, durability, and satisfaction. Join us for
            quality, innovation, and reliable support.
          </Typography>
        </Grid>

        <Grid size={12} style={{backgroundColor:col1,color:col2}}>
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
                  height: "200px",
                }}
              >
                <Typography variant="b" style={{ height: "85%" }}>
                  I absolutely love how versatile this product is! Whether I'm
                  tackling work projects or indulging in my favorite hobbies, it
                  seamlessly adapts to my changing needs. Its intuitive design
                  has truly enhanced my daily routine, making tasks more
                  efficient and enjoyable.
                </Typography>
                <Box
                  style={{ display: "flex", marginTop: "5%", height: "15%" }}
                >
                  <Avatar
                    src="Images/1.jpg"
                    style={{ marginRight: "5%" }}
                  ></Avatar>
                  <Typography variant="b">
                    Remy Sharp <br />{" "}
                    <b style={{ fontWeight: "normal" }}>
                      Senior Engineer
                    </b>
                  </Typography>
                </Box>
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
                  height: "200px",
                }}
              >
                <Typography variant="b" style={{ height: "80%" }}>
                  One of the standout features of this product is the
                  exceptional customer support. In my experience, the team
                  behind this product has been quick to respond and incredibly
                  helpful. It's reassuring to know that they stand firmly behind
                  their product efficient and enjoyable.
                </Typography>
                <Box
                  style={{ display: "flex", marginTop: "5%", height: "15%" }}
                >
                  <Avatar
                    src="Images/2.jpg"
                    style={{ marginRight: "5%" }}
                  ></Avatar>
                  <Typography variant="b">
                    Travis Howard <br />{" "}
                    <b style={{ fontWeight: "normal" }}>
                      Lead Product Designer
                    </b>
                  </Typography>
                </Box>
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
                  height: "200px",
                }}
              >
                <Typography variant="b" style={{ height: "80%" }}>
                  The level of simplicity and user-friendliness in this product
                  has significantly simplified my life. I appreciate the
                  creators for delivering a solution that not only meets but
                  exceeds user expectations and user-friendliness in this product
                  has significantly simplified my life.
                </Typography>
                <Box
                  style={{ display: "flex", marginTop: "5%", height: "15%" }}
                >
                  <Avatar
                    src="Images/3.jpg"
                    style={{ marginRight: "5%" }}
                  ></Avatar>
                  <Typography variant="b">
                    Cindy Baker <br />{" "}
                    <b style={{ fontWeight: "normal" }}>
                      CTO
                    </b>
                  </Typography>
                </Box>
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
                  height: "200px",
                }}
              >
                <Typography variant="b" style={{ height: "80%" }}>
                  I appreciate the attention to detail in the design of this
                  product. The small touches make a big difference, and it's
                  evident that the creators focused on delivering a premium
                  experience. The level of simplicity and user-friendliness in this product
                  has significantly simplified my life.
                </Typography>
                <Box
                  style={{ display: "flex", marginTop: "5%", height: "15%" }}
                >
                  <Avatar
                    src="Images/4.jpg"
                    style={{ marginRight: "5%" }}
                  ></Avatar>
                  <Typography variant="b">
                    Julia Stewart <br />{" "}
                    <b style={{ fontWeight: "normal" }}>
                      Senior Engineer
                    </b>
                  </Typography>
                </Box>
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
                  height: "200px",
                }}
              >
                <Typography variant="b" style={{ height: "80%" }}>
                  I've tried other similar products, but this one stands out for
                  its innovative features. It's clear that the makers put a lot
                  of thought into creating a solution that truly addresses user
                  needs. The level of simplicity and user-friendliness in this product
                  has significantly simplified my life.
                </Typography>
                <Box
                  style={{ display: "flex", marginTop: "5%", height: "15%" }}
                >
                  <Avatar
                    src="Images/5.jpg"
                    style={{ marginRight: "5%" }}
                  ></Avatar>
                  <Typography variant="b">
                    John Smith
                    <br />{" "}
                    <b style={{fontWeight: "normal" }}>
                      Product Engineer
                    </b>
                  </Typography>
                </Box>
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
                  height: "200px",
                }}
              >
                <Typography variant="b" style={{ height: "80%" }}>
                  The quality of this product exceeded my expectations. It's
                  durable, well-designed, and built to last. Definitely worth
                  the investment! The level of simplicity and user-friendliness in this product
                  has significantly simplified my life and built to last. Definitely worth its intuitive design
                  has truly enhanced my daily routine
                </Typography>
                <Box
                  style={{ display: "flex", marginTop: "5%", height: "15%" }}
                >
                  <Avatar
                    src="Images/6.jpg"
                    style={{ marginRight: "5%" }}
                  ></Avatar>
                  <Typography variant="b">
                    Daniel Wolf <br />{" "}
                    <b style={{ fontWeight: "normal" }}>
                      CDO
                    </b>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Testinomial;
