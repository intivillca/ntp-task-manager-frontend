import React, {Fragment} from 'react'
import { ChangeLang } from '../components/ui/ChangeLang'
import {HeaderNav} from '../components/ui/HeaderNav'
import {TaskTable} from '../components/ui/TaskTable'
import { FunctionButton } from '../components/ui/FunctionButton'

const Main = () => {
  return (
    <Fragment>
      <HeaderNav />
      <FunctionButton link="about" icon="faTask" text="Add Task"/>
      <TaskTable/>
      <ChangeLang/>
    </Fragment>
  )
}

export default Main
