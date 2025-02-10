import { Typography as MuiTypography, TypographyProps } from '@mui/material'

const Typography = (props: TypographyProps) => {
  const { children, ...rest } = props
  const Component = 'p'

  return (
    <MuiTypography
      { ...rest }
    >
      { children }
    </MuiTypography>
  )
}

export default Typography
