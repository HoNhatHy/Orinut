import React from "react";
import { Link } from "react-router-dom";

import MilkItem from "./MilkItem";
import { highlight } from "../../productStore";
import heroImg from "../../images/hero-img.jpg";

class Main extends React.Component {
  render() {
    return (
      <main>
        <section className="section-hero">
          <div className="hero grid--2">
            <div className="hero-text-box">
              <h1 className="heading-primary">
                Orinut &mdash; Sữa hạt nguyên bản
              </h1>
              <p className="hero-description">
                Orinut là hệ thống chuyên phân phối những sản phẩm sữa hạt chất
                lượng có nguồn gốc cả trong lẫn ngoài nước. Đảm bảo cho bạn có
                được nguồn sữa đầy đủ dinh dưỡng với giá cả hợp lý.
              </p>
              <div className="hero-btns">
                <Link
                  to="/san-pham"
                  onClick={() => {
                    document
                      .querySelector(".main-container")
                      .scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="btn hero-btn-product"
                >
                  Xem sản phẩm
                </Link>
                <Link
                  to="/"
                  onClick={() => {
                    document
                      .querySelector(".section-products")
                      .scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="btn hero-btn-learnmore"
                >
                  Tìm hiểu thêm &darr;
                </Link>
              </div>
            </div>
            <div className="hero-img-box">
              <picture>
                <img src={heroImg} alt="Sữa Orinut" className="hero-img" />
              </picture>
            </div>
          </div>
        </section>
        <section className="section-products border-bottom">
          <div className="container">
            <span className="sub-heading">Sản phẩm</span>
            <h2 className="heading-secondary">
              Sản phẩm từ các thương hiệu nổi tiếng
            </h2>
          </div>
          <div className="container grid grid--2 grid--center">
            <div className="brand-box">
              <p className="brand-number">01</p>
              <h3 className="heading-tertiary">Australia’s Own Organic</h3>
              <p className="brand-description">
                Australia’s Own thuộc tập đoàn Freedom Food Group có trụ sở tại
                Úc. Với sự phong phú và đa dạng của các dòng sản phẩm,
                Australia’s Own cũng sử dụng những nguồn nguyên liệu khác nhau.
                Trong đó tất cả đều được kiểm soát chặt chẽ từ khâu chọn lựa,
                nuôi trồng, thu hoạch cho đến khi tạo ra sản phẩm cuối cùng.
              </p>
            </div>
            <div className="brand-img-box">
              <img
                className="brand-img"
                alt="Australia’s Own Organic"
                src="https://cf.shopee.vn/file/e5673c2b3735c006e8ed411528fd57f8"
              />
            </div>
            <div className="brand-img-box">
              <img
                className="brand-img"
                alt="Australia’s Own Organic"
                src="https://media.bibomart.com.vn/resize.1170x-/media/catalog/product/s/u/sua-hat-vegemil-cho-ba-bau-va-cho-con-bu-190ml.jpg"
              />
            </div>
            <div className="brand-box">
              <p className="brand-number">02</p>
              <h3 className="heading-tertiary">Vegemil</h3>
              <p className="brand-description">
                Được thành lập vào năm 1973 và là công ty sữa đậu nành đã dẫn
                đầu ngành công nghiệp sữa đậu nành của Hàn Quốc và thế giới
                trong 40 năm qua.Với bảng thành phần hoàn toàn bằng nguyên liệu
                tự nhiên, sữa hạt Vegemil hoàn toàn lành tính và an toàn cho cả
                người lớn, trẻ em và người lớn tuổi. Là giải pháp cứu tinh cho
                trẻ em Hàn Quốc lúc bấy giờ.
              </p>
            </div>
            <div className="brand-box">
              <p className="brand-number">03</p>
              <h3 className="heading-tertiary">Elmhurst 1925</h3>
              <p className="brand-description">
                Elmhurst 1925 được ông Henry Schwartz sáng lập vào năm 1925 tại
                thành phố New York, Elmhurst, Mỹ. Với phương pháp đặc biệt
                HYDRORELEASE, phương pháp chỉ sử dụng nước để tách các thành
                phần dinh dưỡng của hạt hoặc ngũ cốc.Giữ nguyên vẹn những thành
                phần của hạt để bạn thưởng thức cả về mặt dinh dưỡng và hương vị
                trong thành phẩm. Tiếp theo, chúng tôi cho các chất dinh dưỡng
                trở lại với nhau như một nhũ tương đặc, kem, đầy đủ hương vị.
              </p>
            </div>
            <div className="brand-img-box">
              <img
                className="brand-img"
                alt="Australia’s Own Organic"
                src="https://ph-live-05.slatic.net/p/daec434a443a36cc2a9311a61c68c919.jpg_2200x2200q80.jpg_.webp"
              />
            </div>
            <div className="brand-img-box">
              <img
                className="brand-img"
                alt="Australia’s Own Organic"
                src="https://cf.shopee.vn/file/d97ec42c994c911810d40e4b509073ff"
              />
            </div>
            <div className="brand-box">
              <p className="brand-number">04</p>
              <h3 className="heading-tertiary">137 Degrees</h3>
              <p className="brand-description">
                Sữa hạt 137 Degrees được ra đời mang đến giải pháp đột phá cho
                những khách hàng dị ứng với thành phần protein có trong sữa bò,
                dê,... Với công nghệ chế biến đặc biệt, làm nóng ở nhiệt độ 137
                độ C trong thời gian 2 giây đã biến các loại hạt bổ dưỡng thành
                những thức uống thơm ngon mà vẫn giữ được tối đa lượng chất dinh
                dưỡng có trong hạt nguyên chất.
              </p>
            </div>
          </div>
          <div className="container highlight flex--column">
            <span className="sub-heading">Sản phẩm nổi bật</span>
            <div className="grid--4">
              {highlight.map((item) => {
                return (
                  <MilkItem
                    key={item.productId}
                    productName={item.productName}
                    productImg={item.productImg}
                    productPrice={item.productPrice}
                    productUrl={item.productUrl}
                  />
                );
              })}
            </div>
          </div>
          <div className="container all-products">
            <Link
              to="/san-pham"
              onClick={() =>
                document.querySelector(".main-container").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="products-link"
            >
              Xem tất cả sản phẩm
            </Link>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
