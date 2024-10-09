"use client";

import { theme } from "@/theme";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";

export const MuiProvider = ({ children }: PropsWithChildren) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div>{children}</div>
    </MuiThemeProvider>
  );
};
