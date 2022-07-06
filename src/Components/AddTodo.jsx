import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodoFailure, addTodoRequest, addTodoSuccess } from '../Redux/action'
import axios from "axios"



const AddTodo = () => {
    const dispatch = useDispatch();
const [todo,setTodo] = useState('')

const addTodo = (payload)=>{
    dispatch(addTodoRequest())
    axios
    .post("/todos",payload)
    .then((r)=> dispatch(addTodoSuccess(r.data)))
    .catch((e)=> dispatch(addTodoFailure(e)))
};

const handleadd = ()=>{
    if(todo){
        const payload = {title: todo,status:false}
        addTodo(payload)
        setTodo("")
    }
}

  return (
    <div>
        <h3>Add Todo</h3>
        <input type="text" value={todo}
        onChange={(e)=>setTodo(e.target.value)} placeholder="Add Todo Here" />
        <button onClick={handleadd}>Add</button>
    </div>
  )
}

export default AddTodo