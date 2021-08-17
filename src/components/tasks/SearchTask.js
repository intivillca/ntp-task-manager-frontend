import React, { useContext, useEffect, useState } from 'react';
import ApiContext from '../../context/api/apiContext';
import { Col, Spinner, Container, Form, Button, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const SearchTask = (props) => {

  const context = useContext(ApiContext)
  const { getTasks, getCategories, categories } = context;
  useEffect(() => {
    getTasks();
    getCategories();
  }, []);
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  return (

    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} controlId="task_name">
            <Col>
              <FontAwesomeIcon icon="search" />
              <Form.Control onChange={handleChange} name="taskname" type="text" placeholder="Task name" />
            </Col>
          </Form.Group>
        </Row>

      </Form>
    </Container>
  )
}
