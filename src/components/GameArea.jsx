import {useState, useEffect} from 'react'
import XO from './XO'

const GameArea = ({again, cells, plOne, plTwo, oneTurn}) => {
  return (
    <div className="grid grid-cols-3 gap-3 mx-3 my-3">
      {cells.map((item)=> {
        return (
         <Box again={again} item={item} oneTurn={oneTurn} plOne={plOne} plTwo={plTwo} />
        )
      })}
    </div>
  )
}
const Box = ({again, item, oneTurn, plOne, plTwo, }) => 
 {
   const [x, setX] = useState(true);
   const [open, setOpen] = useState(false);
   const [disable, setDisable] = useState(false)
   useEffect(() => {
     if(again){
       setDisable(true)
     }
   }, [again])

   return (
  <div key={item.i} className='w-full h-full' ><div className={`flex items-center m-auto bg-stone-900 w-16 h-16 rounded-lg cursor-pointer ${again && 'pointer-events-auto'}`} onClick={(e) => {
    setOpen(true)
    if (oneTurn){
      plOne(item)
      setX(true)

    }else {
      plTwo(item)
      setX(false)
    };
    setDisable(false)
    e.currentTarget.className = 'flex items-center m-auto bg-stone-900 w-16 h-16 rounded-lg pointer-events-none'
  }}>{(open && !disable) && <span className="m-auto text-amber-500"><XO x={x} /></span>}</div></div>
)}

export default GameArea