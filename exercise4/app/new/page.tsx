import Link from 'next/link'
import React from 'react'
import { createTodoAction } from '../actions/createTodo'

const page = () => {
  return (
<main className='max-w-2xl mx-auto mt-10 p-6'>
<div className='bg-white rounded-lg shadow-md p-6'>
<div className='flex items-center justify-between mb-6'>
 <h1 className='text-2xl font-bold text-gray-800'>add new todo  </h1>
 <Link 
 href={'/'}
 className='text-rose-600 hover:text-rose-700 transition-colors'
 > ⬅️Back to dos</Link>
</div>
<form action={createTodoAction}> 
 <div> 
    <label htmlFor="title" 
    className='block text-sm font-medium text-gryay-700 mb-2'
    >
    To do Title
    </label>
    <input type="text" 
     id='title'
     name='title'
     placeholder='enter your todo '
     className='w-full px-3 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent'
     required 
     maxLength={200}
     autoFocus
    />
    <p className='text-sm text-gray-500 mt-1'>Maximum 200 characters</p>
</div>  
   <div className='flex gap-3 '>
    <button 
    type='submit'
    className='flex-1 bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-700 fous:outline-none focus:ring-2 focus:ring-rose-500'
    >
   create to do 
    </button>
    <Link  
    className='px-4 py-2 border border-gray-500 text-gray-700 rounded-md hover:bg-gray-50
    fous:outline-none focus:ring-2 focus:ring-gray-500'
    href={'/'}
    >cancel</Link>
    </div>  
</form>
</div>
</main>
)
}

export default page