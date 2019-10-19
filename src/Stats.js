import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Statistic, Card, Row, Col, Icon,Progress } from 'antd';

class Stats extends React.Component{

    render(){
        return (
           <div class="container">
             <div class="row">

               <div class="col-sm">
                   <Row gutter={16}>
                   <Col span={12}>
                     <Statistic title="Active Users" value={112893} />
                   </Col>
                   <Col span={12}>
                     <Statistic title="Account Balance" value={1893} precision={2} />
                   </Col>
                 </Row>
               </div>

               <div class="col-6">
               <Progress
                     strokeColor={{
                       '0%': '#108ee9',
                       '100%': '#87d068',
                     }}
                     percent={29.6}
                   />
                   <Progress
                     strokeColor={{
                       from: '#108ee9',
                       to: '#87d068',
                     }}
                     percent={54.9}
                     status="active"
                   />
                   <Progress
                     type="circle"
                     strokeColor={{
                       '0%': '#108ee9',
                       '100%': '#87d068',
                     }}
                     percent={50}
                   />
                   <Progress
                     type="circle"
                     strokeColor={{
                       '0%': '#108ee9',
                       '100%': '#87d068',
                     }}
                     percent={14}
                   />
              </div>
               <div class="col-sm">
                 <Row gutter={16}>
                 <Col span={12}>
                   <Statistic title="Next Payment Date" value={"October 25, 2019"} />
                 </Col>
                 <Col span={12}>
                   <Statistic title="Next Payment Amount" value={235} precision={2} />
                 </Col>
               </Row>
               </div>

             </div>


             <div class="row">

               <div class="col-sm">
               <Row gutter={16}>
                 <Col span={12}>
                   <Statistic title="Feedback" value={1128} prefix={<Icon type="like" />} />
                 </Col>
                 <Col span={12}>
                   <Statistic title="Unmerged" value={93} suffix="/ 100" />
                 </Col>
               </Row>
               </div>

               <div class="col-sm">
                TMP
              </div>

               <div class="col-sm">
                TMP
               </div>

             </div>
           </div>);
    }
}

export default Stats;
