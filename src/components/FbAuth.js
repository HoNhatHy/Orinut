import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import { facebookSignIn, facebookSignOut } from "../actions/index";
import logo from "./images/facebook-icon-small.png";
import history from "../history";
import showScroll from "./sub-components/showScroll";

class FbAuth extends React.Component {
  componentDidMount() {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "4985019058233489",
        cookie: true,
        xfbml: true,
        version: "v13.0",
      });
      window.FB.AppEvents.logPageView();
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  login = () => {
    window.FB.login((response) => {
      axios
        .get(
          `http://graph.facebook.com/${response.authResponse.userID}/picture?type=square`
        )
        .then((res) => {
          if (response.status === "connected")
            this.props.facebookSignIn(
              response.authResponse.userID,
              res.request.responseURL
            );
          else {
            console.log(response.status);
          }
        });
    });

    this.props.hideModal();

    showScroll();
  };

  logout = () => {
    window.FB.logout(() => {
      this.props.facebookSignOut();
    });

    this.props.hideModal();
    history.push("/");
    window.location.reload();
  };

  render() {
    if (this.props.status === "unknown") {
      return (
        <button
          onClick={this.login}
          className="btn header-nav-btn facebook-btn"
        >
          <img src={logo} alt="Facebook Login" className="modal-img" />
          <span>Tiếp tục với Facebook</span>
        </button>
      );
    }
    if (this.props.status === "connected") {
      return (
        <button className="logout-btn" onClick={this.logout}>
          Đăng xuất
        </button>
      );
    }
  }
}

const mapStateToProps = function (state) {
  return {
    status: state.fbAuth.status,
  };
};

export default connect(mapStateToProps, {
  facebookSignIn,
  facebookSignOut,
})(FbAuth);
