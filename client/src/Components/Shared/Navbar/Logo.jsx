import React from "react";
import LogoImg from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <img className="md:block hidden" src={LogoImg} alt="" />
    </Link>
  );
};

export default Logo;
