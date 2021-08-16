import React, { Fragment, useContext } from 'react'
import { ChangeLang } from '../components/ui/ChangeLang'
import { HeaderNav } from '../components/ui/HeaderNav'
import { TaskTable } from '../components/ui/TaskTable'
import { FunctionButton } from '../components/ui/FunctionButton'
import { Row, Col, Container } from 'react-bootstrap'
import languageContext from '../context/language/languageContext'


const Main = () => {
  const langContext = useContext(languageContext);
  const translation = langContext.langPack;
  return (
    <Fragment>
      <HeaderNav />
      <Container className="main">
        <Row>
          <FunctionButton link="about" icon="tasks" text={translation.AddTask} />
          <FunctionButton link="update" icon="edit" text={translation.UpdateTask} />
          <FunctionButton link="remove" icon="trash" text={translation.DeleteTask} />
        </Row>

        <TaskTable />
      </Container>

      <ChangeLang />
    </Fragment>
  )
}

export default Main
