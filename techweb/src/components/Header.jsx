import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
const Header = () => {
  return (
    <nav>
      <h1>WebTech</h1>
      <main>
        {/* <HashLink smooth  to={"/#home"}>Home</HashLink> */}
        <a   href={"/#home"}>Home</a>
        <Link to={"/Contact"}>Contact</Link>
        {/* <a href={"/#about"}>About</a>  page reload ho rha h ,so we install react-router-hash-link  */}
        <a href={"/#about"}>About</a> 
        <a href={"/#brands"}>Brands</a>
        <Link to={"/Services"}>Services</Link>


      </main>
    </nav>
  )
}

export default Header
