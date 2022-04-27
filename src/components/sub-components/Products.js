import React from "react"
import { Link } from "react-router-dom"

import { australia, vegemil, elmhurst, degrees137 } from "../../productStore"
import MilkItem from "./MilkItem"
import australiaImg from "../../images/australia.png"
import vegemilImg from "../../images/vegemil.jpg"
import elmhurstImg from "../../images/elmhurst.webp"
import degreeImg from "../../images/degree.jpeg"

class Products extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.milkTypes = Array.from(
      document.querySelectorAll(".milk-type-container")
    )
  }

  scrollToView = (type) => {
    type.scrollIntoView({
      behaviour: "smooth",
    })
  }

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
                  src={australiaImg}
                  alt="Australia’s Own Organic"
                ></img>
                <p>Australia’s Own Organic</p>
              </li>
              <li
                className="type flex--column"
                onClick={() => this.scrollToView(this.milkTypes[1])}
              >
                <img className="type-img" src={vegemilImg} alt="Vegemil"></img>
                <p>Vegemil</p>
              </li>
              <li
                className="type flex--column"
                onClick={() => this.scrollToView(this.milkTypes[2])}
              >
                <img
                  className="type-img"
                  src={elmhurstImg}
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
                  src={degreeImg}
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
            {australia.map((item) => {
              // console.log(item.productImg);
              return (
                <MilkItem
                  productImg={item.productImg}
                  productName={item.productName}
                  productPrice={item.productPrice}
                  productId={item.productId}
                  productUrl={item.productUrl}
                  key={item.productId}
                />
              )
            })}
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
    )
  }
}

export default Products
