import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { getTokenData, unsetToken } from '../auth/jwt';
import languageContext from '../../context/language/languageContext';
import { ChangeLang } from './ChangeLang';
import { useHistory } from 'react-router-dom';


export const HeaderNav = (props) => {
  const userData = getTokenData();
  const langContext = useContext(languageContext);
  const translation = langContext.langPack;
  const history = useHistory();
 

  return (
    <header className="app-header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">NTP Projekt</Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">{translation.Home}</Nav.Link>
          <NavDropdown title={translation.Tasks} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/add">{translation.AddTask}</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/update">{translation.UpdateTask}</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/delete">{translation.DeleteTask}</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={Link} to="/status">{translation.AddStatus}</Nav.Link>
          <Nav.Link as={Link} to="/category">{translation.AddCategory}</Nav.Link>
          <Nav.Link as={Link} to="/person">{translation.AddPerson}</Nav.Link>
          <ChangeLang />
        </Nav>

        <div style={{
          "position": "absolute",
          "right": "50px"
        }}>
          <Navbar.Text style={{"padding-right" : "10px"}}>{userData.username}</Navbar.Text>
          <Button variant="danger" onClick={() => signOut(history)}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Sign out
          </Button>
        </div>

      </Navbar>
    </header >
  );

  function signOut(history) {
    
    unsetToken();
    history.push("/")
  }
}
