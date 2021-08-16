import React from 'react'
import { Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const FunctionButton = (props) => {
  return (
    <Col className="p-3">
      <div className="mb-2">
        <Button variant="dark" size="lg" block as={Link} to={props.link}>
        <FontAwesomeIcon icon={props.icon} />
          <div className="button-text">
            {props.text}
          </div>
        </Button>
      </div>
    </Col>
  )
}
