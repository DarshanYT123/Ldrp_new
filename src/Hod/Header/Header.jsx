import React from "react";
import classNames from "classnames";
import {
  blue,
  navClass,
} from "../lib/constants/classes";

const Header = () => {
  return (
    <div>
      <nav className={navClass}>
        {/* Hamburger Menu Icon */}
        <div className="flex flex-row py-2   ">
        {/* Header Components */}
        <div className={classNames(blue, " relative   text-[20px] not-italic font-bold leading-[normal] tracking-[0.4px] cursor-pointer")}>
          <p id="header_title"></p> 
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
