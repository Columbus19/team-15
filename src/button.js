import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./ProgressBar.scss";
import { Popover, Button } from "antd";

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 70;

ReactDOM.render(
  <div className="demo">
    <div
      style={{ marginLeft: buttonWidth, clear: "both", whiteSpace: "nowrap" }}
    >
      <Popover
        placement="bottom"
        title={text}
        content={content}
        trigger="click"
      >
        <Button>Bottom</Button>
      </Popover>
    </div>
  </div>,
  document.getElementById("container")
);
