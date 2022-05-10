import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";

function Footer(props) {
  return (
    <>
      <div
        className="left-0 flex justify-evenly mt-8 mb-8"
        style={{ padding: "0 40%" }}
      >
        <Facebook />
        <Instagram />
        <Twitter />
        <Linkedin />
      </div>
      <div className="h-5 not-italic font-normal text-sm leading-5 text-center text-gray-900">
        Copyright ©2020 All rights reserved
      </div>
    </>
  );
}

export default Footer;
