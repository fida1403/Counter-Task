import React, { useEffect, useState } from 'react'
import './Home.css'
import Counter from '../Counter/Counter'
import Reset from '../Reset/Reset'
import Sum from '../Sum/Sum'

const Home = () => {

    const[title, setTitle] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setTitle(true)
        },3000)
    })


  return (
    <div className='home'>
      {title && <h1 className='title'>PAGE TITLE</h1>}
      <Counter id={0}/>
      <Counter id={1}/>
      <Counter id={2}/>
      <Counter id={3}/>
      <Reset />
      <Sum />
    </div>
  )
}

export default Home
