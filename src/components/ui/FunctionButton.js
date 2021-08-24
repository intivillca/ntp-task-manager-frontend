import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const FunctionButton = (props , variant = "dark" ) => {
  return (
      <Button variant={props.variant} size="lg" as={Link} to={props.link}>
        <FontAwesomeIcon icon={props.icon} />
        <div className="button-text">
          {props.text}
        </div>
      </Button>
  )
}
