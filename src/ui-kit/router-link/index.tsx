import { NavLink, NavLinkProps } from 'react-router-dom'
import clsx from 'clsx'
import styled from './styled.module.css'

const RouterLink = (props: NavLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(styled.Link, { [styled.Link_Active]: isActive }, props.className)
      }
      {...props}>
      {props.children}
    </NavLink>
  )
}

export default RouterLink
