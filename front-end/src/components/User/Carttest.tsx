"use client";

import { Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export const Cart = () => {
  return (
    <Accordion
      sx={{
        width: "620px",
        gap: "16px",
        paddingX: "24px",
        paddingY: "32px",
        borderRadius: "16px",
        bgcolor: "#FFFFFF",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Stack
          direction="row"
          justifyContent={"space-between"}
          sx={{ width: "572px" }}
        >
          <Stack direction={"row"} sx={{ gap: "8px" }}>
            <Typography>2024-09-03 15:34</Typography>
            <Typography
              sx={{
                paddingY: "2px",
                paddingX: "10px",
                gap: "10px",
                borderRadius: "18px",
                color: "white",
                bgcolor: "secondary.main",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              хүргэлтэнд гарсан
            </Typography>
          </Stack>
          <KeyboardArrowDownIcon />
        </Stack>
        <Stack
          direction="row"
          sx={{ width: "572px" }}
          justifyContent={"space-between"}
        >
          <Typography>Үнийн дүн:</Typography>
          <Typography>120’000₮</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>
  );
};
