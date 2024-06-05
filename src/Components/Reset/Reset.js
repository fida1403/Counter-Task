import React from 'react'
import './Reset.css'
import { resetAction } from '../Redux/Counter/CounterAction'
import { useDispatch } from 'react-redux'

const Reset = () => {

    const dispatch = useDispatch()

  return (
    <div className='reset'>
      <button className='reset-btn' onClick={() => dispatch(resetAction())}>Reset</button>
    </div>
  )
}

export default Reset
