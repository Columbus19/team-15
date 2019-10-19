import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Nav, Form, FormControl, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProgressBar';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light" sticky="top">
      <Navbar.Brand href="#home">Apprisen</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Logo</Nav.Link>
        <Nav.Link href="#features">Resources</Nav.Link>
        <Nav.Link href="#pricing">Forum</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
      <header className="App-header">
        <Container>
          <div class="welcome">
            Welcome Joe Schmoe!
          </div>
        </Container>
  <br />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the homepage
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
