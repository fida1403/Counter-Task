import { createStore } from 'redux'
import CounterReducer from './Counter/CounterReducer'

export const store = createStore(CounterReducer)


