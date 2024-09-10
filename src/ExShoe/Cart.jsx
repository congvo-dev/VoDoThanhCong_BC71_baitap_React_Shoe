import React, { Component } from "react";

export default class Cart extends Component {
  rendertable = () => {
    let { cart, handleDelete, handleChangeTotal } = this.props;
    return cart.map((item, index) => {
      let total = item.price * item.total;
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>
            <img width={100} src={item.image} alt="" />
          </td>
          <td>{total}</td>
          <td>
            <button
              onClick={() => {
                handleChangeTotal(item.id, -1);
              }}
              className="btn btn-success"
            >
              -
            </button>
            {item.total}
            <button
              onClick={() => {
                handleChangeTotal(item.id, 1);
              }}
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                return handleDelete(item.id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="col-7">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.rendertable()}</tbody>
        </table>
      </div>
    );
  }
}
