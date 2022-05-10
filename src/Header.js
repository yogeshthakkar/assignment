import React from "react";

function Header(props) {
  return (
    <div>
      <ul className="container-lg flex justify-end mr-8 mt-5">
        <li className="w-16 h-10 not-italic font-medium text-xl leading-7 text-right text-black mr-2">
          Works
        </li>
        <li className="relative w-16 h-10 not-italic font-medium text-xl leading-7 text-right text-black mr-4">
          Blog
        </li>
        <li className="relative w-16 h-10 not-italic font-medium text-xl leading-7 text-right text-black mr-2">
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Header;
