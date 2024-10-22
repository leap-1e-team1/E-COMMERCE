import React from "react";
import PropTypes from "prop-types";
import { Stack, Box, Typography, ImageList, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Savebox from "./Savebox";

const Savecomp = () => {
  return (
    <Box
      sx={{
        width: "672px",
        height: "472px",
        marginTop: "120px",
        marginLeft: "409px",
        marginBottom: "209px",
        gap: "16px",
      }}
    >
      <Typography>Хадгалсан бараа()</Typography>
      <Savebox />
    </Box>
  );
};

export default Savecomp;
