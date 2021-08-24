import React, {useState} from 'react'
import { Form, Col, Button, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

export const AddSpc = (props) => {
  const [formData, setFormData] = useState({});
  const history = useHistory();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    props.function(formData);
    history.push(`/`)
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
  console.log(formData)

  return (
    <Container style={{padding: "100px"}}>
        <h1>{props.title}</h1>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} controlId="status">
              <Col>
                <Form.Control onChange={handleChange} name={props.paramName} type="text" placeholder={props.title} />
              </Col>
            </Form.Group>
          </Row>
          <br/>
          <Row>
            <Button block type="submit" variant="dark" className="submit" >
              {props.submit}
            </Button>
          </Row>
        </Form>
      </Container>
    )
}
