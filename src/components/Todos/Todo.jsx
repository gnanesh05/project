import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodoAction, RemoveTodoAction } from '../../actions/TodoActions';

const Todo = () => {
    const [todo, setTodo] = useState({name:''})
    const dispatch = useDispatch();
    const Todo = useSelector(state=>state.Todo);
    const {todos} = Todo
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(AddTodoAction(todo))
        setTodo({name:''})
    }

    const removeTodo = (tododelete)=>{
        dispatch(RemoveTodoAction(tododelete))
    }

  return (
    <div>
        <h2>Todos With Redux</h2>
        <form>
            <input type="text" placeholder='enter todo' value={todo.name} onChange={e=>setTodo({name:e.target.value})} />
            <input type="button" value="Add" onClick={handleSubmit} />
            <ul>
                {
                    todos && (
                        todos.map((item,i)=>(
                            <li key={i}>
                                {item.name}
                                <input type="button" value='remove' style={{color:"red"}} onClick={()=>removeTodo(item)}/>
                            </li>
                        ))
                    )
                }
            </ul>
            
        </form>
    </div>
  )
}

export default Todo