import type { PaletteOptions } from "@mui/material";

export type PaletteColors = {
  /** The main color. */
  main: string;
  /** The color dark variant. */
  dark: string;
  /** The color light variant. */
  light: string;
};

export type DemoPaletteOptions = PaletteOptions & {
  /** Colors for `new inquire` status. */
  newInquire: PaletteColors;
  /** Colors for `contracted` status. */
  contracted: PaletteColors;
  /** Colors for `booked` status. */
  booked: PaletteColors;
  /** Colors for `completed` status. */
  completed: PaletteColors;
};
