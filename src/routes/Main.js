import React, {Fragment} from 'react'
import {HeaderNav} from '../components/ui/HeaderNav'
import {TaskTable} from '../components/ui/TaskTable'

const Main = () => {
  return (
    <Fragment>
      <HeaderNav />
      <TaskTable/>
    </Fragment>
  )
}

export default Main
