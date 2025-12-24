'use client'
import { useActionState } from "react";
import { great } from "../form/action";
const initialState={
  message:'',
  error:""
}
export default function FieldEmail() {
const [state,formaction]=useActionState(great,initialState)
  return (
    <div>   
      <h1>field Email</h1>
    <form action={formaction}>
      <input 
      className="border-2 p-1  border-gray-300 rounded-md"
      type="email" 
      placeholder="enter your email"
      name="email" />
      <button
      className="bg-green-600 p-2 rounded-md text-white"
      type="submit">submit</button>
    </form>

    
      {state.message &&(
      <p className="text-green-700">{state.message}</p>
      ) }
      {state.error &&(
      <p className="text-red-700">{state.error}</p>
      ) }
    
     </div>
  );
}
