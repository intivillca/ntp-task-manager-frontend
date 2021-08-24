import React, { Fragment, useContext } from 'react'

import { HeaderNav } from '../components/ui/HeaderNav'
import { TaskTable } from '../components/ui/TaskTable'
import { FunctionButton } from '../components/ui/FunctionButton'
import { Row, Container, ButtonGroup, Button } from 'react-bootstrap'
import languageContext from '../context/language/languageContext'
import ApiContext from '../context/api/apiContext'
import { SearchTask } from '../components/tasks/SearchTask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GeneratePDFReport } from '../services/CreatePDFReport'




const Main = (props) => {
  const langContext = useContext(languageContext);
  const translation = langContext.langPack;
  const context = useContext(ApiContext);
  const { tasks } = context;
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
              <Button
                variant="dark"
                size="lg"
                onClick = {
                  () => GeneratePDFReport(tasks,translation)
                }
              >
                <FontAwesomeIcon icon="file" />
                <div className="button-text">
                  {translation.GenerateReport}
                </div>
              </Button>

            </ButtonGroup>
          </Row>
        </Container>


        <SearchTask />

        <TaskTable />

      </Container>
    </Fragment >
  )
}

export default Main
