import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode,
  onClick: () => void
}

export default function Backdrop({ children, onClick }: Props) {
  return (
    <motion.div
      onClick={onClick}
      className="absolute top-0 left-0 h-full w-full bg-[#000000e1] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{margin: 0}}
    >
      {children}
    </motion.div>
  )
}