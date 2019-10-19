import React from 'react';
import apprisen from './apprisen.png';
import './App.css';
import { Button, Navbar, Nav, Form, FormControl, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from './ProgressBar';
import Summary from './Summary';


const navbar = {backgroundColor: '#84BC57'};
const center = {alignItems: 'center'};

class App extends React.Component {
  render () {
    return (
    <div className="App">
      <Navbar variant="light" sticky="top" style={navbar}>
      <Navbar.Brand href="#home">Apprisen</Navbar.Brand>
      <Nav className="mr-auto" style={center}>
        <Nav.Link href="#home"><img src={apprisen} className="App-logo" alt="logo" /></Nav.Link>
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
          <div className="welcome">
            Welcome Joe Schmoe!
          </div>
        </Container>
  <br />
  <ProgressBar />
  <h1>SUMMARY</h1>
  <Summary />
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
  };
}

ReactDOM.render(
  <App />, 
  document.getElementById("root")
  );
// export default app;
