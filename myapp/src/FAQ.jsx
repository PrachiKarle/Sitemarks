import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <>
      <Grid container style={{ padding: "4%",paddingTop:"0%", marginTop:"10%" }}>
        <Grid size={12}>
          <Typography variant="h6" fontWeight="bold" textAlign="center">
            Frequently asked questions
          </Typography>
        </Grid>

        <Grid size={12} style={{ padding: "3%" }}>
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={{ fontWeight: "bold" }}
              >
                How do I contact customer support if I have a question or issue?
              </AccordionSummary>
              <AccordionDetails>
                You can reach our customer support team by emailing
                support@email.com or calling our toll-free number. We're here to
                assist you promptly.
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={{ fontWeight: "bold" }}
              >
                Can I return the product if it doesn't meet my expectations?
              </AccordionSummary>
              <AccordionDetails>
                Absolutely! We offer a hassle-free return policy. If you're not
                completely satisfied, you can return the product within [number
                of days] days for a full refund or exchange.
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={{ fontWeight: "bold" }}
              >
                How do I contact customer support if I have a question or issue?
              </AccordionSummary>
              <AccordionDetails>
                You can reach our customer support team by emailing
                support@email.com or calling our toll-free number. We're here to
                assist you promptly.
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={{ fontWeight: "bold" }}
              >
                What makes your product stand out from others in the market?
              </AccordionSummary>
              <AccordionDetails>
                Our product distinguishes itself through its adaptability,
                durability, and innovative features. We prioritize user
                satisfaction and continually strive to exceed expectations in
                every aspect.
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                style={{ fontWeight: "bold" }}
              >
                Is there a warranty on the product, and what does it cover?
              </AccordionSummary>
              <AccordionDetails>
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
