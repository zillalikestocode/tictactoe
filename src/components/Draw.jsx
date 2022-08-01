import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Button from './Button'

const Draw = ({setAgain, setDraw, draw}) => {
    const variants = {
        initial: {
            x: 0
        },
        animate: {
            x: 0,
        },
        exit : {
            opacity: 0,
            transition: {
                delay: 0.5,
            }
        }
    }
    const open = {
        initial: {
            opacity: 0,
            scale: 0.6
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.6
        }
    }
  return (
    <motion.div className='top-0 right-0 fixed h-screen w-full bg-gray-800/50' variants={variants} initial="initial" animate="animate" exit="exit">
        <AnimatePresence>{draw && <motion.div className=" m-auto mt-24 bg-slate-900 rounded-xl p-5 w-fit flex flex-col gap-3" variants={open}>
            <div className="text-center text-md font-medium"><h4 className='text-amber-500'>It's a Draw!!!</h4></div>
            <Button text="Play again" onClick={() => {
                setAgain(true)
                setDraw(false)}} />
        </motion.div>}</AnimatePresence>
    </motion.div>
  )
}

export default Draw