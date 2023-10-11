import React, { useState, useEffect } from "react";
import { throttle } from "lodash";
import Footer from "./Footer";
import EmailForm from "./EmailForm";
import MobileFooter from "./MobileFooter";

const MainPage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = throttle(() => {
    setWidth(window.innerWidth);
  }, 800);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {width > 1100 ? (
        <>
          <img width={"100%"} src="/섹션1 pc.jpg" alt="" />
          <img width={"100%"} src="/섹션2 pc.jpg" alt="" />
          <img width={"100%"} src="/섹션3 pc.jpg" alt="" />
          <img width={"100%"} src="/섹션4 pc.jpg" alt="" />
          <EmailForm width={width} />
          <img width={"100%"} src="/푸터 pc.jpg" alt="" />
          <Footer />
        </>
      ) : (
        <>
          <img width={"100%"} src="/색션1 모바일.jpg" alt="" />
          <img width={"100%"} src="/색션2 모바일.jpg" alt="" />
          <img width={"100%"} src="/색션3 모바일.jpg" alt="" />
          <img width={"100%"} src="/색션4 모바일.jpg" alt="" />
          <EmailForm width={width} />
          <img width={"100%"} src="/푸터 모바일.jpg" alt="" />
          <MobileFooter />
        </>
      )}
    </div>
  );
};

export default MainPage;
