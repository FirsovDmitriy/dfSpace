import { Box as MuiBox, BoxProps } from '@mui/material'
import React from 'react'

export interface OverrideBoxProps extends BoxProps {
  component?: React.ElementType
}

const Box = (props: OverrideBoxProps) => {
  const { children, component = 'div', sx, ...rest } = props

  return (
    <MuiBox component={component} sx={sx} {...rest}>
      {children}
    </MuiBox>
  )
}

export default Box
