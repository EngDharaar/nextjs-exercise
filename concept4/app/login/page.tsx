import React from 'react'
import { loginAction } from '../actions/lagin'

const page = () => {
  return (
    <div>
        <form action={loginAction}>
            <select className='border p-2' name="role" id="">
           <option value="user">user</option>
           <option value="admin">admin</option>
            </select>
            <button className='bg-green-600 text-white rounded-md p-2'>login</button>
        </form>
    </div>
  )
}

export default page