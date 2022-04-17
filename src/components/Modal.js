import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import logo from "../images/thVega-logo-favicon.png";
import showScroll from "./sub-components/showScroll";

const Modal = function ({
  loginTitle,
  actionLogin,
  actionCloseModal,
  modalWhenClick,
  hideModal,
  logoutTitle,
  actionLogout,
  isSignedIn,
  status,
}) {
  return ReactDOM.createPortal(
    <div
      className={`modal ${modalWhenClick}`}
      onClick={() => {
        hideModal();
        showScroll();
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`modal-container relative ${
          modalWhenClick === "modal-when-click" ? "moveDown" : "  "
        }`}
      >
        <div
          className="modal-close"
          onClick={() => {
            hideModal();
            showScroll();
          }}
        >
          {actionCloseModal}
        </div>
        <div className="modal-logo">
          <img className="header-logo-img" src={logo} alt="Hnb Plant Milk" />
        </div>
        <div className="modal-title-box">
          {isSignedIn || status === "connected" ? logoutTitle : loginTitle}
        </div>
        <div className="modal-actions">
          <div className="modal-login">
            {isSignedIn || status === "connected"
              ? actionLogout()
              : actionLogin}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

const mapStateToProps = function (state) {
  return {
    isSignedIn: state.googleAuth.isSignedIn,
    status: state.fbAuth.status,
  };
};

export default connect(mapStateToProps, {})(Modal);
