import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import {useNavigate, useParams,Link} from "react-router-dom"
import { removeTodoFailure, removeTodoRequest, removeTodoSuccess, toggleTodoFailure, toggleTodoRequest, toggleTodoSuccess } from '../Redux/action'
import axios from "axios"

const SingleTodo = () => {
  const [currentTodo,setCurrentTodo] = useState({});
    const todos = useSelector((state) => state.todos)
    // console.log(todos,"ewq");
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { id }= useParams();


    const toggleStatus = (id,newStatus) =>{
    dispatch(toggleTodoRequest())
    axios
    .patch(`/todos/${id}`,{status: newStatus})  //if u want to change the data of the single entity and after that entity you should write{status:}
    .then((r)=> dispatch(toggleTodoSuccess(r.data)))
    .catch((e)=> dispatch(toggleTodoFailure(e)))
    }
 

const removeTodo = ()=>{
  dispatch(removeTodoRequest());
  axios
  .delete(`/todos/${id}`)
  .then((r)=> {
  dispatch(removeTodoSuccess(id))
  navigate("/")
  window.location.reload(true);
})
  .catch((e)=> dispatch(removeTodoFailure(e)));
}

useEffect(()=>{
  let currentTodo = todos.find((item)=> item.id === Number(id));
  currentTodo && setCurrentTodo(currentTodo);
},[todos,id]);


  return (
    <div>
        <h2>{currentTodo?.title}
        {currentTodo?.status?"True":"False"}
        </h2>
        <button onClick={()=>toggleStatus(currentTodo.id, !currentTodo.status)}>Toggle</button>
        <button onClick={()=>removeTodo(currentTodo.id)}>Delete</button>
        <Link to={`/todo/${currentTodo.id}/edit`}>
        <button>EDIT</button>
        </Link>

    </div>
  )
}

export default SingleTodo