import { updateTodoAction } from '@/app/actions/updateTodo'
import { fetchTodoById } from '@/app/lib/todo'
import Link from 'next/link'
import React from 'react'

const editPage =async ({params}:{params:{id:string}}) => {
    const {id}=await params
    const todos=await fetchTodoById(id)
    console.log(todos)
  return (
   <main className='max-w-2xl mx-auto mt-10 p-6'>
<div className='bg-white rounded-lg shadow-md p-6'>
<div className='flex items-center justify-between mb-6'>
 <h1 className='text-2xl font-bold text-gray-800'>edit todo  </h1>
 <Link 
 href={'/'}
 className='text-rose-600 hover:text-rose-700 transition-colors'
 > ⬅️Back to dos</Link>
</div>
<form  action={updateTodoAction}>
<input type="hidden" name='id'  value={todos?._id}/>
<div>
    <label htmlFor="">To Do Title</label>
    <input type="text" name="title" id="" 
    defaultValue={todos?.title}
    placeholder='enter yout todo...'
    className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-600 '
    required
    autoFocus 
    maxLength={200}
    />
    <p className='text-sm mt-1 text-gray-500'>maximum characters 200</p>

</div>
<div className='flex items-center justify-between gap-3'>
<button 
className='flex-1 bg-rose-600 rounded-md text-white rounded-md px-4 py-2 hover:bg-rose-700'
>submit</button>
<Link
href={'/'} 
className=' rounded-md text-gray-600 border border-gray-500  rounded-md px-4 py-2 hover:bg-gray-50'
>cancel</Link>
</div>

</form>
</div>
</main>
  )
}

export default editPage