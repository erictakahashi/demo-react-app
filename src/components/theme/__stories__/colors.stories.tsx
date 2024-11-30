import { type Palette, styled, Theme } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import theme from '../../../theme/theme'

// Helper type to get the value type of a specific palette key
type PaletteValue<K extends keyof Palette> = Palette[K]

// Helper type to exclude function keys and other non-color related properties
type ColorPaletteKeys = {
  [K in keyof Palette]: Palette[K] extends Function | number ? never : K
}[keyof Palette]

// Type to get nested keys of a palette value
type NestedPaletteKeys<T> = T extends object ? keyof T : never

// Combined type for palette paths
type PalettePath = {
  [K in ColorPaletteKeys]: NestedPaletteKeys<PaletteValue<K>> extends never
    ? never
    : `${K}.${NestedPaletteKeys<PaletteValue<K>> & string}`
}[ColorPaletteKeys]

type ColorSquareProps = {
  $color: PalettePath
}

function getPalettePaths(palette: Theme['palette']): string[] {
  const paths: string[] = []

  // Helper function to recursively traverse the palette object
  function traverse(obj: any, path: string[] = []) {
    if (obj === null || typeof obj !== 'object') return

    // Skip functions
    if (typeof obj === 'function') return

    // If we have a leaf node that's not an object (except null), add the path
    if (typeof obj !== 'object' || obj === null) {
      paths.push(path.join('.'))
      return
    }

    // Skip certain keys that we don't want to traverse
    const skipKeys = [
      'mode',
      'tonalOffset',
      'contrastThreshold',
      'augmentColor',
      'getContrastText',
    ]

    Object.entries(obj).forEach(([key, value]) => {
      if (skipKeys.includes(key)) return

      if (typeof value === 'object' && value !== null) {
        traverse(value, [...path, key])
      } else if (typeof value !== 'function') {
        paths.push([...path, key].join('.'))
      }
    })
  }

  // Start traversal from palette root, but skip the first 'palette' prefix
  traverse(palette, [])

  // Filter out any malformed paths (like single segments)
  return paths.filter((path) => path.includes('.'))
}

const allColors = getPalettePaths(theme.palette)

const getThemeColor = (theme: Theme, colorPath: string) => {
  const [palette, shade] = colorPath.split('.')
  if (!shade) return undefined

  return (theme.palette[palette as keyof typeof theme.palette] as any)?.[shade]
}

const ColorSquare = styled('div')<ColorSquareProps>`
  width: 100%;
  min-height: 20px;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme, $color }) => getThemeColor(theme, $color)};
`

const ColorComponent = ({ color }: { color: PalettePath }) => (
  <ColorSquare $color={color}>{color}</ColorSquare>
)

const meta = {
  title: 'Components/Theme/Colors',
  component: ColorComponent,
  argTypes: {
    color: {
      options: allColors,
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof ColorComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Color: Story = {
  args: {
    color: 'newInquire.main',
  },
}

export const AllColors = {
  render: () => (
    <>
      {allColors.map((color) => (
        <ColorComponent color={color as PalettePath} key={color} />
      ))}
    </>
  ),
}
