import React from 'react'

const page = async() => {
        const responce=await fetch('https://dummyjson.com/products')
    const data=await responce.json()
    console.log(data)
  return (
    <div>
        <ul>
            {
                data.products.slice(0,5).map((product:any)=>(
                    <li key={product.id}>{product.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default page