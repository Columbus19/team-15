import React from 'react';
import ReactDOM from 'react-dom';
import apprisen from './apprisen.png';
import './App.css';
import { Button, Navbar, Nav, Form, FormControl, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from './ProgressBar';
import PieChart from './PieChart';
import Summary from './Summary';
import Stats from './Stats';
import './About.css';

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
  
  

function About() {
    return (
    <div className="About">
        <header className="App-header">
            <Container>
            <div className="about">
                Who are we?
            </div>
            </Container>
            <Container>
              <div className="past">
              For over 60 years, Apprisen has been helping people get and stay on track with their money
              </div>
            </Container>
            <Container>
              <div className="stuff">
              Our objective has been to develop solutions for all stages of an individual's financial life. As a result of our experience, we have identified the elements of effective money management. That is what has driven the development of many of the materials we use in our sessions and the topics we teach in our communities.

Our comprehensive services can help people focus on the skills and concepts that work together to help create a strong financial life. We believe that everyone can benefit by working with Apprisen.
              </div>
            </Container>
    <br />
        </header>
    </div>
  );
}

export default About;