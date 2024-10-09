import { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    helper: string;
  }
}

export const palette: PaletteOptions = {
  primary: {
    main: "#111111",
    contrastText: "#fff",
  },
  secondary: {
    main: "#2563EB",
    light: "#2563EB",
  },
  text: {
    helper: "#71717A",
    primary: "#161616",
    secondary: "#525252",
  },
  background: {
    paper: "#f4f4f4",
  },
  divider: "#E0E0E0",
  success: {
    light: "#CBFCDB",
    dark: "#107E37",
    main: "#18BA51",
  },
  warning: {
    light: "#FCF4D6",
    dark: "#684E00",
    main: "#FFC107",
  },
  error: {
    main: "#E11D48",
  },
};
