import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Button from './Button'

const InputName = ({name, setOneName, setTwoName, setName}) => {
    const closeName = (e) => {
        e.preventDefault();
        setName(false)
    }
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
            y: '-200%'
        },
        animate: {
            y: 0,
        },
        exit: {
            y: '200%'
        }
    }
  return (
    <motion.div className='top-0 right-0 fixed h-screen w-full bg-gray-800/50' variants={variants} initial="initial" animate="animate" exit="exit">
        <AnimatePresence>{name && <motion.div className=" m-auto mt-24 bg-slate-900 rounded-xl p-5 w-fit" variants={open}>
            <h4 className='text-center text-md text-amber-500 mb-4 font-medium'>Please enter your names</h4>
            <form className='flex flex-col gap-3' onSubmit={(e) => closeName(e)}>
                <input onChange={(e) => setOneName(e.target.value)} className="text-amber-500 focus:outline-none focus:outline-amber-500 p-2 rounded-lg w-56 bg-gray-700 " type="text" placeholder='Player 1' />
                <input onChange={(e) => setTwoName(e.target.value)} className="text-amber-500 focus:outline-none focus:outline-amber-500 p-2 rounded-lg w-56 bg-gray-700 " type="text" placeholder='Player 2' />
                <Button text="Let's Play" type="submit"/>
            </form>
        </motion.div>}</AnimatePresence>
    </motion.div>
  )
}

export default InputName