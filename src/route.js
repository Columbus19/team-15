import React from 'react';
import apprisen from './apprisen.png';
import './App.css';
import { Button, Navbar, Nav, Form, FormControl, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const navbar = {backgroundColor: '#84BC57'};
const center = {alignItems: 'center'};

export default function BasicExample() {
    return (
      <Router>
        <Navbar variant="light" sticky="top" style={navbar}>
        <Nav className="mr-auto" style={center}>
            <Link to="/"><img src={apprisen} className="App-logo" alt="logo" /></Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
            <Nav.Link href="/forum">Forum</Nav.Link>
        </Nav>
        </Navbar>
        <div>
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  // You can think of these components as "pages"
  // in your app.
  
  function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Resources() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }
  