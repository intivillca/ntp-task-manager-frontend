import React from 'react'
import { useContext, useEffect } from 'react';
import { Table, Spinner, Container, Button } from 'react-bootstrap'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import taskContext from '../../context/tasks/taskContext';

export const TaskTable = () => {
  const context = useContext(taskContext)
  const {getTasks, loading, tasks} = context;
  console.log(loading)

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
              <th>Task Name</th>
              <th>Task Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Category</th>
              <th>Person</th>
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



