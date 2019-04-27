import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div id="nav">
        <ul>
          <li id="h">
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">MEN</a>
          </li>
          <li>
            <a href="#">WOMEN</a>
          </li>
          <li>
            <a href="#">LOOKBOOK</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
        </ul>
        <button id="b4" onClick={this.openModal}>
          Cart
        </button>

        {this.state.visible && (
          <div className="modal">
            {this.props.count.length > 0 ? (
              <h1>
                No of items in the cart{"(" + this.props.count.length + ")"}
              </h1>
            ) : (
              <h1 align="center">Cart is empty</h1>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;
