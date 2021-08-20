import React from 'react'
import { useContext} from 'react';
import { Table, Spinner, Container, Button } from 'react-bootstrap'
import ApiContext from '../../context/api/apiContext';


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



