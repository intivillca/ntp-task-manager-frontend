import React, { useContext, useEffect, useState } from 'react';
import ApiContext from '../../context/api/apiContext';
import { Col, Spinner, Container, Form, Button, Row } from 'react-bootstrap';
import languageContext from '../../context/language/languageContext';
import { useHistory } from 'react-router-dom';


export const DeleteTask = (props) => {
  const context = useContext(ApiContext)
  const { getAll, loading, tasks, deleteTask } = context;
  const langContext = useContext(languageContext);
  const translation = langContext.langPack;
  const history = useHistory()
  
  useEffect(() => {
    getAll();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [taskId, setTaskId] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    deleteTask(taskId);
    history.push("/")
  };
  
  const changeTaskId = (ev) => {
    setTaskId(parseInt(ev.target.value))
  }

  
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only"></span>
      </Spinner>
    );
  }
  
  else {
    console.log(taskId);
    return (
      <Container style={{ padding: "100px" }}>
        <h1>{translation.DeleteTask}</h1>
        <Form onSubmit={handleSubmit}>

          <Row>
            <Form.Group as={Col} controlId="taskid">
              <Col>
                <Form.Control onChange={changeTaskId} as="select" name="taskid">
                  <option key="0" value="">{translation.Tasks}</option>
                  {
                    tasks.map(task =>
                      <option key={task.id} value={task.id}>{task.taskname}</option>
                    )
                  }
                </Form.Control>
              </Col>
            </Form.Group>
          </Row>
          <br/>
          <Row>
            <Button block type="submit" variant="dark" className="submit" >
              {translation.Submit}
            </Button>
          </Row>

        </Form>
      </Container>
    )
  }





}



