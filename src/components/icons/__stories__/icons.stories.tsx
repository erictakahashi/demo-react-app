import type { Meta, StoryObj } from '@storybook/react'
import * as icons from '../'
import type { ElementType } from 'react'
import { Grid2, Paper, styled, Typography } from '@mui/material'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Disclaimer = styled(Paper)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(1, 2)};
`

const Grid = styled(Grid2)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const IconComponent = (props: { icon: string }) => {
  const { icon } = props

  const iconKey = icon
  const Icon = (icons as Record<string, ElementType>)[iconKey] as ElementType

  return (
    <Wrapper>
      <Icon />

      <Disclaimer elevation={4}>
        <p>
          <code>{`import { ${icon} } from 'components/icons'`}</code>
        </p>
        <p>
          <code>{`import ${icon} from 'components/icons/${icon}'`}</code>
        </p>
      </Disclaimer>
    </Wrapper>
  )
}

const meta = {
  title: 'Components/Icons',
  component: IconComponent,
  argTypes: {
    icon: {
      options: Object.keys(icons),
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof IconComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Icon: Story = {
  args: {
    icon: Object.keys(icons)[0],
  },
}

export const Icons = {
  render: () => (
    <Grid2 container spacing={2}>
      {Object.keys(icons).map((iconName) => {
        const Icon = (icons as Record<string, ElementType>)[
          iconName
        ] as ElementType

        return (
          <Grid key={iconName} size={2}>
            <Icon />
            <Typography component="span" variant="caption">
              {iconName}
            </Typography>
          </Grid>
        )
      })}
    </Grid2>
  ),
}
