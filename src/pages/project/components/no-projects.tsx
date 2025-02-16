import React from 'react'
import Box from '../../../ui-kit/box'
import Button from '../../../ui-kit/button'
import Modal from '../../../ui-kit/modal'

const NoProjects = () => {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  return (
    <React.Suspense>
      <Box
        component="section"
        sx={{
          gridTemplateRows: '1fr',
          placeSelf: 'center',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.625rem',
          }}>
          Не создан ни один проект
          <Button onClick={handleOpen}>Добавить</Button>
        </Box>

        <Modal open={open} onClose={handleClose}>
          <React.Fragment>
            <Box>Hello Mui...</Box>
            <Slot />
          </React.Fragment>
        </Modal>
      </Box>
    </React.Suspense>
  )
}

export default NoProjects

const Slot = () => {
  return <div>Slot</div>
}
