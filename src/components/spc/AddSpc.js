import React, {useState} from 'react'
import { Form, Col, Button, Container, Row } from 'react-bootstrap'

export const AddSpc = (props) => {
  const [formData, setFormData] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    props.function(formData);
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
    <Container style={{padding: "100px"}}>
        <h1>{props.title}</h1>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} controlId="status">
              <Form.Label column sm={2}>
                Category
                </Form.Label>
              <Col>
                <Form.Control onChange={handleChange} name="category" type="text" placeholder="Category" />
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
