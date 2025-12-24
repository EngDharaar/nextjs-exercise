import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {Dancing_Script} from 'next/font/google'
import imageProduct from '../../public/product.jpg'
const DancingScript=Dancing_Script({
    subsets:['latin'],
    display:"swap",
    // weight:'400'
})
export const metadata ={
    title:'Blog somali blog',
    description:"Blog page"
}
const blogPage = async() => {
    const posts=await fetch('https://dummyjson.com/products')
    const data=await posts.json()
    console.log("data",data)
  return (
    <div className='max-w-xl mx-auto p-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            data.products.slice(0,5).map((post:any)=>(
                <div key={post.id} className={` border-2 border-gray-200 p-1 mb-2`}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    <h1>{post.title}</h1>
                    <p>{post.descriptioon}</p>
                    <img src={'https://images.unsplash.com/photo-1761839257864-c6ccab7238de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8'} width={100} height={100} alt="" />
                    <Image src={"https://images.unsplash.com/photo-1761839257864-c6ccab7238de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"} width={100} height={100} alt=""/>
                    <p>{post.price}</p>
                    <p>{post.rating}</p>
                    <p>{post.stock}</p>
                </div>
            ))
        }
    </div>
  )
}

export default blogPage