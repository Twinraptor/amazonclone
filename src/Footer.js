import React from "react";
import "./Footer.css";
import logo from "./images/future.png"

function Footer() {
  return (
    <div className='footer'>
      <img
        className='header_logo'
        src={logo}
        alt=''
      />
      <p className='disclaimer'>
        No rights reserved, this is not a real amazon site. This is clone
        portfolio piece.
      </p>
    </div>
  );
}

export default Footer;
