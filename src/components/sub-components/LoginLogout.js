import React from "react";
import { connect } from "react-redux";

import FbAuth from "../FbAuth";
import GoogleAuth from "../GoogleAuth";
import Modal from "../Modal";
import history from "../../history";

class LoginLogout extends React.Component {
  constructor(props) {
    super(props);

    this.actionLogin = (
      <React.Fragment>
        <FbAuth hideModal={this.props.hideModal} />
        <GoogleAuth hideModal={this.props.hideModal} />
      </React.Fragment>
    );

    this.actionCloseModal = (
      <button className="btn modal-btn-close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    );

    this.logoutTitle = (
      <React.Fragment>
        <p className="modal-title">Đăng xuất</p>
        <p className="modal-description">Bạn có chắc bạn muốn đăng xuất?</p>
      </React.Fragment>
    );

    this.loginTitle = <p className="modal-title">Đăng nhập</p>;
  }

  chooseLogout = () => {
    if (this.props.isSignedIn) {
      return <GoogleAuth hideModal={this.props.hideModal} />;
    }
    if (this.props.status === "connected") {
      return <FbAuth hideModal={this.props.hideModal} />;
    }
  };

  actionLogout = () => {
    return (
      <div className="modal-logout-container">
        <button className="cancel-btn" onClick={this.props.hideModal}>
          Cancel
        </button>
        <React.Fragment>{this.chooseLogout()}</React.Fragment>
      </div>
    );
  };

  render() {
    return (
      <Modal
        loginTitle={this.loginTitle}
        logoutTitle={this.logoutTitle}
        actionLogin={this.actionLogin}
        actionCloseModal={this.actionCloseModal}
        modalWhenClick={this.props.modalWhenClick}
        hideModal={this.props.hideModal}
        actionLogout={this.actionLogout}
      />
    );
  }
}

const mapStateToProps = function (state) {
  return {
    isSignedIn: state.googleAuth.isSignedIn,
    status: state.fbAuth.status,
  };
};

export default connect(mapStateToProps, {})(LoginLogout);
