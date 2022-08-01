import { useState, useEffect } from 'react'
import {AnimatePresence} from 'framer-motion'
import Game from './components/Game'
import InputName from './components/InputName'
import PlayAgain from './components/PlayAgain'
import Draw from './components/Draw'

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
  const [draw, setDraw] = useState(false)
  const [winOne, setWinOne] = useState(false)
  const [winTwo, setWinTwo] = useState(false)
  const [again, setAgain] = useState(false)
  const [one, setOne] = useState([])
  const [two, setTwo] = useState([])
  const plOne = ( item) => {
    setOne([...one, item.i]);
    setAgain(false)
    console.log(one)
  }
  const plTwo = ( item) => {
    setTwo([...two, item.i])
    setAgain(false)
    console.log(two)
  }
  const oneTurn = one.length > two.length ? false : true;
  const [oneName, setOneName] = useState('');
  const [twoName, setTwoName] = useState('');
  const [name, setName] = useState(true)
  const [oneScore, setOneScore] = useState(0)
  const [twoScore, setTwoScore] = useState(0)

  useEffect(() => {
    for (let i = 0; i < winMoves.length; i++){
      if (winMoves[i].every((a)=> one.includes(a))){
        setOneScore(oneScore + 1);
        setWinOne(true)
        break
      }
    }
  }, [one])
  useEffect(() => {
    for (let i = 0; i < winMoves.length; i++){
      if (winMoves[i].every((a)=> two.includes(a))){
        setTwoScore(twoScore + 1);
        setWinTwo(true)
        break
      }
    }
  }, [two])
  useEffect(() => {
    if ((one.length === 5 && two.length === 4)){
      setDraw(true)
    }
  }, [one, two])
  useEffect(() => {
    if (again){
      setWinOne(false);
      setWinTwo(false);
      setOne([])
      setTwo([])
    }
  }, [again])

  return (
    <>
    <AnimatePresence>{name && <InputName name={name} setName={setName} setOneName={setOneName} setTwoName={setTwoName} />}</AnimatePresence>
    <Game again={again} oneScore={oneScore} twoScore={twoScore} oneName={oneName} twoName={twoName} plTwo={plTwo} oneTurn={oneTurn} plOne={plOne} cells={cells} winMoves={winMoves} setOne={setOne} setTwo={setTwo} one={one} two={two}/>
    <AnimatePresence>{(winOne || winTwo) && <PlayAgain oneName={oneName} twoName={twoName} winOne={winOne} setAgain={setAgain} winTwo={winTwo} />}</AnimatePresence>
    <AnimatePresence>{draw && !again && !winOne && !winTwo && <Draw  setAgain={setAgain} setDraw={setDraw} draw={draw}/>}</AnimatePresence>
    </>
  )
}

export default App
