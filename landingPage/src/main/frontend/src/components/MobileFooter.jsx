import React from "react";
import { Link } from "react-router-dom";

const MobileFooter = () => {
  return (
    <div className="mobile_footer">
      <Link target="_blank" to="tel:123-456-7890"></Link>
      <Link target="_blank" to="#question"></Link>
    </div>
  );
};

export default MobileFooter;
