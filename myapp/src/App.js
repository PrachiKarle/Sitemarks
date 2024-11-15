import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Feature from "./Feature";
import Testinomial from "./Testinomial";
import Highlight from "./Highlight";
import FAQ from "./FAQ";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";
import { Avatar, Checkbox, FormControlLabel } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Footer from "./Footer";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const pages = ["/Features", "/Testinomial", "/Highlight", "/FAQ"];

const App = () => {
  const [mode, setMode] = useState(true);
  let col1 = "black",
    col2 = "white";
  if (mode) {
    col1 = "black";
    col2 = "white";
  } else {
    col1 = "white";
    col2 = "black";
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = () => {
    mode ? setMode(false) : setMode(true);
    console.log(mode);
  };
  return (
    <>
      <Router>
        {/*Navbar */}
        <AppBar
          style={{
            padding: "2%",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar
              style={{
                height: "20px",
                backgroundColor: "white",
                borderRadius: "25px",
                boxShadow: "0px 0px 10px gray",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  color: "#4876EE",
                  textDecoration: "none",
                }}
              >
                <img
                  src="Images/logo.png"
                  height="30px"
                  width="30px"
                  style={{ marginRight: "2%" }}
                  alt=""
                />
                Sitemarks
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page}>
                      <NavLink to={page} sx={{ textAlign: "center" }}>
                        {page.substring(1)}
                      </NavLink>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontWeight: 700,
                  color: "#4876EE",
                  textDecoration: "none",
                }}
              >
                <img
                  src="Images/logo.png"
                  height="30px"
                  width="30px"
                  style={{ marginRight: "2%" }}
                  alt=""
                />
                Sitmarks
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <NavLink
                  to="/"
                  style={{
                    color: "black",
                    textDecoration: "none",
                    marginRight: "3%",
                  }}
                >
                  Home
                </NavLink>
                {pages.map((page) => (
                  <NavLink
                    to={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "black",
                      display: "block",
                      textTransform: "capitalize",
                    }}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      marginRight: "3%",
                    }}
                  >
                    {page.substring(1)}
                  </NavLink>
                ))}
              </Box>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<LightModeIcon />}
                    checkedIcon={<DarkModeIcon style={{ color: "black" }} />}
                    onChange={() => handleChange()}
                  />
                }
              ></FormControlLabel>
              <Box sx={{ flexGrow: 0 }}>
                <Button variant="contained" backgroundColor="primary.main">
                  Sign in
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home mode={mode} />} />
          <Route path="/Features" element={<Feature mode={mode} />} />
          <Route path="/Testinomial" element={<Testinomial mode={mode} />} />
          <Route path="/Highlight" element={<Highlight mode={mode} />} />
          <Route path="/FAQ" element={<FAQ mode={mode} />} />
        </Routes>

        <Footer mode={mode} />
        <Avatar
          component="a"
          href="#"
          style={{
            textDecoration: "none",
            backgroundColor: col1,
            color: col2,
            position: "fixed",
            bottom: "2%",
            right: "2%",
          }}
        >
          <ArrowCircleUpIcon />
        </Avatar>
      </Router>
    </>
  );
};
export default App;


