'use server'
type nameState ={
    // firts:string,
    // last:string,
    message:string
    error:string
}
export async function nameAction(prevState:nameState,formData:FormData):Promise <nameState>{
const name=formData.get('name') as string
if(!name ||name.trim()===''){
    return  {message:"",error:"name is rrquired"}
}
return {message:name,error:""}
}