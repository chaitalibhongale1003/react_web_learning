import { createSlice } from "@reduxjs/toolkit";


let counterSlice =createSlice(
    {
        name:"counter",
        initialState:{
            count:0,
        },
        reducers:{
            increment:(state, reqData)=>{
                state.count+=1 
                //reqData = {payload:anyData}

            },
            decrement:(state, reqData)=>{
                state.count-=1 
            }
        }
    }
)

export const {increment,decrement}= counterSlice.actions

export default counterSlice.reducer