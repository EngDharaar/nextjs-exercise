export type Todo ={
    _id:string,
    title:string,
    completed:boolean,
    createdAt:string,
    updatedAt:string
}
export type createdTodoInput ={
    title:string,
    completed?:boolean,
     createdAt?:string,
    updatedAt?:string
}
export type updateTodoInput = {
    title?:string,
    completed?:boolean,
}