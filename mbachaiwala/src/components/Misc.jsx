import React from 'react';
import logo from "../assets/logo.png";
import {BsMouse} from "react-icons/bs";
export default function Misc() {
  return <>
        <div className="cursor"></div>
        <a href="/" className="logo">
            <img src={logo} alt="logo" />
        </a>
        <a href="/franchise" className="franchiseBtn">
            Get A Franchise
        </a>
        <BsMouse className="scrollBtn"  />
  </>
}
