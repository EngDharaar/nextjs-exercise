


const SlowComponents = async() => {
    await new Promise(resolve => setTimeout(resolve, 3000))
  return (
    <div>SlowComponents</div>
  )
}

export default SlowComponents