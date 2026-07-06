import React from 'react'
import { decrement } from '../../redux/counterSlice'
import { useDispatch } from 'react-redux'

export default function cart() {
    let dispatch = useDispatch()
  return (
    <div>
        <h1>Cart</h1>
        <button onClick={()=>{
           dispatch(decrement())
         }} 
        className='p-3 bg-amber-700'>Decrement Count</button>
    </div>
  )
}
