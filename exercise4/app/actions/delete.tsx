"use server"
import { revalidatePath } from "next/cache";
import { deletedTodo } from "../lib/todo";

export async function deleteTodoAction(id:string){
    if(!id){
        console.log("required id todo")
        return
    }
    const success=await deletedTodo(id)
   if(!success){
    console.log("failed to delete to do")
   }
   revalidatePath('/')

}