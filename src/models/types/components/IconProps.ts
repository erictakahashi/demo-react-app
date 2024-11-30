import type { SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement> & {
  /** The icon dimensions. */
  size?: number
  /** The icon color. */
  color?: string
}
