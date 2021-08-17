import React, { useContext, useEffect, useState } from 'react';
import ApiContext from '../../context/api/apiContext';
import { Col, Spinner, Container, Form, Button, Row } from 'react-bootstrap';


export const DeleteTask = (props) => {
  const context = useContext(ApiContext)
  const { getAll, loading, tasks, deleteTask } = context;
  useEffect(() => {
    getAll();
  }, []);
  const [taskId, setTaskId] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    deleteTask(taskId);
    props.history.push("/")
  };
  
  const changeTaskId = (ev) => {
    setTaskId(parseInt(ev.target.value))
  }

  
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  
  else {
    console.log(taskId);
    return (
      <Container style={{ padding: "100px" }}>
        <h1>Insert task</h1>
        <Form onSubmit={handleSubmit}>

          <Row>
            <Form.Group as={Col} controlId="taskid">
              <Form.Label column sm={2}>Task</Form.Label>
              <Col>
                <Form.Control onChange={changeTaskId} as="select" name="taskid">
                  <option key="0" value="">Tasks</option>
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
              Submit
            </Button>
          </Row>

        </Form>
      </Container>
    )
  }





}



