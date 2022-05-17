import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { createOrder, takeDataCountry } from "../../actions";
import ModalPay from "../ModalPay";
import ModalAnnouce from "../ModalAnnouce";
import hiddenScroll from "./hiddenScroll";

const Cart = function (props) {
  const [reRender, setReRender] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalAnnouce, setModalAnnounce] = useState(false);

  const cart = [];

  const renderCart = function () {
    const productIds = JSON.parse(localStorage.getItem("productId"));
    const productNames = JSON.parse(localStorage.getItem("productName"));
    const productPrices = JSON.parse(localStorage.getItem("productPrice"));
    const productImgs = JSON.parse(localStorage.getItem("productImg"));
    const quantities = JSON.parse(localStorage.getItem("quantity"));
    const totalPrices = JSON.parse(localStorage.getItem("totalPrice"));

    productIds.forEach((item, i) => {
      cart.push({
        productId: item,
        productName: productNames[i],
        productPrice: productPrices[i],
        productImg: productImgs[i],
        quantity: quantities[i],
        totalPrice: totalPrices[i],
      });
    });

    props.takeDataCountry();

    const renderHTML = cart.map((item, key) => {
      const {
        productId,
        productName,
        productPrice,
        productImg,
        quantity,
        totalPrice,
      } = item;

      return (
        <div className="cart-infor" key={key}>
          <img className="cart-img" src={productImg} alt={productName} />
          <div className="flex--column">
            <h3 className="detail-name cart-name">{productName}</h3>
            <div className="detail-list cart-list grid--2">
              <p className="detail-infor">Số lượng</p>
              <p>{quantity}</p>
              <p className="detail-infor">Đơn giá</p>
              <p>
                {productPrice.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              <p className="detail-infor">Thành tiền</p>
              <p className="total-price">
                {totalPrice.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
            </div>
          </div>
        </div>
      );
    });

    return renderHTML;
  };

  return (
    <div>
      <div className="navigate-bar">
        <div className="container navigate-bar-box">
          <span className="navigate-item">
            <Link to="/" className="navigate-item-link">
              Trang chủ
            </Link>
          </span>
          <span className="navigate-item">Giỏ hàng</span>
        </div>
      </div>
      <div className="gray-background cart-container">
        <div className="related-products relative">
          <span className="sub-heading cart-heading">Giỏ hàng</span>
          {JSON.parse(localStorage.getItem("productId")) ? renderCart() : null}
          {JSON.parse(localStorage.getItem("productId")) ? (
            <button
              className="btn garbage-btn"
              onClick={() => {
                localStorage.clear();
                if (reRender) {
                  setTimeout(function () {
                    setReRender(false);
                  }, 1000);
                } else
                  setTimeout(function () {
                    setReRender(true);
                  }, 1000);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="garbage-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          ) : null}
        </div>
        <div className="payment">
          <p className="payment-heading">Tạm tính:</p>
          <p className="payment-amount">
            {cart
              .reduce((sum, item) => {
                return sum + item.totalPrice;
              }, 0)
              .toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
          </p>
          <button
            className="btn purchase-btn payment-btn"
            onClick={() => {
              if (!localStorage.getItem("productId")) return;

              setModal(true);
              document.querySelector(".nav-btn").style.zIndex = "0";
              if (!document.querySelector(".header.sticky")) {
                document
                  .querySelector(".header")
                  .scrollIntoView({ behavior: "smooth", block: "start" });
              } else {
                document.querySelector(".main-container").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
              if (window.innerWidth > 800) {
                hiddenScroll();
              }
            }}
          >
            Tiến hành thanh toán
          </button>
        </div>
        {modal ? (
          <ModalPay
            setModalAnnounce={setModalAnnounce}
            setModal={setModal}
            cart={cart}
          />
        ) : null}
        {modalAnnouce ? (
          <ModalAnnouce title="Đặt hàng thành công. Chúng tôi sẽ gửi chi tiết đơn hàng qua Email cho bạn!" />
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    googleId: state.googleAuth.userId,
    fbId: state.fbAuth.userId,
  };
};

export default connect(mapStateToProps, { createOrder, takeDataCountry })(Cart);
