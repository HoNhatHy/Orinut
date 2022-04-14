import React from "react";

import { Link } from "react-router-dom";

const MilkItem = function ({
  productName,
  productImg,
  productPrice,
  productUrl,
}) {
  return (
    <div className="milk-item flex--column">
      <img className="milk-item-img" alt={productName} src={productImg} />
      <p className="milk-item-name">{productName}</p>
      <p className="milk-item-price">
        {productPrice.toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        })}
      </p>
      <Link
        to={`/san-pham/${productUrl}`}
        onClick={() => {
          document.querySelector(".main-container").scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
        className="milk-item-btn btn"
      >
        Đặt hàng ngay
      </Link>
    </div>
  );
};

export default MilkItem;
