import { CssBaseline, ThemeProvider } from '@mui/material'
import type { Preview } from '@storybook/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import theme from '../src/theme/theme'

const preview: Preview = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      </BrowserRouter>
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
}

export default preview
