import React from 'react'
import FieldEmail from './components/FielEmail'
import FieldPassword from './components/fieldPassword'
import { FieldName } from './components/fieldName'

const homePage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[200px]'>
      <FieldEmail/>
      <FieldPassword/>
      <FieldName/>
    </div>
  )
}

export default homePage