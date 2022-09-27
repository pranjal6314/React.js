import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../index.css'
export default function Navbar(props) {

  return (
    <div>
       <nav className={`navbar navbar-expand-lg  navbar-${props.mode1} bg-${props.mode1}`}>
  <div className="container-fluid">
    <Link className="navbar-brand aa" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link aa active" aria-current="page" to="/"  style={{ 'this:hover':" color:red"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link aa active" to="/about">{props.about}</Link>
        </li>
       
        
      </ul>
      <div className="d-flex">
        <div className="bg-success rounded mx-2" onClick={()=>{props.togglemode("success")}} style={{height: '30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-danger rounded mx-2" onClick={()=>{props.togglemode("danger")}} style={{height: '30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-warning rounded mx-2" onClick={()=>{props.togglemode("warning")}} style={{height: '30px',width:'30px',cursor:'pointer'}}></div>
        <div className="bg-info rounded mx-2" onClick={()=>{props.togglemode("info")}} style={{height: '30px',width:'30px',cursor:'pointer'}}></div>
      </div>
      <div className="form-check form-switch">
        <input type="checkbox" onClick={()=>{props.togglemode(null)}} className="form-check-input" id="customSwitch1"/>
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