'use client'
import { useActionState } from "react"
import { nameAction } from "../form/nameAction"


const initialState={
    message:'',
    error:""
}

export const FieldName = () => {
    const [state,actionForm]=useActionState(nameAction,initialState)
  return (
    <div>
        <form action={actionForm}>
            <input 
            className="border-2 border-gray-200 rounded-md  p-1"
            type="text" name="name"  
            placeholder="enter your firstname"
            />
            <button 
            type="submit"
            className="bg-green-600 rounded-md p-2 text-white"
            > submit</button>
        </form>
        {
            state.message && (
                <p>{state.message}</p>
            )
        }
        {
            state.error && (
                <p className="text-red-600">{state.error}</p>
            )
        }
    </div>
  )
}

