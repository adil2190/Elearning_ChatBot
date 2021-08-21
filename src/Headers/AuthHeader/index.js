import React from "react";

import "./style.css";
import Logo from "../../Assets/logo2.png";

function AuthHeader(props) {
  return (
    <div className="header">
      <div className="logo-circle">
        <img src={Logo} alt="logo" height="100%" width="100%" />
      </div>
    </div>
  );
}

export default AuthHeader;
