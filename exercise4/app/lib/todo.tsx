// "use server"
import { ObjectId } from "mongodb";
import { createdTodoInput, Todo, updateTodoInput } from "../types/ty";
import { getTodoCollection } from "./db";

export async function fetchTodos ():Promise <Todo []>{
    try {
        const collection=await getTodoCollection();
        const todos=await collection.find().toArray();
        return todos.map(todo=>({
            _id:todo._id.toString(),
            title:todo.title,
            completed:todo.completed,
            createdAt:todo.createdAt|| new Date().toISOString(),
            updatedAt:todo.updatedAt|| new Date().toISOString()
        }))
    } catch (error) {
        console.log("fetchtos error todod",error)
        return []
    }
    
}


export async function fetchTodoById (id:string):Promise<Todo | null>{
try {
    const collection=await getTodoCollection();
    const todos=await collection!.findOne({_id:new ObjectId(id)})
    return {
        _id:todos!._id.toString(),
        completed:todos?.completed,
        title:todos?.title,
        createdAt:todos?.createdAt|| new Date().toLocaleString(),
        updatedAt:todos?.updatedA|| new Date().toLocaleString(),
    }
} catch (error) {
    console.log("fetch error by id")
    return null
}
}

export async function createdTodo(todo:createdTodoInput):Promise<string | null>{
    try {
        const collection=await getTodoCollection();
        const result=await collection.insertOne(todo)
        return result.insertedId.toString()
    } catch (error) {
        console.log("fetch error insertone ",error)
        return null
    }
}


export async function updateTodo(id:string,todo:updateTodoInput):Promise<boolean>{
    try {
          const collection=await getTodoCollection();
        const result=await collection!.updateOne({_id:new ObjectId(id)},{$set:todo})
        return result.modifiedCount>0
    } catch (error) {
        console.log("fetch update todo",error)
        return false
    }
}


export  async function deletedTodo(id:string):Promise <boolean>{
    try {
          const collection=await getTodoCollection();
        const result=await collection.deleteOne({_id:new ObjectId(id)})
        return result.deletedCount>0
    } catch (error) {
        console.log("fetch error delete by id")
        return false
    }
}