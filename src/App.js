import React from 'react';
import ReactDOM from 'react-dom';
import apprisen from './apprisen.png';
import './App.css';
import { Button, Navbar, Nav, Form, FormControl, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from './ProgressBar';
import Summary from './Summary';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Divider, Tag } from 'antd';
const navbar = {backgroundColor: '#84BC57'};
const center = {alignItems: 'center'};

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    width: window.innerWidth || document.body.clientWidth,
    height: 7
  },
  {
    title: 'Type',
    key: 'tags',
    dataIndex: 'tags',
    width: window.innerWidth || document.body.clientWidth,
    height: 7,
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'clothes') {
            color = 'volcano';
          }
          else if (tag === 'food') {
            color = 'blue';
          }
          else if (tag === 'entertainment') {
            color = 'green';
          }
          else if (tag === 'rent') {
            color = 'purple';
          }
          else if (tag === 'utilities') {
            color = 'sky blue';
          }
          else if (tag === 'health') {
            color = 'yellow';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    width: window.innerWidth || document.body.clientWidth,
    height: 7
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    amount: 32.22,
    date: '2019-05-05',
    tags: ['shopping'],
  },
  {
    key: '1',
    name: 'John Brown',
    amount: 320.00,
    date: '2019-05-05',
    tags: ['rent'],
  },
  {
    key: '1',
    name: 'John Brown',
    amount: 53.20,
    date: '2019-05-04',
    tags: ['food'],
  },
  {
    key: '1',
    name: 'John Brown',
    amount: 67.80,
    date: '2019-05-03',
    tags: ['food'],
  },
  {
    key: '1',
    name: 'John Brown',
    amount: 100,
    date: '2019-05-03',
    tags: ['entertainment'],
  },
  {
    key: '1',
    name: 'John Brown',
    amount: 69.78,
    date: '2019-05-04',
    tags: ['clothes'],
  }
];


function App() {
  return (
    <div className="App">
      <Navbar variant="light" sticky="top" style={navbar}>
      <Nav className="mr-auto" style={center}>
        <Nav.Link href="#home"><img src={apprisen} className="App-logo" alt="logo" /></Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#resources">Resources</Nav.Link>
        <Nav.Link href="#forum">Forum</Nav.Link>
      </Nav>
    </Navbar>
      <header className="App-header">
          <div className="welcome">
            Welcome Joe Schmoe!
          </div>
  <br />
  <ProgressBar />
  <Table columns={columns} dataSource={data} />
  {/* <Summary /> */}
      </header>
    </div>
  );
}



export default App;
