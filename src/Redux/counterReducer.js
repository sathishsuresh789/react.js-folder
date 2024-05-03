import { createSlice } from "@reduxjs/toolkit";
export const counterslice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        data:[],
        users:{}
    },
    reducers:{
        increment: (state) =>{
            state.value += 1
        },
        decrement: (state) =>{
            state.value -= 1
        },
    }
})
export const { increment, decrement,} = counterslice.actions
export const selectcount = (state) => state.counter.value
export default counterslice.reducer