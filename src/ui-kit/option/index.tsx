import { MenuItem, MenuItemProps } from '@mui/material'

const Option = (props: MenuItemProps) => {
  return (
    <MenuItem
      { ...props }
    >
      { props.children }
    </MenuItem>
  )
}

export default Option
