import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  render() {
    let { listShoe, handleAddToCart } = this.props;

    return (
      <div className="row col-5">
        {listShoe.map((item, index) => {
          return (
            <ItemShoe
              key={index}
              item={item}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </div>
    );
  }
}
