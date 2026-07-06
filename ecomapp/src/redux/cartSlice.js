import { createSlice } from "@reduxjs/toolkit";


let cartSlice =createSlice(
    {
        name:"counter",
        initialState:{
            count:[],
        },
        reducers:{
            addCart:(state, reqData)=>{
                state.count+=1 
                //reqData = {payload:anyData}

            },
            deleteCart:()=>{
                state.count-=1 
            }
        }
    }
)

export const {addCart,deleteCart}= cartSlice.actions

export default cartSlice.reducer