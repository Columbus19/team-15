import React from 'react';
import './ProgressBar.scss';
import "antd/dist/antd.css";
import { Popover, Button } from 'antd';
import { Form, Input, Radio } from 'antd';

const text = <span>Enter Payment: </span>;
const positionBut = {position:'relative', right:'50px'}

const buttonWidth = 100;

class ProgressBar extends React.Component {
    constructor(props) {
      super(props);
      this.clickHandler = this.clickHandler.bind(this);
      this.state = {
        progress: 25
      };
    }
    
    clickHandler() {
      this.setState({
        progress: this.state.progress < 100 ? this.state.progress + 5 : 100
      });
    }
    
    render() {
      var progress = {
        width: this.state.progress + "%"
      }
      
      return (
        <div id="app">
          <div className="shell">
            <div className="bar" style={ progress }><span>{ this.state.progress + "%" }</span></div>
          </div>

            <div className="demo">
            <div
              style={{ marginLeft: buttonWidth, clear: "both", whiteSpace: "nowrap" }}
            >
              <Popover
                placement="bottom"
                title={text}
                content={
                  <div>
                  <Form.Item label="Amount" >
                    <Input placeholder="Enter amount" />
                  </Form.Item>
                  <Form.Item label="Date" >
                    <Input placeholder="Enter date" />
                  </Form.Item>
                  <Form.Item label="Recommended" >
                  <span className="ant-form-text">$20</span>
                  </Form.Item>
                  <Form.Item >
                  <button onClick={ this.clickHandler.bind(this) }>Pay</button>
                  </Form.Item>
              </div>
                }
                trigger="click"
              >
                <Button style={positionBut}>Pay</Button>
              </Popover>
            </div>
          </div>

        </div>
      )
    }
  }

  export default ProgressBar;
  
  // const mountNode = document.getElementById("app");
  // ReactDom.render(<ProgressBar />, mountNode);