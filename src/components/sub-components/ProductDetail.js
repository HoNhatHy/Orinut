import React, { useState } from "react";
import DOMPurify from "dompurify";
import { connect } from "react-redux";

import MilkItem from "./MilkItem";
import PurchaseForm from "./PurchaseForm";
import { australia, vegemil, elmhurst, degrees137 } from "../../productStore";
import { createOrder } from "../../actions";
import ModalAnnouce from "../ModalAnnouce";

const ProductDetail = function (props) {
  const [quantity, setQuantity] = useState(1);
  const [modalClicked, setModalClicked] = useState(false);

  const quantityChange = function (number) {
    setQuantity(number);
  };

  const modalChange = function () {
    setModalClicked(true);
  };

  const products = [...australia, ...vegemil, ...elmhurst, ...degrees137];

  const path = props.match.path.replace("/san-pham/", "");

  const [product] = products.filter((prd) => prd.productUrl === path);

  const relatedProducts = function () {
    if (product.productId.includes("AOO")) return australia;
    if (product.productId.includes("VGM")) return vegemil;
    if (product.productId.includes("EMH")) return elmhurst;
    if (product.productId.includes("DGR")) return degrees137;
  };

  return (
    <div className="gray-background">
      <div className="container product-detail">
        <div className="detail-container">
          <img
            className="detail-img"
            alt={product.productName}
            src={product.productImg}
          />
          <div className="detail-list">
            <h3 className="detail-name">{product.productName}</h3>
            <p className="detail-price">
              {product.productPrice.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </p>
            <PurchaseForm
              productName={product.productName}
              productPrice={product.productPrice}
              productId={product.productId}
              productImg={product.productImg}
              modalChange={modalChange}
              quantity={quantity}
              quantityChange={quantityChange}
            />
            <div className="detail-infors">
              <p className="detail-infor">Xuất sứ</p>
              <p>{product.productOrigin}</p>
              <p className="detail-infor">Thành phần</p>
              <p>{product.productIng}</p>
              <p className="detail-infor">Dinh dưỡng</p>
              <p>{product.productNutrient}</p>
              <p className="detail-infor">Hạn sử dụng</p>
              <p>{product.productExpire}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container other-infor-container">
        <div className="other-infor">
          <span className="other-infor-heading">Thông tin khác</span>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(product.productInfor),
            }}
          ></div>
        </div>
      </div>
      <div className="container related-products">
        <span className="sub-heading">Sản phẩm liên quan</span>
        <div className="milk-items grid--3">
          {relatedProducts()
            .filter((item) => item.productId !== product.productId)
            .map((item) => (
              <MilkItem
                productImg={item.productImg}
                productName={item.productName}
                productPrice={item.productPrice}
                productId={item.productId}
                productUrl={item.productUrl}
                key={item.productId}
              />
            ))}
        </div>
      </div>
      {modalClicked ? (
        <ModalAnnouce title="Đã thêm sản phẩm vào giỏ hàng" />
      ) : null}
    </div>
  );
};

export default connect(null, {
  createOrder,
})(ProductDetail);
