import React from 'react';
import { Button, Navbar, Nav, Form, FormControl, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resources.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import YouTube from 'react-youtube';

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
  
 
function Resources() {
    return (
    <div className="About">
        <header className="App-header">
            <Container>
            <div className="about">
                Testimonies
            </div>
            </Container>
            <Container className="past">
                <Row>
                    <Col>
                    Add in testimony
                    </Col>
                    <Col>
                    2nd testimony
                    </Col>
                    <Col>
                    3rd testimony
                    </Col>
                </Row>
            </Container>
            <Container>
              <div className="stuff">
            
              </div>
            </Container>
    <br />
        </header>
    </div>
  );
}

export default Resources;