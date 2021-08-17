import React, { useContext, useEffect, useState } from 'react';
import ApiContext from '../../context/api/apiContext';
import { Col, Spinner, Container, Form, Button, Row } from 'react-bootstrap';


export const UpdateTask = (props) => {
  const context = useContext(ApiContext)
  const { getAll, loading, status, people, categories, tasks, updateTask } = context;
  useEffect(() => {
    getAll();
  }, []);
  const [formData, setFormData] = useState({});
  const [taskId, setTaskId] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateTask(taskId,formData);
  };
  const handleChange = (e) => {
    const fieldName = e.target.name;
    if (!fieldName) {
      return;
    }
    setFormData(
      prevState =>
      ({
        ...prevState,
        [fieldName]: e.target.value
      })
    )

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


          <Row>
            <Form.Group as={Col} controlId="task_name">
              <Form.Label sm={2}>
                Task Name
              </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} name="taskname" type="text" placeholder="Task name" />
              </Col>
            </Form.Group>
          </Row>


          <Row>
            <Form.Group as={Col} controlId="task_desc">
              <Form.Label column sm={2}>
                Task Description
              </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} name="taskdesc" as="textarea" rows="4" cols="50" placeholder="Task description" />
              </Col>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="start_date">
              <Form.Label column sm={2}>
                Start Date
              </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} name="startdate" type="date" />
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="end_date">
              <Form.Label column sm={2}>
                End Date
              </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} name="enddate" type="date" />
              </Col>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="categories">
              <Form.Label>Category</Form.Label>
              <Col>
                <Form.Control onChange={handleChange} as="select" name="categoryid">
                  <option key="0" value="0"> </option>
                  {
                    categories.map(category =>
                      <option key={category.id} value={category.id}>{category.category}</option>
                    )
                  }
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="status">
              <Form.Label>Status</Form.Label>
              <Col>
                <Form.Control onChange={handleChange} as="select" name="statusid" >
                  <option key="0" value="0"> </option>
                  {
                    status.map(status =>
                      <option key={status.id} value={status.id}>{status.status}</option>
                    )
                  }
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="Person">
              <Form.Label>Person</Form.Label>
              <Col>
                <Form.Control onChange={handleChange} as="select" name="personid">
                  <option key="0" value="0"> </option>
                  {
                    people.map(person =>
                      <option key={person.id} value={person.id}>{person.firstname + ' ' + person.lastname}</option>
                    )
                  }
                </Form.Control>
              </Col>
            </Form.Group>
          </Row>
          <br />
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



