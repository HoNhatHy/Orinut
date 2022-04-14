import React from "react";
import { Link } from "react-router-dom";

import { australia, vegemil, elmhurst, degrees137 } from "../../productStore";
import MilkItem from "./MilkItem";

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.milkTypes = Array.from(
      document.querySelectorAll(".milk-type-container")
    );
  }

  scrollToView = (type) => {
    type.scrollIntoView({
      behaviour: "smooth",
    });
  };

  render() {
    return (
      <section className="border-bottom">
        <div className="navigate-bar">
          <div className="container navigate-bar-box">
            <span className="navigate-item">
              <Link to="/" className="navigate-item-link">
                Trang chủ
              </Link>
            </span>
            <span className="navigate-item">Sản phẩm</span>
          </div>
        </div>
        <div className="milks-container">
          <div className="types container">
            <ul className="flex--row">
              <li
                className="type flex--column"
                onClick={() => this.scrollToView(this.milkTypes[0])}
              >
                <img
                  className="type-img"
                  src="https://cf.shopee.vn/file/e5673c2b3735c006e8ed411528fd57f8"
                  alt="Australia’s Own Organic"
                ></img>
                <p>Australia’s Own Organic</p>
              </li>
              <li
                className="type flex--column"
                onClick={() => this.scrollToView(this.milkTypes[1])}
              >
                <img
                  className="type-img"
                  src="https://media.bibomart.com.vn/resize.1170x-/media/catalog/product/s/u/sua-hat-vegemil-cho-ba-bau-va-cho-con-bu-190ml.jpg"
                  alt="Vegemil"
                ></img>
                <p>Vegemil</p>
              </li>
              <li
                className="type flex--column"
                onClick={() => this.scrollToView(this.milkTypes[2])}
              >
                <img
                  className="type-img"
                  src="https://ph-live-05.slatic.net/p/daec434a443a36cc2a9311a61c68c919.jpg_2200x2200q80.jpg_.webp"
                  alt="Elmhurst 1925"
                ></img>
                <p>Elmhurst 1925</p>
              </li>
              <li
                className="type flex--column"
                onClick={() => this.scrollToView(this.milkTypes[3])}
              >
                <img
                  className="type-img"
                  src="https://media.bibomart.com.vn/resize.1170x-/media/catalog/product/h/t/httpsmedia.bibomart.netubbmproduct201801242146sua-hat-hanh-nhan-nguyen-chat-137-degrees-1l-116951_1.jpg"
                  alt="137 Degrees"
                ></img>
                <p>137 Degrees</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="container milk-type-container">
          <div className="milk-heading-container">
            <h3 className="milk-heading sub-heading">
              Australia’s Own Organic
            </h3>
          </div>
          <div className="milk-items grid--4">
            {australia.map((item) => (
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
        <div className="container milk-type-container">
          <div className="milk-heading-container">
            <h3 className="milk-heading sub-heading">Vegemil</h3>
          </div>
          <div className="milk-items grid--4">
            {vegemil.map((item) => (
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
        <div className="container milk-type-container">
          <div className="milk-heading-container">
            <h3 className="milk-heading sub-heading">Elmhurst 1925</h3>
          </div>
          <div className="milk-items grid--4">
            {elmhurst.map((item) => (
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
        <div className="container milk-type-container">
          <div className="milk-heading-container">
            <h3 className="milk-heading sub-heading">137 Degrees</h3>
          </div>
          <div className="milk-items grid--4">
            {degrees137.map((item) => (
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
      </section>
    );
  }
}

export default Products;
