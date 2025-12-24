"use server"
import { revalidatePath } from "next/cache"
import {  fetchTodoById, updateTodo } from "../lib/todo"
import { redirect } from "next/navigation"

export async function updateTodoAction(formData:FormData){
const id=formData.get("id") as string
const title=formData.get("title") as string
if(!id || !title || title.trim().length===0){
return 
}
const existingId=await fetchTodoById(id)

if(!existingId){
return 
}
const success=await updateTodo(id,{title:title.trim()})
if(!success){
    return 
}
revalidatePath("/")
redirect("/")
}