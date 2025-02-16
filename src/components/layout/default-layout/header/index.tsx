import React from 'react'
import {
  Menu,
  Button,
  Avatar,
  Box,
  Container,
  RouterLink,
} from '../../../../ui-kit'
import SvgMuiX from '../../../../icons/drop-down'
import { routes } from '../../../../routes/route'

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => setAnchorEl(null)

  return (
    <Box
      component="header"
      sx={{
        background: '#1C252E',
        color: 'white',
        mb: '1.5rem',
      }}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '1.5rem',
          gap: '1.5rem',
        }}>
        <Box
          component="nav"
          sx={{
            display: 'flex',
            gap: '0.8rem',
          }}>
          <RouterLink to={routes.PROJECTS}>Проекты</RouterLink>
          <RouterLink to="/tasks">Задачи</RouterLink>
          <RouterLink to="/users">Пользователи</RouterLink>
        </Box>
        <Button
          onClick={handleOpen}
          variant='outlined'
          sx={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            color: 'white',
          }}>
          <Avatar sx={{ width: 24, height: 24 }} />
          <SvgMuiX />
        </Button>
        <Menu anchorEl={anchorEl} onClose={handleClose} open={open}>
          <Menu.Item>Профиль</Menu.Item>
          <Menu.Item>Выход</Menu.Item>
        </Menu>
      </Container>
    </Box>
  )
}

export default Header
