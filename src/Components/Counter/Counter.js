import React from 'react'
import './Counter.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrementAction, incrementAction } from '../Redux/Counter/CounterAction'
// import { decrementAction1, decrementAction2, decrementAction3, decrementAction4, incrementAction1, incrementAction2, incrementAction3, incrementAction4 } from '../Redux/Counter/CounterAction'

const Counter = ({id}) => {

    // const {count1, count2, count3, count4} = useSelector(state=>state)
    // const {error1, error2, error3, error4} = useSelector(state=>state)
    const dispatch = useDispatch()
    const count = useSelector(state => state.count[id])
    const error = useSelector(state => state.error[id])

  return (
    <div className='counter'>
      <div className='single-counter'>
            <p className='counter-name'>Counter {id+1}</p>
            <button onClick={() => dispatch(decrementAction(id))}>-</button>
            <p className='counter-name'>{count}</p>
            <button onClick={() => dispatch(incrementAction(id))}>+</button>
      </div>
      {error && <p style={{color:'red'}}>{error}</p>}
      {/* <div className='single-counter'>
            <p className='counter-name'>Counter 2</p>
            <button onClick={() => dispatch(decrementAction2())}>-</button>
            <p className='counter-name'>{count2}</p>
            <button onClick={() => dispatch(incrementAction2())}>+</button>
      </div>
      {error2 && <p style={{color:'red'}}>{error2}</p>}
      <div className='single-counter'>
            <p className='counter-name'>Counter 3</p>
            <button onClick={() => dispatch(decrementAction3())}>-</button>
            <p className='counter-name'>{count3}</p>
            <button onClick={() => dispatch(incrementAction3())}>+</button>
      </div>
      {error3 && <p style={{color:'red'}}>{error3}</p>}
      <div className='single-counter'>
            <p className='counter-name'>Counter 4</p>
            <button onClick={() => dispatch(decrementAction4())}>-</button>
            <p className='counter-name'>{count4}</p>
            <button onClick={() => dispatch(incrementAction4())}>+</button>
      </div>
      {error4 && <p style={{color:'red'}}>{error4}</p>} */}
    </div>
  )
}

export default Counter
