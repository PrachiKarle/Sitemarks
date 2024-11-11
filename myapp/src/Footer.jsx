import { List, ListItem, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const Footer = () => {
  return (
    <>
      <Grid
        container
        style={{
          padding: "3%",
          borderBottom: "1px solid #EBEEF4",
          borderTop: "1px solid #EBEEF4",
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
                  // fontFamily: 'monospace',
                  fontWeight: 700,
                  // letterSpacing: '.3rem',
                  color: "#4876EE",
                  textDecoration: "none",
                  marginBottom: "2%",
                }}
              >
                <img src="Images/logo.jpg" height="30px" width="30px" alt="" />
                Sitemarks
              </Typography>
              <Typography variant="b">
                <b style={{ fontWeight: "bold" }}>Join the newsletter</b>
                <br />
                Subscribe for weekly updates. No spams ever!
              </Typography>

              <List
                style={{
                  color: "#48546C",
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
                  color: "#48546C",
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
                  color: "#48546C",
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
                  color: "#48546C",
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

      <Grid size={12} style={{ textAlign: "center", padding: "2%" }}>
        <Typography variant="b" fontWeight="bold" color="#525D74">
          Copyright © Sitemark 2024
        </Typography>
      </Grid>
    </>
  );
};

export default Footer;
