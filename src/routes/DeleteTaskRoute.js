import React from 'react'
import { HeaderNav } from '../components/ui/HeaderNav'
import { DeleteTask } from '../components/tasks/DeleteTask'

export const DeleteTaskRoute = () => {
  return (
    <div className="DeleteTask">
      <HeaderNav/>
      <DeleteTask/>
    </div>
  )
}
