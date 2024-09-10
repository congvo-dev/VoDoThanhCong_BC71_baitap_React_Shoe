import React, { Component } from "react";
import ListShoe from "./ListShoe";
import Cart from "./Cart";
import { dataShoe } from "./dataShoe";

export default class ExShoe extends Component {
  state = {
    cart: [],
    listShoe: dataShoe,
  };
  handleAddToCart = (shoe) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => {
      return item.id === shoe.id;
    });
    if (index !== -1) {
      cloneCart[index].total++;
    } else {
      cloneCart.push({ ...shoe, total: 1 });
    }
    this.setState({
      cart: cloneCart,
    });
  };
  handleDelete = (idShoe) => {
    console.log(idShoe);
    let { cart } = this.state;
    let newCart = cart.filter((item) => {
      return item.id !== idShoe;
    });
    this.setState({
      cart: newCart,
    });
  };
  handleChangeTotal = (idShoe, option) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => item.id === idShoe);

    cloneCart[index].total = cloneCart[index].total + option;
    if (cloneCart[index].total < 1) {
      let newCart = cloneCart.filter((item) => item.id !== idShoe);
      this.setState({
        cart: newCart,
      });
    } else {
      this.setState({
        cart: cloneCart,
      });
    }
  };
  render() {
    return (
      <div className="row align-items-start">
        <ListShoe
          listShoe={this.state.listShoe}
          handleAddToCart={this.handleAddToCart}
        />
        <Cart
          cart={this.state.cart}
          handleDelete={this.handleDelete}
          handleChangeTotal={this.handleChangeTotal}
        />
      </div>
    );
  }
}
