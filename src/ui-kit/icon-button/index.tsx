import { IconButton as MuiIconButton, IconButtonProps } from "@mui/material"

const IconButton = (props: IconButtonProps) => {
  const { children, ...rest } = props
  return (
    <MuiIconButton
      { ...rest }
    >
      { children }
    </MuiIconButton>
  )
}

export default IconButton
