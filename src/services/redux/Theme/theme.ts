"use client";
import type { Theme } from "@mui/material";
import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    typography: {
        fontFamily: `"Roboto", sans-serif`,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
      },
      palette: {
        mode: "light",
        divider: "rgba(0, 0, 0, 0.08)", // Adjust contrast for light background
        primary: {
          main: "#4071f4",  // dark black for primary
        },
        secondary: {
          main: '#ccd9e5', // Lighter version of secondary
          light:"#dde6ee",  // data table header
        },
        error: {
          main: "#ff7782", // Adjust for better contrast on light background
        },
        success: {
          main:"#41f1b6", // Use Material Design's green
          light:"#BEE2C4", // workorder wiget header
          dark:"#009999",
        },
        warning: {
          main: "#ffbb55", // Use Material Design's yellow
        },
        info: {
          main: "#3973ac",// Use Material Design's blue
          light:"#0e7cf4"  // use in link color
        },
        background: {
          default: "#f6f6f9",
          paper: "#ffffff",
        },
        grey:{
          100: "#e2e6e9",// using this color to give border of dataTable and other places.
          400: "rgba(132, 139, 2000, 0.18)", 
          600:"#000",  //tiles usage color  
        },
        common: {
          black: "#000", // Black for text in light theme
          white: "#fff",
        },
        text: {
          primary: "#000", // Dark text for better contrast
          secondary: "#7d8da1", // Less dark text for secondary    // :-using it on overview titles wiget label
          disabled: "rgba(0, 0, 0, 0.5)",
        },
        action: {
          hover: "#f5f5f5",
          selected: "#e0e8ef",
          active:"#74b9ff",
          focus:"#4071f4"
        },
      },
  });

export const darkTheme: Theme = createTheme({
  typography: {
    fontFamily: `"Roboto",sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    mode: "dark",
    divider: "rgba(218, 224, 231, 0.08)",
    primary: {
      main: "#4071f4",
    },
    secondary: {
      main: "#3b4d5e",
      light: "#1d2832",  // header of the datatable
    },
    error: {
      main: "#dc3545", // Adjust for better contrast on light background
      light: "#ee6666",
    },
    success: {
      main: "#39ac73", // Use Material Design's green
      light: "#05817e",
      dark: "#009999",
    },
    warning: {
      main: "#ffc61a", // Use Material Design's yellow
    },
    info: {
      main: "#3973ac", // Use Material Design's blue
      light: "#0e7cf4",
      dark: "#230cf0",
    },
    background: {
      default: "#1d2832",
      paper: "#24323e",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    grey: {
      100: "#2f4150",
      400: "rgba(13, 18, 32, 0.8)",
      600: "#9E9FA5",
    },
    text: {
      primary: "#ced9e2",
      secondary: "#9e9fa5",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    action: {
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "#24323e",
      active:"#74b9ff",
      focus: "#74b9ff",
    },
  },
});
