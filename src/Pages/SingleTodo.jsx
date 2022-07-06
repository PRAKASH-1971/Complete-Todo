import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import {useParams} from "react-router-dom"
import { toggleTodoFailure, toggleTodoRequest, toggleTodoSuccess } from '../Redux/action'
import axios from "axios"

const SingleTodo = () => {
  const [currentTodo,setCurrentTodo] = useState({});
    const todos = useSelector((state) => state.todos)
    // console.log(todos,"ewq");
    const dispatch = useDispatch()
    const { id }= useParams();


    const toggleStatus = (id,newStatus) =>{
    dispatch(toggleTodoRequest())
    axios
    .patch(`/todos/${id}`,{status: newStatus})  //if u want to change the data of the single entity and after that entity you should write{status:}
    .then((r)=> dispatch(toggleTodoSuccess(r.data)))
    .catch((e)=> dispatch(toggleTodoFailure(e)))
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
        <button onClick={()=>{toggleStatus(currentTodo.id, !currentTodo.status)}}>Toggle</button>

    </div>
  )
}

export default SingleTodo