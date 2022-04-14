import React from "react";
import "../css/general.css";
import "../css/style.css";
import "../css/queries.css";
import "../css/blogQueries.css";
import { Router, Route, Switch } from "react-router-dom";
// import { StickyNav } from "react-js-stickynav";

import HeaderPage from "./HeaderPage";
import Main from "./sub-components/Main";
import Products from "./sub-components/Products";
import ProductDetail from "./sub-components/ProductDetail";
import Cart from "./sub-components/Cart";
import history from "../history";
import logo from "./images/thVega-logo-favicon.png";
import { australia, vegemil, elmhurst, degrees137 } from "../productStore";

class App extends React.Component {
  render() {
    return (
      <div className="body-container">
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
            </Switch>
          </div>
          <footer className="footer">
            <div className="company-logo">
              <img className="th-vega-logo" src={logo} alt="TH Vega logo" />
              <div className="medias">
                <a href="#" className="media">
                  <img
                    src="https://raw.githubusercontent.com/HoNhatHy/th-vega-version-2/main/Image/logo-facebookpng-32204.png"
                    alt="Fanpage Facebook"
                    className="media-logo"
                  />
                </a>
                <a href="#" className="media">
                  <img
                    src="https://raw.githubusercontent.com/HoNhatHy/th-vega-version-2/main/Image/logo-ig-png-32459.png"
                    alt="Fanpage Instagram"
                    className="media-logo"
                  />
                </a>
              </div>
            </div>
            <div className="medias-container">
              <p className="copyright">
                Copyright &#169; 2022 Sữa hạt TH Vega. All rights reserved
              </p>
            </div>
            <div className="company-infors">
              <h3>Liên hệ</h3>
              <p>Công ty TNHH MTV TH Vega</p>
              <p>
                Trụ sở: 105 đường số 8, phường Linh Trung, thành phố Thủ Đức
              </p>
              <p>SĐT: 0905.577.176 &mdash; Email: thvega@gmail.com</p>
              <p>
                MST: 2901270911 - Số ĐKKD: 2901270911 cấp ngày 12/04/2022 bởi Sở
                KH và ĐT thành phố HCM
              </p>
            </div>
          </footer>
        </Router>
      </div>
    );
  }
}

export default App;
