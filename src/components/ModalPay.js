import React from "react";
import ReactDOM from "react-dom";

import ModalPayForm from "./ModalPayForm";
import showScroll from "./sub-components/showScroll";

class ModalPay extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div
        className="modal-pay-box modal-when-click"
        onClick={() => {
          this.props.setModal(false);
          document.querySelector(".nav-btn").style.zIndex = "5";
          showScroll();
        }}
      >
        <ModalPayForm
          setModalAnnounce={this.props.setModalAnnounce}
          setModal={this.props.setModal}
          cart={this.props.cart}
        />
      </div>,
      document.querySelector("#modalPay")
    );
  }
}

export default ModalPay;
