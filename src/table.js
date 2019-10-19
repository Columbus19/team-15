
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Divider, Tag } from 'antd';

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Type',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'shopping') {
            color = 'volcano';
          }
          else if (tag == 'food') {
            color = 'blue';
          }
          else if (tag == 'rent') {
            color = 'green';
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
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    amount: 32.22,
    date: '2019-05-02',
    tags: ['shopping'],
  },
  {
    key: '1',
    name: 'John Brown',
    amount: 420.50,
    date: '2019-05-02',
    tags: ['rent'],
  },
  {
    key: '1',
    name: 'John Brown',
    amount: 53.20,
    date: '2019-05-02',
    tags: ['food'],
  }
];


export default Table;