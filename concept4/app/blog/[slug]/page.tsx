type PageProps = {
  params: Promise<{ slug: string }>
}
export async function generateMetadata ({params}:PageProps){
     const { slug } = await params
           const posts=await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    const data=await posts.json()
    return {
        title:data.title,
        description:data.body
    }
}

const blogPost = async({params}:PageProps) => {
      const { slug } = await params
        const posts=await fetch(`https://dummyjson.com/products/${slug}`)
    const data=await posts.json()
    if(!data){
        return <div>post not found</div>
    }
  return (
    <div>
        <h1>{data.title}</h1>
                    <p>{data.descriptioon}</p>
                    <img src={data.thumbnail} width={100} height={100} alt="" />
                    <p>{data.price}</p>
                    <p>{data.rating}</p>
                    <p>{data.stock}</p>
    </div>
  )
}

export default blogPost