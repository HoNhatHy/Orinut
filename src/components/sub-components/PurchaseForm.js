import React from "react";
import { connect } from "react-redux";

import history from "../../history";

class PurchaseForm extends React.Component {
  render() {
    return (
      <form
        className="purchase-form"
        onSubmit={(e) => {
          e.preventDefault();

          const { productId, productName, productPrice, quantity, productImg } =
            this.props;

          if (JSON.parse(localStorage.getItem("productId"))) {
            localStorage.setItem(
              "productId",
              JSON.stringify([
                ...JSON.parse(localStorage.getItem("productId")),
                productId,
              ])
            );
            localStorage.setItem(
              "productName",
              JSON.stringify([
                ...JSON.parse(localStorage.getItem("productName")),
                productName,
              ])
            );
            localStorage.setItem(
              "productPrice",
              JSON.stringify([
                ...JSON.parse(localStorage.getItem("productPrice")),
                productPrice,
              ])
            );
            localStorage.setItem(
              "totalPrice",
              JSON.stringify([
                ...JSON.parse(localStorage.getItem("totalPrice")),
                quantity * productPrice,
              ])
            );
            localStorage.setItem(
              "productImg",
              JSON.stringify([
                ...JSON.parse(localStorage.getItem("productImg")),
                productImg,
              ])
            );
            localStorage.setItem(
              "quantity",
              JSON.stringify([
                ...JSON.parse(localStorage.getItem("quantity")),
                quantity,
              ])
            );

            setTimeout(function () {
              history.push("/gio-hang");
            }, 2000);
          } else {
            localStorage.setItem("productId", JSON.stringify([productId]));
            localStorage.setItem("productName", JSON.stringify([productName]));
            localStorage.setItem(
              "productPrice",
              JSON.stringify([productPrice])
            );
            localStorage.setItem(
              "totalPrice",
              JSON.stringify([quantity * productPrice])
            );
            localStorage.setItem("productImg", JSON.stringify([productImg]));
            localStorage.setItem("quantity", JSON.stringify([quantity]));

            setTimeout(function () {
              history.push("/gio-hang");
            }, 2000);
          }

          this.props.modalChange();
        }}
      >
        <div className="purchase-container flex--row">
          <input
            onChange={(e) => {
              this.props.quantityChange(e.target.value);
            }}
            value={this.props.quantity}
            className="purchase-input"
            type="number"
            step="1"
            min="1"
          />
          <button className="btn purchase-btn">Thêm vào giỏ hàng</button>
        </div>
      </form>
    );
  }
}

export default PurchaseForm;
