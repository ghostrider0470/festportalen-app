// src/theme/light.ts
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { PALETTE_COLORS } from "./colors";

// Extending the Theme interface
declare module "@mui/material/styles" {
  interface Palette {
    footer: {
      main: string;
      contrastText: string;
    };
  }
  interface PaletteOptions {
    footer: {
      main: string;
      contrastText: string;
    };
  }
}

// Create a theme instance.
const LIGHT_THEME = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          // color: 'rgba(0, 0, 0, 0.9)',
        },
      },
    },
  },
  palette: {
    mode: "light",
    background: {
      default: "#4e4635",
      paper: "#f5f5f5",
    },
    primary: {
      main: "#e0ae55",
      contrastText: "white",
    },
    footer: {
      main: "#151515",
      contrastText: "#FFFFFF",
    },
  },
  ...PALETTE_COLORS, // spread your custom colors here
});

export default responsiveFontSizes(LIGHT_THEME);
