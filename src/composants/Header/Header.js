import logo from "../assets/img/LOGO.png"
import React from "react"
import '../Header/header.css'
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

function Header() {
  const [underlineAccueil, setUnderlineAccueil] = useState(false);
  const [underlineAbout, setUnderlineAbout] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setUnderlineAccueil(location.pathname === "/");
    setUnderlineAbout(location.pathname === "/about");
  }, [location]);

  return (
    <header className="kasa-header">
      <div>
        <img src={logo} alt="Kasa"></img>
      </div>
      <div className="header-right-container">
        <Link
          onClick={() => setUnderlineAccueil(true)}
          className={underlineAccueil ? "underlined" : ""}
          to="/"
        >
          Accueil
        </Link>
        <Link
          onClick={() => setUnderlineAbout(true)}
          className={underlineAbout ? "underlined" : ""}
          to="/about"
        >
          A Propos
        </Link>
      </div>
    </header>
  );
}

export default Header;