import React from 'react'
import Header from './Header'
import GameArea from './GameArea'
import Result from './Result'

const Game = (props) => {
  return (
    <div className="bg-slate-900 min-h-[200px] w-72 rounded-2xl mt-20 m-auto p-5">
        <Header {...props}/>
        <GameArea {...props} />
        <Result {...props}/>
    </div>
  )
}

export default Game