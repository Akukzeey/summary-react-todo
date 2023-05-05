import {useState} from "react";
export default function NewTodoForm ({addTodo }) {

    const [value,setValue]=useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (value==='') return
        addTodo(value)

        setValue('')
    }

  return(
      <>
      <form onSubmit={handleSubmit} className='new-item-form'>
          <label htmlFor="text" className='form-row'>New Item</label>
          <input type="text" id='text' value={value} onChange={e=>setValue(e.target.value)}/>
          <button className='btn'>Add</button>
      </form>
      </>
  )
}