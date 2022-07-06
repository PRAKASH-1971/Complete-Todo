import React from 'react'
import {Link} from "react-router-dom"

const TodoItem = ({todolists}) => {
    console.log(todolists,"todjtr");
  return (
    <div className='todolists'>
        {todolists?.map((item)=>{
            return(
<Link to={`/todo/${item.id}`} key={item.id}>
<div key={item.id}>
{item.title}</div>
</Link>
            ) 
        })}
    </div>
  )
}

export default TodoItem