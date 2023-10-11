import React from "react";
import { emailSender } from "../apis";

const EmailForm = ({ width }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    emailSender(data);
  };

  return (
    <div className="email_box" id="question">
      {width > 1100 ? (
        <img width={"100%"} src="/섹션5 pc.jpg" alt="" />
      ) : (
        <img width={"100%"} src="/색션5 모바일.jpg" alt="" />
      )}
      <form className="e_container" onSubmit={handleSubmit}>
        <div className="e_input_box">
          <span>이름</span>
          <input type="text" name="clientName" id="clientName" />
        </div>
        <div className="e_input_box">
          <span>연락처</span>
          <input type="text" name="phoneNm" id="phoneNm" />
        </div>
        <textarea name="" id="" cols="30" rows="10" disabled></textarea>
        <label htmlFor="agree1">
          <span>개인정보 취급방침 이용약관</span>
          <input type="checkbox" name="agree1" id="agree1" />
        </label>
        <button className="e_img_box">
          <img src="/대출신청 버튼.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
