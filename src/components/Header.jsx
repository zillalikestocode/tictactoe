import React from 'react'
import Button from './Button'

const Header = (props) => {
  const one = props.oneName === "" ? 'Player One' : props.oneName;
  const two = props.twoName === "" ? 'Player Two' : props.twoName;

  return (
    <div className='w-full flex items-center'>
      <h4 className='text-sm font-medium text-amber-500 text-center w-full'>{props.oneTurn ? `${one}'s turn` : `${two}'s turn`}</h4>
        <div className='ml-auto w-fit '>
            <Button text='Reset' />
        </div>
    </div>
  )
}

export default Header