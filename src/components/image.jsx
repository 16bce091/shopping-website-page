import React, { Component } from "react";
import img1 from "../img1.jpg";
import img2 from "../img2.jpg";
import img3 from "../img3.jpg";
import img4 from "../img4.jpg";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      srcc: img1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(param) {
    this.setState({
      srcc: param
    });
  }
  render() {
    return (
      <div id="i3">
        <div>
          <img src={this.state.srcc} width="40%" height="10%" />
        </div>
        <div>
          <span id="ii1">
            <img
              src={img1}
              onClick={e => this.handleClick(img1)}
              width="20%"
              height="5%"
            />
          </span>
          <span id="ii2">
            <img
              src={img2}
              onClick={e => this.handleClick(img2)}
              width="20%"
              height="5%"
            />
          </span>
          <span>
            <img
              src={img3}
              onClick={e => this.handleClick(img3)}
              width="20%"
              height="5%"
            />
          </span>
          <span id="ss4" background="red">
            <img
              src={img4}
              onClick={e => this.handleClick(img4)}
              width="20%"
              height="5%"
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Image;
