'use client'
import { useActionState } from 'react'
import { passAction } from '../form/passwordAction'
const initialState ={
    message:0,
    error:''
}
export default function FieldPassword  () {
    const [state,actionForm]=useActionState(passAction,initialState)
  return (
    <div >
        <h1>field password</h1>
        <form action={actionForm}>
             <input type="password"  name='password'
             placeholder='enter your password'
        className='border-2 p-1 border-gray-200 rounded-md'
        />
        <button 
        className='bg-green-600 text-white p-2 rounded-md'
        type='submit'>submit</button>
        </form>
        {
            state.message && (
                <p className='text-green-600'>{state.message}</p>
            )
        }
        {
            state.error && (
                <p className='text-red-600'>{state.error}</p>
            )
        }
       

    </div>
  )
}

