import React, { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "Select color",
      size: "Select size",
      qty: 0
    };
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleChangeQty = this.handleChangeQty.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  handleChangeColor(event) {
    this.setState({ color: event.target.value });
  }
  handleChangeSize(event) {
    this.setState({
      size: event.target.value
    });
  }
  handleChangeQty(event) {
    this.setState({
      qty: event.target.value
    });
  }
  handleSubmit() {
    if (
      this.state.color === "Select color" ||
      this.state.size === "Select size" ||
      this.state.qty === 0
    )
      alert("Cannot add to cart!!Please select all the options");
    else {
      var item = {
        color: this.state.color,
        size: this.state.size,
        qty: this.state.qty
      };
      this.props.addItem(item);
      console.log("hi" + this.props.it.length);
      // alert("Adding to cart ");
    }
    //
  }
  handleClear() {
    this.setState({
      color: "Select color",
      size: "Select size",
      qty: 0
    });
    this.props.clearItem();
    alert("removing all the items from cart");
  }

  render() {
    return (
      <div>
        <form>
          <label id="l1">
            <select value={this.state.color} onChange={this.handleChangeColor}>
              <option value="Select color">Select Color</option>
              <option value="red">PINK</option>
              <option value="blue">BLUE</option>
              <option value="black">BLACK</option>
            </select>
          </label>
          <label id="l2">
            <select
              id="s1"
              value={this.state.size}
              onChange={this.handleChangeSize}
            >
              <option value="Select size">Select size</option>
              <option value="L">L</option>
              <option value="M">S</option>
              <option value="S">M</option>
            </select>
          </label>
          <label id="l3">
            <select value={this.state.qty} onChange={this.handleChangeQty}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
          <br />
          <br />
          <button id="b1" onClick={this.handleClear}>
            Clear Selection
          </button>
          <br />{" "}
          <button id="b2" onClick={this.handleSubmit}>
            Add to Cart
          </button>
        </form>
      </div>
    );
  }
}

export default Cart;
