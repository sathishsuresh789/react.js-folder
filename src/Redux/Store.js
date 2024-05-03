import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './counterReducer'

export default configureStore({
    reducer: {
        counter: CounterReducer,
    },
})