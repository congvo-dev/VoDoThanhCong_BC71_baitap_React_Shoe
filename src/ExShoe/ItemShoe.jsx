import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { item, handleAddToCart } = this.props;
    return (
      <div className="col-3">
        <img className="w-100" src={item.image} alt="" />
        <h5>{item.name}</h5>
        <button
          onClick={() => {
            handleAddToCart(item);
          }}
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
    );
  }
}
