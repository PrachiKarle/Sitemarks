import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = (props) => {
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
          padding: "4%",
          paddingTop: "10%",
          backgroundColor: col1,
          color: col2,
        }}
      >
        <Grid size={12}>
          <Typography variant="h6" fontWeight="bold" textAlign="center">
            Frequently asked questions
          </Typography>
        </Grid>

        <Grid size={12} style={{ padding: "3%" }}>
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:col2}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                style={{ fontWeight: "bold",backgroundColor:col1,color:col2 }}
              >
                How do I contact customer support if I have a question or issue?
              </AccordionSummary>
              <AccordionDetails style={{ fontWeight: "bold",backgroundColor:col1,color:col2 }}>
                You can reach our customer support team by emailing
                support@email.com or calling our toll-free number. We're here to
                assist you promptly.
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:col2}} />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={{ fontWeight: "bold",backgroundColor:col1,color:col2 }}
              >
                Can I return the product if it doesn't meet my expectations?
              </AccordionSummary>
              <AccordionDetails style={{ fontWeight: "bold",backgroundColor:col1,color:col2 }}>
                Absolutely! We offer a hassle-free return policy. If you're not
                completely satisfied, you can return the product within [number
                of days] days for a full refund or exchange.
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:col2}} />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={{ fontWeight: "bold",backgroundColor:col1,color:col2 }}
              >
                How do I contact customer support if I have a question or issue?
              </AccordionSummary>
              <AccordionDetails style={{ fontWeight: "bold",backgroundColor:col1,color:col2 }}>
                You can reach our customer support team by emailing
                support@email.com or calling our toll-free number. We're here to
                assist you promptly.
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:col2}} />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={{ fontWeight: "bold",backgroundColor:col1,color:col2 }}
              >
                What makes your product stand out from others in the market?
              </AccordionSummary>
              <AccordionDetails style={{ fontWeight: "bold",backgroundColor:col1,color:col2 }}>
                Our product distinguishes itself through its adaptability,
                durability, and innovative features. We prioritize user
                satisfaction and continually strive to exceed expectations in
                every aspect.
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{color:col2}} />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={{ fontWeight: "bold",backgroundColor:col1,color:col2 }}
              >
                Is there a warranty on the product, and what does it cover?
              </AccordionSummary>
              <AccordionDetails style={{ fontWeight: "bold",backgroundColor:col1,color:col2 }}>
                Yes, our product comes with a [length of warranty] warranty. It
                covers defects in materials and workmanship. If you encounter
                any issues covered by the warranty, please contact our customer
                support for assistance.
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default FAQ;
