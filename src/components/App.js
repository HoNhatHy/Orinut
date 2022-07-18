import React from "react";
import "../css/general.css";
import "../css/style.css";
import "../css/queries.css";
import { Router, Route, Switch } from "react-router-dom";

import HeaderPage from "./HeaderPage";
import Main from "./sub-components/Main";
import Products from "./sub-components/Products";
import ProductDetail from "./sub-components/ProductDetail";
import Cart from "./sub-components/Cart";
import Blogs from "./sub-components/Blogs";
import history from "../history";
import logo from "../images/thVega-logo-favicon.png";
import { australia, vegemil, elmhurst, degrees137 } from "../productStore";

class App extends React.Component {
  render() {
    return (
      <div className={`body-container`}>
        <Router history={history}>
          <HeaderPage />
          <div>
            <div className="main-container"></div>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/san-pham" exact component={Products} />
              <Route path="/gio-hang" exact component={Cart} />
              {australia.map((item) => (
                <Route
                  key={item.productId}
                  path={`/san-pham/${item.productUrl}`}
                  exact
                  component={ProductDetail}
                />
              ))}
              {vegemil.map((item) => (
                <Route
                  key={item.productId}
                  path={`/san-pham/${item.productUrl}`}
                  exact
                  component={ProductDetail}
                />
              ))}
              {elmhurst.map((item) => (
                <Route
                  key={item.productId}
                  path={`/san-pham/${item.productUrl}`}
                  exact
                  component={ProductDetail}
                />
              ))}
              {degrees137.map((item) => (
                <Route
                  key={item.productId}
                  path={`/san-pham/${item.productUrl}`}
                  exact
                  component={ProductDetail}
                />
              ))}
              <Route path="/blog" exact component={Blogs} />
            </Switch>
          </div>
          <footer className="footer">
            <div className="company-logo">
              <img className="orinut-logo" src={logo} alt="TH Vega logo" />
              <div className="medias">
                <a
                  target="_blank"
                  href="https://www.facebook.com/suahatorinut"
                  className="media"
                >
                  <img
                    src="https://raw.githubusercontent.com/HoNhatHy/th-vega-version-2/main/Image/logo-facebookpng-32204.png"
                    alt="Fanpage Facebook"
                    className="media-logo"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/suahatorinut/?fbclid=IwAR3MT8u6V2pEqZIoHX_KbfxPDc_JlFdyp4VJo3lO1czhivyeMIaNyqzea9c"
                  className="media"
                >
                  <img
                    src="https://raw.githubusercontent.com/HoNhatHy/th-vega-version-2/main/Image/logo-ig-png-32459.png"
                    alt="Fanpage Instagram"
                    className="media-logo"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.lazada.vn/shop/sua-hat-orinut?spm=a211g0.store_hp.top.share&dsource=share&laz_share_info=95458763_100_7900_200077344337_92155307_null&laz_token=d4de414e4eb6e8d10f2ce2f13f90276a&exlaz=e_YsES8P3ioXPGip8qo24MCXRib2ph7O2ICC6FqKlh%2FLXCXvTKdNAtBdEYi9aQDefhFBhG71c9ZsMzP91M501I5Tbi1k3P2C78D3WnASIas1Y%3D&sub_aff_id=social_share&sub_id2=95458763&sub_id3=200077344337&sub_id6=CPI_EXLAZ"
                  className="media"
                >
                  <img
                    src={require("../images/lazada.png")}
                    alt="Lazada store"
                    className="media-logo"
                  />
                </a>
              </div>
            </div>
            <div className="medias-container">
              <p className="copyright">
                Copyright &#169; 2022 Đại lý sữa hạt Orinut. All rights reserved
              </p>
            </div>
            <div className="company-infors">
              <h3>Liên hệ</h3>
              <p>Công ty TNHH MTV Orinut</p>
              <p>
                Trụ sở: 105 đường số 8, phường Linh Trung, thành phố Thủ Đức
              </p>
              <p>SĐT: 0905.577.176 &mdash; Email: orinut@gmail.com</p>
            </div>
          </footer>
        </Router>
      </div>
    );
  }
}

export default App;
