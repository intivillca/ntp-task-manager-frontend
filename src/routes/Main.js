import React, { Fragment, useContext, useRef } from 'react'

import { HeaderNav } from '../components/ui/HeaderNav'
import { TaskTable } from '../components/ui/TaskTable'
import { FunctionButton } from '../components/ui/FunctionButton'
import { Row, Container, ButtonGroup } from 'react-bootstrap'
import languageContext from '../context/language/languageContext'
import { SearchTask } from '../components/tasks/SearchTask'



const Main = (props) => {
  const langContext = useContext(languageContext);
  const translation = langContext.langPack;
  const componentRef = useRef();
  return (
    <Fragment>
      <HeaderNav />
      <Container className="main" style={{ padding: "50px" }}>

        <Container className="justify-content-between">
          <Row>
            <ButtonGroup>
              <FunctionButton
                variant={"dark"}
                link={"add"}
                icon={"tasks"}
                text={translation.AddTask} />

              <FunctionButton
                variant={"dark"}
                link={"update"}
                icon={"edit"}
                text={translation.UpdateTask} />

              <FunctionButton
                variant={"dark"}
                link={"delete"}
                icon={"trash"}
                text={translation.DeleteTask} />

            </ButtonGroup>
          </Row>
        </Container>


        <SearchTask />

        <TaskTable ref={componentRef} />

      </Container>
    </Fragment>
  )
}

export default Main
