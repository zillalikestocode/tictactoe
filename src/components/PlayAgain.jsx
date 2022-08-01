import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Button from './Button'

const PlayAgain = ({setAgain, oneName, twoName, winOne, winTwo}) => {
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
    const one = oneName === "" ? 'Player One' : oneName;
  const two = twoName === "" ? 'Player Two' : twoName;
  return (
    <motion.div className='top-0 right-0 fixed h-screen w-full bg-gray-800/50' variants={variants} initial="initial" animate="animate" exit="exit">
        <AnimatePresence>{(winOne || winTwo) && <motion.div className=" m-auto mt-24 bg-slate-900 rounded-xl p-5 w-fit flex flex-col gap-3" variants={open}>
            <div className="text-center text-md font-medium"><h4 className='text-amber-500'>{winOne ? one : two} Wins!!!</h4></div>
            <Button text="Play again" onClick={() => setAgain(true)} />
        </motion.div>}</AnimatePresence>
    </motion.div>
  )
}

export default PlayAgain