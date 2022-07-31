import React from 'react'

const Result = (props) => {
  const one = props.oneName === "" ? 'Player One' : props.oneName;
  const two = props.twoName === "" ? 'Player Two' : props.twoName;
  return (
    <div className='flex text-md font-medium w-full justify-center gap-2 text-amber-500 '>
      <div><h4>{one}: 0</h4></div>
      <div><h4>{two}: 0</h4></div>
    </div>
  )
}

export default Result