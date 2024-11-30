import type { Preview } from "@storybook/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../src/theme/theme";
import React from "react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
