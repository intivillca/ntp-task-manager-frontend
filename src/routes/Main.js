import React, { Fragment, useContext } from 'react'

import { ChangeLang } from '../components/ui/ChangeLang'
import { HeaderNav } from '../components/ui/HeaderNav'
import { TaskTable } from '../components/ui/TaskTable'
import { FunctionButton } from '../components/ui/FunctionButton'
import { Row, Container } from 'react-bootstrap'
import languageContext from '../context/language/languageContext'
import { ContextTest } from '../testing/contextTest'
import { SearchTask } from '../components/tasks/SearchTask'


const Main = () => {
  const langContext = useContext(languageContext);
  const translation = langContext.langPack;
  return (
    <Fragment>
      <ContextTest />
      <HeaderNav />
      <Container className="main" style={{ padding: "50px" }}>
        <SearchTask />
        <TaskTable/>
      </Container>

      <ChangeLang />
    </Fragment>
  )
}

export default Main
