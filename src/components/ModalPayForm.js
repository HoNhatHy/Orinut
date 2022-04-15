import React, { useRef, useState } from "react";
import useLocationForm from "./useLocationForm";
import Select from "react-select";
import { connect } from "react-redux";
import { createOrder } from "../actions";
import history from "../history";

import showScroll from "./sub-components/showScroll";

const ModalPayForm = function ({
  cart,
  createOrder,
  setModal,
  setModalAnnounce,
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [payMethod, setPayMethod] = useState("tien mat");
  const { state, onCitySelect, onDistrictSelect, onWardSelect } =
    useLocationForm(true);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;

  const countShip = () => {
    if (selectedCity?.label === "Hồ Chí Minh") {
      return 20000;
    } else {
      return 30000;
    }
  };

  const totalPrice = JSON.parse(localStorage.getItem("totalPrice")).reduce(
    (sum, item) => {
      return sum + item;
    },
    countShip()
  );

  const formValues = {
    productIds: JSON.parse(localStorage.getItem("productId")),
    quantities: JSON.parse(localStorage.getItem("quantity")),
    totalPrice: JSON.parse(localStorage.getItem("totalPrice")).reduce(
      (sum, item) => sum + item,
      0
    ),
    name,
    phone,
    email,
    address,
    selectedWard,
    selectedDistrict,
    selectedCity,
    date: new Date(),
    payMethod,
  };

  console.log(JSON.parse(localStorage.getItem("totalPrice")));
  console.log(totalPrice);

  return (
    <div className="modal-pay" onClick={(e) => e.stopPropagation()}>
      <div className="pay-close">
        <button
          className="btn modal-btn-close"
          onClick={() => {
            setModal(false);
            showScroll();
          }}
        >
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
      </div>
      <div className="pay--1">
        <p className="sub-heading">Orinut</p>
        <p className="pay-heading">Thông tin giao hàng</p>
        <form className="pay-form flex--column">
          <div className="flex--column pay-form--1">
            <label htmlFor="payName">Họ và tên</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="pay purchase-input"
              id="payName"
            />
            <label htmlFor="payPhone">Số điện thoại</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className="pay purchase-input"
              id="payPhone"
              type="tel"
            />
            <label htmlFor="payEmail">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="pay purchase-input"
              id="payEmail"
              type="email"
            />
            <label htmlFor="payAddress">Địa chỉ</label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              type="text"
              className="pay purchase-input"
              id="payAddress"
            />
          </div>
          <div className="other-address">
            <div>
              <label className="label-address" htmlFor="pay-province">
                Chọn tỉnh / thành
              </label>
              <Select
                name="cityId"
                key={`cityId_${selectedCity?.value}`}
                isDisabled={cityOptions.length === 0}
                options={cityOptions}
                onChange={(option) => onCitySelect(option)}
                placeholder="Tỉnh/Thành"
                defaultValue={selectedCity}
                id="pay-province"
                className="select"
              />
            </div>
            <div>
              <label className="label-address" htmlFor="pay-district">
                Chọn quận / huyện
              </label>
              <Select
                className="select"
                id="pay-district"
                name="districtId"
                key={`districtId_${selectedDistrict?.value}`}
                isDisabled={districtOptions.length === 0}
                options={districtOptions}
                onChange={(option) => onDistrictSelect(option)}
                placeholder="Quận/Huyện"
                defaultValue={selectedDistrict}
              />
            </div>
            <div>
              <label className="label-address" htmlFor="pay-ward">
                Chọn phường / xã
              </label>
              <Select
                id="pay-ward"
                className="select"
                name="wardId"
                key={`wardId_${selectedWard?.value}`}
                isDisabled={wardOptions.length === 0}
                options={wardOptions}
                placeholder="Phường/Xã"
                onChange={(option) => onWardSelect(option)}
                defaultValue={selectedWard}
              />
            </div>
          </div>
          <div className="pay-method flex--column">
            <div>
              <input
                onChange={(e) => setPayMethod(e.target.value)}
                type="radio"
                id="cash"
                name="drone"
                value={payMethod}
              />
              <label htmlFor="cash">Thanh toán khi nhận hàng</label>
            </div>
            <div>
              <input
                type="radio"
                id="cash"
                name="drone"
                value="chuyen khoan"
                onChange={(e) => {
                  setPayMethod(e.target.value);
                }}
              />
              <label htmlFor="cash">
                Chuyển khoản qua ngân hàng (nhân viên sẽ liên hệ với khách để
                thực hiện thanh toán)
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className="pay--2 flex--column">
        <div>
          <p>Tạm tính</p>
          <p>
            {cart
              .reduce((sum, item) => {
                return sum + item.totalPrice;
              }, 0)
              .toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
          </p>
          <p>Phí vận chuyển</p>
          <p>
            {selectedCity?.label === "Hồ Chí Minh"
              ? (20000).toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })
              : (30000).toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
          </p>
        </div>
        <div>
          <p>Tổng cộng</p>
          <p className="payment-amount">
            {cart
              .reduce((sum, item) => {
                return sum + item.totalPrice;
              }, countShip())
              .toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
          </p>
        </div>
        <button
          className="btn purchase-btn payment-btn"
          onClick={() => {
            createOrder({
              ...formValues,
            });
            setModal(false);
            localStorage.clear();
            setModalAnnounce(true);
            setTimeout(function () {
              history.push("/san-pham");
            }, 3000);
          }}
        >
          Hoàn tất đơn hàng
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    fbId: state.fbAuth.userId,
    googleId: state.googleAuth.userId,
  };
};

export default connect(mapStateToProps, { createOrder })(ModalPayForm);
