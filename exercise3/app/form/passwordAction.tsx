type passwordState ={
    message:number,
    error:string
}
export async function passAction(prevState:passwordState,formData:FormData):Promise<passwordState>{
const password=formData.get('password')  as any
// if(typeof !password=='string' ){
//     return {message:0,error:"password are required"}
// }
if(password.length < 6){
    return {message:0,error:"password must be at least 6 character"}
}
return {message:password,error:""}
}