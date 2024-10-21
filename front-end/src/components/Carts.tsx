import * as React from "react";
import Box from "@mui/material/Box";
import { Stack, Typography, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const commonStyles = {
  bgcolor: "primary.contrastText",
  m: 1,
  border: 1,
  width: 638,
  height: 664,
};

export default function Carts() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", bgcolor: "white" }}>
      <Box
        sx={{
          ...commonStyles,
          borderRadius: "16px",
          padding: "20px",
          borderColor: "white",
          gap: "24px",
        }}
      >
        <Typography color="primary.main" sx={{ fontSize: 24, mb: 2 }}>
          1. Сагс (4)
        </Typography>

        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              height: 132,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px",
              border: "1px solid #E0E0E0",
              borderRadius: "16px",
              marginBottom: "16px",
            }}
          >
            <div style={{ display: "flex", gap: 20 }}>
              <img
                style={{ borderRadius: "16px" }}
                src="image.png"
                alt="product"
                width={100}
                height={100}
              />

              <Stack>
                <Typography>Chunky Glyph Tee</Typography>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <IconButton size="small" color="primary">
                    <RemoveIcon />
                  </IconButton>
                  <Typography>1</Typography>
                  <IconButton size="small" color="primary">
                    <AddIcon />
                  </IconButton>
                </div>
                <Typography variant="body2">120,000₮</Typography>
              </Stack>
            </div>

            <IconButton size="large" color="secondary">
              <DeleteIcon />
            </IconButton>
          </div>
        ))}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 4,
            alignItems: "center",
          }}
        >
          <Typography variant="body1">Нийт төлөх дүн:</Typography>
          <Typography variant="h6">360'000₮</Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, width: "100%" }}
        >
          Худалдан авах
        </Button>
      </Box>
    </Box>
  );
}
