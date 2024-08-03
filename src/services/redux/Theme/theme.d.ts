import {PaletteColor,PaletteColorOptions,ThemeOptions,PaletteOptions} from "@mui/material/styles";
import React from 'react';

declare module '@mui/material/styles' {
  interface Palette {
    border:{
      main:string;
      light:string;
    }
  }

  interface PaletteOptions {
    border:{
      main:string;
      light:string;
    }
  }
}

