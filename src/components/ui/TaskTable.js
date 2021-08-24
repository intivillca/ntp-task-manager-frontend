import React from 'react'
import { useContext, useEffect } from 'react';
import { Table, Spinner, Container, Button } from 'react-bootstrap'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import ApiContext from '../../context/api/apiContext';
import languageContext from '../../context/language/languageContext';
import exportFromJSON from 'export-from-json'

export const TaskTable = () => {
  const context = useContext(ApiContext)
  const langContext = useContext(languageContext);
  const translation = langContext.langPack;
  const { getTasks, searchString, loading, tasks } = context;

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

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
                <td><Button
                  onClick={
                    () => exportFromJSON({
                      data: item,
                      fileName: item.id + ' ' + item.taskname,
                      exportType: exportFromJSON.types.xml
                    })
                  }
                  variant="secondary"
                  size="sm"
                > {translation.ExportXML} </Button>

                  <Button
                    size="sm"
                    href={`
                    data:text/json;
                    charset=utf-8,
                    ${encodeURIComponent(JSON.stringify(item)
                    )}`}
                    download={item.id + ' ' + item.taskname + '.json'}
                    variant="secondary"
                  > {translation.ExportJSON} </Button>
                  <Link to={`/update/${item.id}`}>
                    <Button
                      variant="secondary"
                      size="sm">{translation.Edit}</Button>
                  </Link>

                </td>
              </tr>)
              )
            }
          </tbody>
        </Table>
      </Container>
    )
  }
}



