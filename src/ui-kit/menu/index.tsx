import React from 'react'
import { Menu as MuiMenu, MenuProps } from '@mui/material'
import Option from '../option'

const Menu = React.forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  return (
    <MuiMenu
      ref={ref}
      { ...props }
    >
      { props.children }
    </MuiMenu>
  )
}) as ReturnType<typeof React.forwardRef<HTMLDivElement, MenuProps>> & {
  Item: typeof Option
}

Menu.Item = Option

export default Menu
