import React, { useContext, useEffect, useState } from 'react';
import ApiContext from '../../context/api/apiContext';
import { Col, Spinner, Container, Form, Button, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { format } from 'date-fns'


export const UpdateTask = (props) => {
  const context = useContext(ApiContext);
  const history = useHistory();

  const { getAll, loading, status, people, categories, tasks, updateTask} = context;

  const [formData, setFormData] = useState({
    taskname: "",
    taskdesc: "",
    statusid: 0,
    status: "",
    person: "",
    personid: 0,
    category: "",
    categoryid: 0,
    id: 0,
    startdate: format(new Date('1-1-2000'), 'yyyy-MM-dd'),
    enddate: format(new Date('1-1-2000'), 'yyyy-MM-dd')
  });

  const taskIdVal = useParams().taskId;
  const taskId = taskIdVal ? parseInt(taskIdVal, 10) : 0;
  const setTaskId = (taskId) => {
    history.push(`/update/${taskId}`);
  }

  useEffect(() => {
    getAll();
  }, []);

  // Set form data from task when switching tasks
  useEffect(() => {
    const task = taskId
      ? tasks.find((task) => task.id === taskId)
      : {}; // There will be no task initially, just empty everything
    // Object rest to clone the task, otherwise the form will modify the referenced value
    setFormData(
      prevState =>
      ({
        ...prevState,
        ...task
      })
    );
  }, [setFormData, taskId, tasks]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateTask(taskId, formData);
    props.history.push("/")
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
        [fieldName]: e.target.value,
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
                <Form.Control onChange={changeTaskId} value={taskId} as="select" name="taskid">
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
                <Form.Control onChange={handleChange} value={formData.taskname} name="taskname" type="text" placeholder="Task name" />
              </Col>
            </Form.Group>
          </Row>


          <Row>
            <Form.Group as={Col} controlId="task_desc">
              <Form.Label column sm={2}>
                Task Description
              </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} value={formData.taskdesc} name="taskdesc" as="textarea" rows="4" cols="50" placeholder="Task description" />
              </Col>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="start_date">
              <Form.Label column sm={2}>
                Start Date
              </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} value={format(new Date(formData.startdate), 'yyyy-MM-dd')} name="startdate" type="date" />
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="end_date">
              <Form.Label column sm={2}>
                End Date
              </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} value={format(new Date(formData.enddate), 'yyyy-MM-dd')} name="enddate" type="date" />
              </Col>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="categories">
              <Form.Label>Category</Form.Label>
              <Col>
                <Form.Control onChange={handleChange} value={formData.categoryid} name="categoryid" as="select">
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
                <Form.Control onChange={handleChange} value={formData.statusid} name="statusid" as="select">
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
                <Form.Control onChange={handleChange} value={formData.personid} name="personid" as="select">
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



