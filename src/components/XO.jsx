import {useEffect, useState} from 'react'
import {TbCircle } from 'react-icons/tb'
import {TiTimes} from 'react-icons/ti'

const XO = ({x}) => {
   
  return (
    <>
      {x ? <TiTimes fontSize={40}/> : <TbCircle fontSize={40} />}
    </>
  )
}

export default XO