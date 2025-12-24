'use client'
import React from 'react'
import { revalidate } from '../actions/revalidate-product'

const RevalidateButton = () => {
  return (
    <div>
        <button 
        className='bg-green-600 text-white p-2'
        onClick={revalidate}>revalidate</button>
    </div>
  )
}

export default RevalidateButton