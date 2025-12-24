'use server'
type formState={
    message:string,
    error:string
}
export async function great(prevstate:formState,formDate:FormData):Promise <formState>{
  const email=formDate.get('email') as string
  if(!email || email.trim()===''){
    return {message:'',error:'email is required'}
  }
  return {message:`thanks for submitting! on success`,error:''}
}
