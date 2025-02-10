import React from 'react'
import { Button as MuiButton, ButtonProps } from '@mui/material'

interface DfButtonProps extends ButtonProps {
  to?: string
}

const Button = React.forwardRef((props: DfButtonProps, ref: any) => {
  // const Tag = props.component

  return (
    <MuiButton
      to={props.to}
      variant={props.variant}
      ref={ref}
      { ...props }
    >
      { props.children }
    </MuiButton>
  )
})

export default Button
