import React from 'react'
import { useContext, useEffect } from 'react';
import { Table, Spinner, Container, Button } from 'react-bootstrap'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import ApiContext from '../../context/api/apiContext';
import languageContext from '../../context/language/languageContext';

export const SpcTable = (props) => {
  const context = useContext(ApiContext)
  const {loading} = context;


  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only"></span>
      </Spinner>
    )
  }


  else {
    console.log(props.data, props.paramName, props.function)
    return ( 
      <Container>
        <Table striped bordered hover size="sm" variant="dark">
          <thead>
            <tr>
              <th>{props.tableParam}</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            {
              props.data.map(item =>
              (<tr key={item.id}>
                <td>{props.paramName2 ? item[props.paramName] + ' ' + item[props.paramName2] : item[props.paramName]}</td>
                <td></td>
              </tr>)
              )
            }
          </tbody>
        </Table>
      </Container>
    )
  }
}



