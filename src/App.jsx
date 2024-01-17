import { motion } from 'framer-motion'
import React from 'react'
const App = () => {
  const parent = {
    initial:{opacity:0},
    animate:{opacity:1},
    exit:{opacity:0},
  }

  const circle ={
    initial :{opacity:0,scale:0},
    animate:{opacity:1,scale:1, transition:{ease:[0.76, 0, 0.24, 1],duration:1,staggerChildren:.2}},
    exit:{opacity:0,scale:0}
  };
  return (
    <div className='w-full h-screen bg-zinc-900 p-10'>
      <motion.div variants={parent} transition={{staggerChildren:.2}} initial="initial" animate="animate" exit="exit"  className='w-32 h-32 bg-white/50 rounded-3xl flex flex-wrap p-5 gap-2'>
        <motion.div variants={circle} className='w-10 h-10 bg-white rounded-full'></motion.div>
        <motion.div variants={circle} className='w-10 h-10 bg-white rounded-full'></motion.div>
        <motion.div variants={circle} className='w-10 h-10 bg-white rounded-full'></motion.div>
        <motion.div variants={circle} className='w-10 h-10 bg-white rounded-full'></motion.div>
      </motion.div>
    </div>
  )
}

export default App