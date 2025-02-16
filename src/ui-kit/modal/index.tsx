import { Modal as MuiModal, ModalProps } from '@mui/material'
import Box from '../box'
import Typography from '../typography'
import Button from '../button'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 640,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
}

const Modal = (props: ModalProps) => {
  const { children, ...rest } = props
  console.log('Children', children)

  return (
    <MuiModal {...rest}>
      <Box sx={style}>
        <Box
          sx={{
            padding: '1rem',
            borderBottom: '1px solid #919EAB',
          }}>
          <Typography variant="h4">header</Typography>
        </Box>
        <Box
          component='section'
          sx={{
            padding: '1.5rem'
          }}
        >
          {children}
        </Box>
        <Box
          sx={{
            justifyContent: 'flex-end',
            borderTop: '1px solid #919EAB',
            padding: '1.5rem',
            gap: '0.5rem',
            display: 'flex',
          }}>
          <Button variant="outlined">Отмена</Button>
          <Button>Сохранить</Button>
        </Box>
      </Box>
    </MuiModal>
  )
}

export default Modal
