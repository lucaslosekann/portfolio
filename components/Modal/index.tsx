import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from '../Backdrop'

type Props = {
  handleClose: () => void,
  children: React.ReactNode
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: { 
    y: "100vh",
    opacity: 0
  }
}
export default function Modal({ handleClose, children }: Props) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
      onClick={ (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      className="modal relative z-50"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit">
        {children}
      </motion.div>
    </Backdrop>
  )
}