"use client";

import { Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CartDetail } from "./CartDetail";

export const Cart = () => {
  return (
    <Stack
      sx={{
        width: "620px",
        gap: "16px",
        paddingX: "24px",
        paddingY: "32px",
        borderRadius: "16px",
        bgcolor: "#FFFFFF",
      }}
    >
      <Accordion sx={{ bgcolor: "#FFFFFF", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ width: "572px", px: "0" }}
        >
          <Stack direction="row" justifyContent={"space-between"}>
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
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <CartDetail />
        </AccordionDetails>
      </Accordion>
      <Stack
        direction="row"
        sx={{ width: "572px" }}
        justifyContent={"space-between"}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
          Үнийн дүн:
        </Typography>
        <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
          120’000₮
        </Typography>
      </Stack>
    </Stack>
  );
};
