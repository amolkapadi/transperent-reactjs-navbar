import React, {useState} from "react";
import Main from "./Main";

export default function Navbar() {
    const [navbar,setNavbar]=useState(false);

    const changeBackground=()=>{
        if(window.scrollY >= 60){
            setNavbar(true)
        }else{
            setNavbar(false);
        }
    };
    window.addEventListener('scroll',changeBackground)
  return (
    <>
      <Main />
      <nav className={navbar ? "navbar navbar-expand-lg navbar-light bg-light fixed-top bg-transparent active" : "navbar navbar-expand-lg navbar-light bg-light fixed-top bg-transparent"}>
        <div className="container">
          <a className="navbar-brand" href="#">
            The Web Designer
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
