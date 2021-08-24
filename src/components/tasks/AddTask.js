import React, { useContext, useEffect, useState } from 'react';
import ApiContext from '../../context/api/apiContext';
import languageContext from '../../context/language/languageContext';
import { Col, Spinner, Container, Form, Button, Row } from 'react-bootstrap';


export const AddTask = (props) => {
  const context = useContext(ApiContext)
  const langContext = useContext(languageContext);
  const translation = langContext.langPack;
  const { getAll, loading, status, people, categories, createTask } = context;
  useEffect(() => {
    getAll();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    createTask(formData);
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
        [fieldName]: e.target.value
      })
    )

  };

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only"></span>
      </Spinner>
    );
  }

  else {
    return (
      <Container style={{ padding: "100px" }}>
        <h1>{translation.InsertTask}</h1>
        <Form onSubmit={handleSubmit}>


          <Row>
            <Form.Group as={Col} controlId="task_name">
              <Form.Label sm={2}>
                {translation.TaskName}
              </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} name="taskname" type="text" placeholder={translation.TaskName} />
              </Col>
            </Form.Group>
          </Row>


          <Row>
            <Form.Group as={Col} controlId="task_desc">
              <Form.Label column sm={2}>
              {translation.TaskDesc}
              </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} name="taskdesc" as="textarea" rows="4" cols="50" placeholder={translation.TaskDesc} />
              </Col>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="start_date">
              <Form.Label>
                {translation.StartDate}
              </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} name="startdate" type="date" />
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="end_date">
              <Form.Label>
              {translation.EndDate}
              </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} name="enddate" type="date" />
              </Col>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} controlId="categories">
              <Form.Label>{translation.Category}</Form.Label>
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
              <Form.Label>{translation.Status}</Form.Label>
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
              <Form.Label>{translation.Person}</Form.Label>
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
            <Button  block type="submit" variant="dark" className="submit">
            {translation.Submit}
            </Button>
          </Row>

        </Form>
      </Container>
    )
  }





}



