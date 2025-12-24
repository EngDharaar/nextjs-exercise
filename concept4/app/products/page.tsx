import React from 'react'
import RevalidateButton from './revalidate-button'

const page = async() => {
      const resp=await fetch('https://dummyjson.com/products',{
    // cache:'no-store' realtimeisagoo build ah 
    // cache:'force-cache' static isagoo build ah
    // next:{revalidate:10} 10 daqiiqo kadib reshfress ayuu samaynayaa 
    // kan xiga u samay folder action la dheho
    next:{tags:['products']}
  })
  const data=await resp.json()
  const now=new Date().toLocaleTimeString()
  return (
   <>
    <div> a cashe : {now}</div>
    <RevalidateButton/></>
  )
}

export default page