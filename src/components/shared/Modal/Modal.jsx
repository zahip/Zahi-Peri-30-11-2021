import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MuiModal from '@mui/material/Modal'
import Box from '@mui/material/Box'

import { setIsModalOpen } from 'features/modal/modalSlice'

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
}

const Modal = () => {
  const dispatch = useDispatch()
  const { isOpen, text } = useSelector((state) => state?.modal)
  const handleClose = () => {
    dispatch(setIsModalOpen({ isOpen: false }))
  }
  return (
    <MuiModal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <div>{text}</div>
      </Box>
    </MuiModal>
  )
}

export default Modal
