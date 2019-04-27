import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import "./Nav.css";
import Image from "./components/image";
import Cart from "./components/cart";
import Div3 from "./components/div3";

class App extends Component {
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
    console.log(this.state.item);
  }
  clearItem() {
    this.setState({
      items: []
    });
  }
  render() {
    return (
      <div>
        <h1 align="center">BONFIRE</h1>

        <div>
          <Navbar count={this.state.items} />
        </div>
        <div>
          <Image />
          <div id="i2">
            <Div3 />
            <Cart
              addItem={this.addItem}
              clearItem={this.clearItem}
              it={this.state.items}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
