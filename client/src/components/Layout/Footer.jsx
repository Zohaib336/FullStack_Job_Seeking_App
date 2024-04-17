import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; 2024 JobWave. All rights reserved. </div>
      <div>
        <Link to={"https://www.facebook.com/profile.php?id=100009402984615"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.linkedin.com/in/zohaib-akhtar-2b4564266/"} target="_blank">
          <FaLinkedin />
        </Link>

      </div>
    </footer>
  );
};

export default Footer;
