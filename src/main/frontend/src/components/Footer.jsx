import React from "react";
import { emailSender } from "../apis";

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    emailSender(data);
  };
  return (
    <form className="footer_img_box" onSubmit={handleSubmit}>
      <div className="max_box">
        <div className="input_container">
          <div className="fo_input_box">
            <div className="input_box">
              <span>이름</span>
              <input name="clientName" type="text" />
            </div>
            <div className="input_box">
              <span>연락처</span>
              <input name="phoneNm" type="tel" />
            </div>
          </div>
          <label htmlFor="agree2">
            <span>개인정보처리방침 [동의]</span>
            <input type="checkbox" name="agree2" id="agree2" />
          </label>
        </div>
        <button className="img_box">
          <img src="/하단 고정 버튼.png" alt="" />
        </button>
      </div>
    </form>
  );
};

export default Footer;
