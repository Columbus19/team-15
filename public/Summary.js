import React from 'react';
import './Summary.scss';



class Summary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        progress: 25
      };
    }
    
    render() {
      var progress = {
        width: this.state.progress + "%"
      }
      
      return (
        <div id="summary">
          <div className="column">
                <ul>
                    <li>
                        1
                    </li>
                    <li>
                        2
                    </li>
                </ul>
          </div>
          <div className="column">
              Column 2
          </div>
          <div className="column">
              Column 3
          </div>
        </div>
      )
    }
  }

  export default Summary;
  
  // const mountNode = document.getElementById("app");
  // ReactDom.render(<ProgressBar />, mountNode);