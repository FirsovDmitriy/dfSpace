import { Modal as MuiModal, ModalProps } from '@mui/material'
import Box from '../box'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Modal = (props: ModalProps) => {
  const { children, ...rest } = props
  console.log('Children', children)

  return (
    <MuiModal
      { ...rest }
    >
      <Box
        sx={style}
      >
        { children }
      </Box>
    </MuiModal>
  )
}

export default Modal
