import React from 'react'
import { AddTask } from '../components/tasks/AddTask'
import { HeaderNav } from '../components/ui/HeaderNav'

export const AddTaskRoute = () => {
  return (
    <div>
      <HeaderNav/>
      <AddTask />
    </div>
  )
}
