import { useState } from 'react'
import {AnimatePresence} from 'framer-motion'
import Game from './components/Game'
import InputName from './components/InputName'

function App() {
  const cells = [{i: 0, x: true}, {i: 1, x: true}, {i: 2, x: true}, {i: 3, x: true} , {i: 4, x: true}, {i: 5, x: true}, {i: 6, x: true}, {i: 7, x: true}, {i: 8, x: true}];
  const winMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ]
  const [one, setOne] = useState([])
  const [two, setTwo] = useState([])
  const plOne = ( item) => {
    setOne([...one, item.i]);
    item.x = true
    console.log(one)
  }
  const plTwo = ( item) => {
    setTwo([...two, item.i])
    item.x = false
    console.log(two)
  }
  const oneTurn = one.length > two.length ? false : true;
  const [oneName, setOneName] = useState('');
  const [twoName, setTwoName] = useState('');
  const [name, setName] = useState(true)

  return (
    <>
    <AnimatePresence>{name && <InputName name={name} setName={setName} setOneName={setOneName} setTwoName={setTwoName} />}</AnimatePresence>
    <Game oneName={oneName} twoName={twoName} plTwo={plTwo} oneTurn={oneTurn} plOne={plOne} cells={cells} winMoves={winMoves} setOne={setOne} setTwo={setTwo} one={one} two={two}/>
    </>
  )
}

export default App
