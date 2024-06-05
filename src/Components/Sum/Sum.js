import React from 'react'
import './Sum.css'
import { useSelector } from 'react-redux'

const Sum = () => {

    const sum = useSelector(state => state.count.reduce((a, b) => a+b, 0))

  return (
    <div className='sum'>
      <p className='sum-name'>Sum {sum}</p>
    </div>
  )
}

export default Sum
