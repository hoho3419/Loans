import React, { useState } from "react";
import { emailSender } from "../apis";

const EmailForm = ({ width }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, "");

    // if (inputValue.length === 12) { 경고창 버전
    //   alert(`전화번호만 입력 가능 합니다! "-"는 빼주세요!`);
    //   return;
    // }

    setPhoneNumber(numericValue);
    // 숫자 이외의 문자가 입력되면 경고창을 띄웁니다.
    if (inputValue !== numericValue) {
      alert("숫자만 입력 가능합니다.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      alert("전송이 완료되었습니다!");
      await emailSender(data);
    } catch (e) {
      alert(e.message + "전송에 실패했습니다. 다시 요청해주세요!");
    }
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
          <input
            type="text"
            name="clientName"
            id="clientName"
            placeholder="홍길동"
            maxLength={6}
          />
        </div>
        <div className="e_input_box">
          <span>연락처</span>
          <input
            type="tel"
            pattern="[0-9]*"
            placeholder="ex) 01012341234"
            autoComplete="off"
            onChange={handleInputChange}
            value={phoneNumber}
            maxLength={11}
          />
        </div>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          disabled
        ></textarea>
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
