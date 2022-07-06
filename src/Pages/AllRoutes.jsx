import React from 'react'
import {Route,Routes} from "react-router-dom"
import EditTodo from './EditTodo'
import HomePage from './HomePage'
import SingleTodo from './SingleTodo'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/todo/:id" element={<SingleTodo/>}></Route>
        <Route path="/todo/:id/edit" element={<EditTodo/>}></Route>
    </Routes>
  )
}

export default AllRoutes