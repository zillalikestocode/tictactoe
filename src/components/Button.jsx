import React from 'react'

const Button = ({onClick, text, style, styles, type}) => {
  return (
    <button onClick={onClick} type={type} className={`${styles} p-2 bg-amber-500 text-base font-medium rounded-md text-slate-900` } style={style} >
        {text}  
    </button>
  )
}

export default Button