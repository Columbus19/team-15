import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 25
    };
  }
  
  clickHandler() {
    this.setState({
      progress: this.state.progress < 100 ? this.state.progress + 5 : 100
    });
  }
  
  ReactDOM.render() {
    var progress = {
      width: this.state.progress + "%"
    }
    
    return (
      <div>
        <div className="shell">
          <div className="bar" style={ progress }><span>{ this.state.progress + "%" }</span></div>
        </div>
        <button onClick={ this.clickHandler.bind(this) }>+</button>
      </div>
    )
  }
}

const mountNode = document.getElementById("app");
React.render(<ProgressBar />, mountNode);