import React, { Fragment, useContext } from 'react'

import { ChangeLang } from '../components/ui/ChangeLang'
import { HeaderNav } from '../components/ui/HeaderNav'
import { TaskTable } from '../components/ui/TaskTable'
import { FunctionButton } from '../components/ui/FunctionButton'
import { Row, Container } from 'react-bootstrap'
import languageContext from '../context/language/languageContext'
import { ContextTest } from '../testing/contextTest'


const Main = () => {
  const langContext = useContext(languageContext);
  const translation = langContext.langPack;
  return (
    <Fragment>
      <ContextTest />
      <HeaderNav />
      <Container className="main">
        <Row>
          <FunctionButton link="add" icon="tasks" text={translation.AddTask} />
          <FunctionButton link="update" icon="edit" text={translation.UpdateTask} />
          <FunctionButton link="delete" icon="trash" text={translation.DeleteTask} />
        </Row>

        <TaskTable/>
      </Container>

      <ChangeLang />
    </Fragment>
  )
}

export default Main
