import { Button as MuiButton, ButtonProps } from '@mui/material'

interface DfButtonProps extends ButtonProps {
  to?: string
}

const Button = (props: DfButtonProps) => {
  // const Tag = props.component
  const { children, variant = 'contained', to, ...rest } = props

  return (
    <MuiButton href={to} variant={variant} {...rest}>
      {children}
    </MuiButton>
  )
}

export default Button
