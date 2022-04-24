import React from "react";
import { Link } from "react-router-dom";

import MilkItem from "./MilkItem";
import { highlight } from "../../productStore";
import heroImg from "../../images/hero-img.jpg";
import australia from "../../images/australia.png";
import vegemil from "../../images/vegemil.jpg";
import elmhurst from "../../images/elmhurst.webp";
import degree from "../../images/degree.jpeg";

class Main extends React.Component {
  render() {
    return (
      <main>
        <section className="section-hero">
          <div className="hero grid--2">
            <div className="hero-text-box">
              <h1 className="heading-primary">
                <span>Orinut &mdash; Sữa hạt nguyên bản</span>
                <p className="hero-description">
                  Orinut là hệ thống chuyên phân phối những sản phẩm sữa hạt
                  chất lượng có nguồn gốc nhập khẩu. Đảm bảo cho bạn có được
                  nguồn sữa đầy đủ dinh dưỡng với giá cả hợp lý.
                </p>
              </h1>
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
                src={australia}
              />
            </div>
            <div className="brand-img-box">
              <img className="brand-img" alt="Vegemil" src={vegemil} />
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
              <img className="brand-img" alt="Elmhurst 1925" src={elmhurst} />
            </div>
            <div className="brand-img-box">
              <img className="brand-img" alt="137 Degree" src={degree} />
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
        <section className="section-policy border-bottom">
          <div className="container">
            <span className="policy-heading sub-heading">Chính sách</span>
            <div className="grid--2 policy-container">
              <div className="policy">
                <h2>Chính sách mua hàng</h2>
                <ul>
                  <li>
                    Chi phí vận chuyển trong khu vực thành phố Hồ Chí Minh là
                    20.000đ và là 30.000đ tại các khu vực khác.
                  </li>
                  <li>
                    Miễn phí giao hàng đối với đơn hàng có giá trị trên
                    1.000.000đ trên toàn quốc.
                  </li>
                  <li>
                    Cách thức thanh toán bao gồm: thanh toán khi giao hàng và
                    thanh toán trực tuyến
                  </li>
                </ul>
              </div>
              <div className="policy">
                <h2>Chính sách trả hàng</h2>
                <ul>
                  <li>
                    Quý khách được kiểm tra hàng trước khi nhận. Nếu sản phẩm bị
                    hư hoặc hết hạn sử dụng, Orinut sẽ thu hồi sản phẩm và gửi
                    một đơn hàng khác có cùng sản phẩm đồng thời cũng sẽ trả lại
                    một nửa giá trị đơn hàng cho quý khách.
                  </li>
                  <li>
                    Trường hợp sản phẩm giao không đúng yêu cầu, Orinut sẽ thu
                    hồi, cập nhật sản phẩm và nhanh chóng cung cấp sản phẩm khác
                    theo đúng nhu cầu của khách hàng. Trong trường hợp này, quý
                    khách sẽ được miễn phí tiền ship ở bất kỳ khu vực nào.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section></section>
      </main>
    );
  }
}

export default Main;
