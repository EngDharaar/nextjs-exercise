import Link from "next/link";
import { fetchTodos } from "./lib/todo";
import { deleteTodoAction } from "./actions/delete";
import { toggleTodo } from "./actions/toggle";

export default async function Home() {
  const todos=await fetchTodos()
  const time=new Date().toLocaleString()
  return (
    <main className="max-w-4xl mx-auto mt-10 p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
       <h1 className="text-2xl font-bold text-gray-500mb-2"> Todo App</h1>
       <p className="text-sm text-gray-500 mb-4">time:{time}</p>
       <div className="mb-6">
       <Link 
       href={'/new'}
       className="inline-flex items-center px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors"
       >➕ Add New Tod</Link>
       </div>
       {
        todos.length ===0? (
        <div className="text-center py-8">
        <p className="text-lg text-gray-500 ">No Todos Yet</p>
        <p className="text-gray-400 text-sm mt-2">Create your first todo to get started</p>
        </div>
        ):(
        <div className="space-y-3">
         {
          todos.map(todo=>(
         <div key={todo._id} className="flex items-center justify-between bg-gray-50 border-gray-200 rounded-b-lg p-4">
          <form action={toggleTodo.bind(null,todo._id)}>
           <button 
           type="submit"
           className="text-2xl hover:scale-110 transition-transform"
           title={todo.completed? "mark as incpmplete":"mark as complete"}
           >
          {todo.completed ? '✅' :"◽️"}
           </button>
          </form >
           <div className="flex space-x-2 items-center">
            <span className={`flex-1 text-lg ${todo.completed ? 'line-through text-gray-500':'text-gray-800'} `}>{todo.title}</span>
           </div>
           <div className="flex items-center space-x-2">
            <Link 
            href={`/edit/${todo._id}`}
            className="p-2 text-rose-600 hover:text-rose-100 rounded-md transition-colors"
            title="edit todo"
            > ✏️</Link>
              <form action={deleteTodoAction.bind(null,todo._id)} >
                <button 
                title="delete todo"
                className="p-2 text-red-600 hover:bg-red-100 rounded-md transition-colors"
                > 🗑️</button>
              </form>
           </div>
            </div>
          ))
         }
        </div>
        )
       }
      </div>
       </main>
   );
}
