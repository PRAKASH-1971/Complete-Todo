import axios from 'axios'
import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { getTodoFailure, getTodoRequest, getTodoSuccess } from "../Redux/action"
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'


const Todo = () => {
    const dispatch = useDispatch()
   const alltodos = useSelector((state) => state.todos)


    const getTodos = ()=>{
         dispatch(getTodoRequest());
         axios
         .get("/todos")
         .then((r)=> dispatch(getTodoSuccess(r.data)))
         .catch((e)=>dispatch(getTodoFailure(e)))
    }

    useEffect(()=>{
        if(alltodos?.length === 0){
            getTodos()

        }
    },[])

    console.log(alltodos);

  return (
    <div>
        <h3>Todos</h3>
        <AddTodo/>
        <TodoItem todolists={alltodos}/>
    </div>
  )
}

export default Todo