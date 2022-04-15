import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import logo from "./images/thVega-logo-favicon.png";
import LoginLogout from "./sub-components/LoginLogout";
import hiddenScroll from "./sub-components/hiddenScroll";
import scrollToMain from "./scrollToMain";
import scrollToHeader from "./scrollToHeader";

class HeaderPage extends React.Component {
  state = { modalWhenClick: "" };

  componentDidMount() {
    const showStickyBar = () => {
      const header = document.querySelector(".header");
      const headerHeight = header.getBoundingClientRect().height;
      const mainContainer = document.querySelector(".main-container");

      const stickyNav = function (entries) {
        const [entry] = entries;
        if (!entry.isIntersecting) {
          header.classList.add("sticky");
        } else header.classList.remove("sticky");
      };

      const heroObserver = new IntersectionObserver(stickyNav, {
        root: null,
        threshold: 0,
        rootMargin: `${headerHeight}px`,
      });

      heroObserver.observe(mainContainer);
    };

    showStickyBar();
  }

  displayModal = () => {
    if (document.querySelector(".header.sticky")) {
      scrollToMain();
    }

    this.setState({ modalWhenClick: "modal-when-click" });

    hiddenScroll();
  };

  hideModal = () => {
    if (document.querySelector(".header.sticky")) {
      scrollToMain();
    }

    this.setState({ modalWhenClick: "" });
  };

  renderLogin = () => {
    if (this.props.isSignedIn === null) {
      return null;
    }
    if (this.props.isSignedIn === false && this.props.status === "unknown") {
      return (
        <button
          onClick={this.displayModal}
          className="btn header-nav-btn header-nav-btn-login"
        >
          Đăng nhập
        </button>
      );
    } else if (this.props.isSignedIn) {
      return (
        <img
          className="google-avatar"
          src={this.props.googleUserImg}
          alt="user avatar"
          onClick={this.displayModal}
        />
      );
    } else if (this.props.status === "connected") {
      return (
        <img
          className="google-avatar"
          src={this.props.facebookUserImg}
          alt="user avatar"
          onClick={this.displayModal}
        />
      );
    }
  };

  render() {
    return (
      <div className="header">
        <Link
          to="/"
          className="header-logo"
          onClick={() => {
            if (document.querySelector(".header.sticky")) {
              scrollToMain();
            } else {
              scrollToHeader();
            }
          }}
        >
          <img src={logo} alt="Hnb Plant Milk" className="header-logo-img" />
        </Link>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li
              onClick={() => {
                if (document.querySelector(".header.sticky")) {
                  scrollToMain();
                } else {
                  scrollToHeader();
                }
              }}
            >
              <Link to="/san-pham" className="btn header-nav-btn">
                Sản phẩm
              </Link>
            </li>
            <li
              onClick={() => {
                if (document.querySelector(".header.sticky")) {
                  scrollToMain();
                } else {
                  scrollToHeader();
                }
              }}
            >
              <Link to="/blog" className="btn header-nav-btn">
                Blog
              </Link>
            </li>
            <li
              onClick={() => {
                if (document.querySelector(".header.sticky")) {
                  scrollToMain();
                } else {
                  scrollToHeader();
                }
              }}
              className="cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cart-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <Link to="/gio-hang" className="btn header-nav-btn cart-btn">
                Giỏ hàng
              </Link>
            </li>
            <li>{this.renderLogin()}</li>
          </ul>
        </nav>
        <LoginLogout
          hideModal={this.hideModal}
          modalWhenClick={this.state.modalWhenClick}
        />
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    isSignedIn: state.googleAuth.isSignedIn,
    googleUserImg: state.googleAuth.userImg,
    status: state.fbAuth.status,
    facebookUserImg: state.fbAuth.fbUserImg,
  };
};

export default connect(mapStateToProps, {})(HeaderPage);
