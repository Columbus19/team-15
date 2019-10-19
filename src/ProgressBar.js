import React from 'react';
import './ProgressBar.scss';



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
          <button onClick={ this.clickHandler.bind(this) }>Make Payment</button>
        </div>
      )
    }
  }

  export default ProgressBar;
  
  // const mountNode = document.getElementById("app");
  // ReactDom.render(<ProgressBar />, mountNode);