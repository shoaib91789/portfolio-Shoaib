import React from "react";
import logo from "../logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons"

export const Navbar = () => {
  return (
   
    <nav className="navbar navbar-expand-lg navbar-light bg-red">
    <div className="container">

      <a className="navbar-brand" href="/"><img className="logo" src={logo}  alt="logo..."/></a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <FontAwesomeIcon icon={faBars} style={{color:"#000000"}} />
       </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/" style={{color:"00ff00"}}>About me</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">service</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">how work</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">portfolio</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/">Contacts</a>
        </li>
        </ul>
    </div>
    </div>
    </nav>





    
   
  );
}
export default Navbar;