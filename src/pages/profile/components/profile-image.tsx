import React from 'react'
import { Box, IconButton, Menu, Typography } from '../../../ui-kit'
import Modal from '../../../ui-kit/modal'

const ProfileImage = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const show = Boolean(anchorEl)
  const handleShow = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget)


  const [showDialog, setShow] = React.useState(false);

  return (
    <React.Fragment>
      <Box
        sx={{
          position: 'absolute',
          right: '0.625rem',
          bottom: '0.625rem',
        }}>
        <IconButton onClick={handleShow}>xx</IconButton>
        <Menu anchorEl={anchorEl} open={show} onClose={() => setAnchorEl(null)}>
          <Menu.Item onClick={() => setShow(true)}>Редактировать</Menu.Item>
          <Menu.Item>Удалить</Menu.Item>
        </Menu>
      </Box>

      <Modal open={showDialog} onClose={() => setShow(false)}>
        <div>
          Edit image
        </div>
      </Modal>

    </React.Fragment>

  )
}

export default ProfileImage
