import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
   
  return (
    <div>
       <nav className={`navbar navbar-expand-lg  navbar-${props.mode1} bg-${props.mode1}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">{props.about}</a>
        </li>
       
        
      </ul>
      <div className="form-check form-switch">
        <input type="checkbox" onClick={props.togglemode} className="form-check-input" id="customSwitch1"/>
        {/* <label className="custom-control-label" for="customSwitch1">Toggle this switch element</label> */}
    </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}


Navbar.propTypes={title:PropTypes.string.isRequired,
                about:PropTypes.string
            }

Navbar.defaultProps={
    title:"set title here",
    about:"about text here"
}