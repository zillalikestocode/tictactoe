import {useState} from 'react'
import XO from './XO'

const GameArea = ({ cells, plOne, plTwo, oneTurn}) => {
  return (
    <div className="grid grid-cols-3 gap-3 mx-3 my-3">
      {cells.map((item)=> {
        return (
         <Box item={item} oneTurn={oneTurn} plOne={plOne} plTwo={plTwo} />
        )
      })}
    </div>
  )
}
const Box = ({item, oneTurn, plOne, plTwo}) => 
 {
   const [x, setX] = useState(true);
   const [open, setOpen] = useState(false)
   return (
  <div key={item.i} className='w-full h-full' ><div className='flex items-center m-auto bg-stone-900 w-16 h-16 rounded-lg cursor-pointer' onClick={(e) => {
    setOpen(true)
    if (oneTurn){
      plOne(item)
      setX(true)
    }else {
      plTwo(item)
      setX(false)
    };
    e.currentTarget.className = 'flex items-center m-auto bg-stone-900 w-16 h-16 rounded-lg pointer-events-none'
  }}>{open && <span className="m-auto text-amber-500"><XO x={x} /></span>}</div></div>
)}

export default GameArea