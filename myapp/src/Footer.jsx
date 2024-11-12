import { List, ListItem, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const Footer = (props) => {
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
          padding: "3%",
          borderBottom: "1px solid #EBEEF4",
          borderTop: "1px solid #EBEEF4",
          backgroundColor:col1,color:col2
        }}
      >
        <Grid size={12}>
          <Grid container>
            <Grid size={{ md: 6, sm: 6, xs: 12 }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  textDecoration: "none",
                  marginBottom: "2%",
                  color:col2
                }}
              >
                <img src="Images/logo.png" height="30px" width="30px" style={{marginRight:"2%"}} alt="" />
                Sitemarks
              </Typography>
              <Typography variant="b">
                <b style={{ fontWeight: "bold" }}>Join the newsletter</b>
                <br />
                Subscribe for weekly updates. No spams ever!
              </Typography>

              <List
                style={{
                  textDecoration: "underline",
                  textAlign: "center",
                }}
              >
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Terms of Service</ListItem>
              </List>
            </Grid>
            <Grid size={{ md: 2, sm: 6, xs: 12 }}>
              <Typography variant="h6" fontWeight="bold" marginLeft="5%">
                Product
              </Typography>
              <List
                style={{
                  
                  textDecoration: "underline",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                <ListItem>Features </ListItem>
                <ListItem>Testimonials </ListItem>
                <ListItem>Highlights </ListItem>
                <ListItem>Pricing </ListItem>
                <ListItem>FAQs </ListItem>
              </List>
            </Grid>
            <Grid size={{ md: 2, sm: 6, xs: 12 }}>
              <Typography variant="h6" fontWeight="bold" marginLeft="5%">
                Company
              </Typography>
              <List
                style={{
                  
                  textDecoration: "underline",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                <ListItem>About us </ListItem>
                <ListItem>Careers </ListItem>
                <ListItem>Press </ListItem>
              </List>
            </Grid>
            <Grid size={{ md: 2, sm: 6, xs: 12 }}>
              <Typography variant="h6" fontWeight="bold" marginLeft="5%">
                Legal
              </Typography>
              <List
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                <ListItem>Terms </ListItem>
                <ListItem>Privacy </ListItem>
                <ListItem>Contact </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12} style={{ textAlign: "center", padding: "2%",backgroundColor:col1,color:col2 }}>
        <Typography variant="b" fontWeight="bold" >
          Copyright © Sitemark 2024
        </Typography>
      </Grid>
    </>
  );
};

export default Footer;
