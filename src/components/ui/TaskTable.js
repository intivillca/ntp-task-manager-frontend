import React from 'react'
import { useContext, useEffect } from 'react';
import { Table, Spinner, Container, Button } from 'react-bootstrap'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import ApiContext from '../../context/api/apiContext';
import languageContext from '../../context/language/languageContext';

export const TaskTable = () => {
  const context = useContext(ApiContext)
  const langContext = useContext(languageContext);
  const translation = langContext.langPack;
  const {getTasks, loading, tasks,} = context;
  useEffect(() => {
    getTasks();
  }, []);


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
              <th>{translation.TaskName}</th>
              <th>{translation.TaskDesc}</th>
              <th>{translation.StartDate}</th>
              <th>{translation.EndDate}</th>
              <th>{translation.Status}</th>
              <th>{translation.Category}</th>
              <th>{translation.Person}</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map(item =>
              (<tr key={item.id}>
                <td>{item.taskname}</td>
                <td>{item.taskdesc}</td>
                <td>{format(new Date(item.startdate), 'MM/dd/yyyy')}</td>
                <td>{format(new Date(item.enddate), 'MM/dd/yyyy')}</td>
                <td>{item.status}</td>
                <td>{item.category}</td>
                <td>{item.firstname + ' ' + item.lastname}</td>
                <td><Link to={{ pathname: 'update/' + item.id, state: item.id }}><Button variant="secondary">Edit</Button></Link></td>
              </tr>)
              )
            }
          </tbody>
        </Table>
      </Container>
    )
  }
}



