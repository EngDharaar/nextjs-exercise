import { Db, MongoClient } from "mongodb"

const uri=process.env.MONGODB_URI

if(!uri){
    throw new Error("MONGODB_URI enviroment variable is not definded")
}

let client:MongoClient;
let db:Db;
export async function connectDatabase(){
    if(!client){
        client=new MongoClient(uri as string)
       client.connect()
       db=client.db("todo_app")
    }
    return {db,client}
}

export async function getTodoCollection(){
    if(!db){
        const {db:database}=await connectDatabase()
        return database.collection("todos")
    }
    return db.collection("todos")
}