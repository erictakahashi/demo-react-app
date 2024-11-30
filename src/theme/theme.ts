import { createTheme, type ThemeOptions } from "@mui/material";
import { palette } from "./palette";
import { typography } from "./typography";

const themeOptions: ThemeOptions = {
  palette,
  typography,
};

const theme = createTheme(themeOptions);

export default theme;

declare module "@mui/material/styles" {
  interface Palette {
    newInquire: Palette["primary"];
    contracted: Palette["primary"];
    booked: Palette["primary"];
    completed: Palette["primary"];
  }
  interface PaletteOptions {
    newInquire?: PaletteOptions["primary"];
    contracted?: PaletteOptions["primary"];
    booked?: PaletteOptions["primary"];
    completed?: PaletteOptions["primary"];
  }
}
