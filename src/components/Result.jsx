import React from 'react'

const Result = (props) => {
  const one = props.oneName === "" ? 'Player One' : props.oneName;
  const two = props.twoName === "" ? 'Player Two' : props.twoName;
  return (
    <div className='flex text-md font-medium w-full justify-center gap-2 text-amber-500 '>
      <div><h4>{one}: {props.oneScore}</h4></div>
      <div><h4>{two}: {props.twoScore}</h4></div>
    </div>
  )
}

export default Result