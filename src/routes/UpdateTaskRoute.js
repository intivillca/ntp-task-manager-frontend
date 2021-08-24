import React from 'react'
import { HeaderNav } from '../components/ui/HeaderNav'
import { UpdateTask } from '../components/tasks/UpdateTask'

export const UpdateTaskRoute = (props) => {
  return (
    <div className="UpdateTask">
      <HeaderNav/>
      <UpdateTask/>
    </div>
  )
}
