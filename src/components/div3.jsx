import React, { Component } from "react";
import Cart from "./cart";
class Div3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.clearItem = this.clearItem.bind(this);
  }
  addItem(item) {
    this.state.items.push(item);
    this.setState({
      items: this.state.items
    });
  }
  clearItem() {
    this.setState({
      items: []
    });
  }
  render() {
    return (
      <div>
        <a href="#" id="a1">
          Back To Women
        </a>
        <h1>
          <b>THE ATELIER TAILORED COAT</b>
        </h1>
        <br />
        <br />
        <h3>499.00</h3>
        <span>
          <b>Availability:</b>{" "}
        </span>
        <span>In Stock</span>
        <br />
        <span>
          <b>Product Code:</b>{" "}
        </span>
        <span>#4567</span>
        <br />
        <span>
          <b>Tags:</b>{" "}
        </span>
        <span>Fashion, hood, Classic</span>
        <br />
        <p>
          Sleek, polished and boasting an impeccably modern fit, all in pure
          wool by Vitale Barberis Canonico.
        </p>
        <ul>
          <li>Pink top for tone-on-tone look</li>
          <li>Regular fit</li>
          <li>100% cotton</li>
          <li>Free shipping with 4 days delivery</li>
        </ul>
        <span id="s1">COLOR</span>
        <span id="s2">SIZE</span> <span id="s3">QUANTITY</span>
      </div>
    );
  }
}

export default Div3;
