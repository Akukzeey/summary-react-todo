import TodoItem from "./TodoItem";


export default function TodoList({todos,toggleTodos,deleteTodos}) {




    return (
        <>
            <ul className='list'>
                {todos.length === 0 && 'No Todos '}
                {todos.map(todo=>{
                    return  (
                        <>
                          <TodoItem {...todo} key={todo.id} toggleTodos={toggleTodos} deleteTodos={deleteTodos} />
                        </>
                    )
                })}
            </ul>
        </>
    )
}






