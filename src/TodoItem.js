export default function TodoItem({completed,id,title,key,toggleTodos,deleteTodos}) {
    return (
        <li key={id}>
            <label>
                <input onChange={e=>toggleTodos(id,e.target.checked)} type="checkbox" checked={completed} />
                {title}
            </label>
            <button onClick={()=>deleteTodos(id)} className='btn btn-danger'>delete</button>
        </li>
    )
}