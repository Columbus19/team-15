import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Statistic, Card, Row, Col, Icon,Progress } from 'antd';
import UserComments from './UserComments'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const marginIcon = {margin:'5px'}
const marginProgress = {margin:'20px'}
const rowMargin= {margin:'20px'}
const marginLeft = {margin:'20px'}
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
                   style={marginProgress}/>
                   <Progress
                     strokeColor={{
                       from: '#108ee9',
                       to: '#87d068',
                    }}
                     percent={54.9}
                     style={marginProgress}
                     status="active"
                   />
                   <Progress
                     type="circle"
                     strokeColor={{
                       '0%': '#108ee9',
                       '100%': '#87d068',
                     }}
                     percent={50}
                     style={marginProgress}
                   />
                   <Progress
                     type="circle"
                     strokeColor={{
                       '0%': '#108ee9',
                       '100%': '#87d068',
                     }}
                     percent={14}
                     style={marginProgress}
                   />
              </div>
               <div class="col-sm" style={marginLeft}>
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


             <div class="row" style={rowMargin}>

               <div class="col-sm">
               <Row gutter={16}>
                 <Col span={12}>
                   <Statistic title="Feedback" value={11128} prefix={<Icon type="like" />} />
                 </Col>
                 <Col span={12}>
                    <div className="icons-list">
                    <IconFont type="icon-tuichu" style={marginIcon} />
                    <IconFont type="icon-facebook" style={marginIcon}/>
                    <IconFont type="icon-twitter" style={marginIcon}/>
                    </div>
                 </Col>
               </Row>
               </div>

               <div class="col">
                <UserComments />
               </div>

             </div>
           </div>);
    }
}

export default Stats;
