import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { getTokenData, unsetToken } from '../auth/jwt';

export const HeaderNav = (props) => {
  const userData = getTokenData();
  const isNotLogin = window.location.href !== '/login';

  return (
    <header className="app-header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">NTP Projekt</Navbar.Brand>
        {/*
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/add">Add Task</Nav.Link>
          <Nav.Link as={Link} to="/update">Update Tasks</Nav.Link>
          <Nav.Link as={Link} to="/delete">Remove Task</Nav.Link>
          <Nav.Link as={Link} to="/status">Add Status</Nav.Link>
          <Nav.Link as={Link} to="/category">Add Category</Nav.Link>
        </Nav>
        {isNotLogin && <Nav className="ml-auto">
          {userData && <strong className="text-light mr-2">{userData.username}</strong>}
          <Button variant="danger" onClick={() => signOut(props.history)}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Sign out
          </Button>
        </Nav>} */}
      </Navbar>
    </header >
  );

  function signOut(history) {
    unsetToken();
    history.push('/login');
  }
}
