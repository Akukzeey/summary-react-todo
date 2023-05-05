import {useEffect, useState} from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function App() {
    const [todos,setTodos]=useState(()=>{
        const localItem=localStorage.getItem('ITEMS')
        if (localItem === null) return []

        return JSON.parse(localItem)
    })

    useEffect(()=>{
        localStorage.setItem('ITEMS',JSON.stringify(todos))
    },[todos])

    const addTodo = (title) => {
        setTodos(currentTodos=>{
            return [...currentTodos,{id:crypto.randomUUID(),title,checked:false}]
        })
    }


    function toggleTodos(id,completed) {
        setTodos(currentTodo=>{
            return currentTodo.map(todo=>{
                if (todo.id === id){
                    return {...todo,completed}
                }
                return todo
            })
        })
    }


    function deleteTodos(id) {
        setTodos(currentTodos=>{
            return currentTodos.filter(todo=>todo.id !== id)
        })
    }




    return (
        <>
            <NewTodoForm addTodo={addTodo}/>
            <h1 className='header'>Todo List</h1>
            <TodoList todos={todos} toggleTodos={toggleTodos} deleteTodos={deleteTodos}/>
        </>
    )
}