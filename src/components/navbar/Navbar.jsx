import "./Navbar.css";
import logo from "../../assets/10014.svg";

import { useEffect, useState } from "react";
import {
  FiGlobe,
  FiToggleLeft,
  FiMessageSquare,
  FiUser,
  FiSearch,
  FiChevronDown,
} from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="top-navbar">
        <div className="top-nav-left">
          <a href="#" className="top-nav-item">
            <FiGlobe />
            <span>English</span>
            <FiChevronDown />
          </a>

          <a href="#" className="top-nav-item">
            <FiToggleLeft />
            <span>High Contrast</span>
          </a>

          <a href="#" className="top-nav-item">
            <FiMessageSquare />
            <span>Customer Support</span>
          </a>

          <a href="#" className="top-nav-item">
            <FiUser />
            <span>Contact Sales</span>
          </a>
        </div>

        <div className="top-nav-right">
          <button className="search-button">
            <FiSearch />
          </button>

          <a href="#" className="top-nav-link">
            Log in
          </a>

          <a href="#" className="top-nav-item">
            <span>About</span>
            <FiChevronDown />
          </a>
        </div>
      </div>

      <div className="main-navbar">
        <a href="/" className="hubspot-logo">
          <img src={logo} alt=" hubspot logo" />
        </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#products">
            Products
            <FiChevronDown />
          </a>

          <a href="#solutions">
            Solutions
            <FiChevronDown />
          </a>

          <a href="#pricing">Pricing</a>

          <a href="#resources">
            Resources
            <FiChevronDown />
          </a>
        </nav>

        <a href="#demo" className="demo-button">
          Start free or get a demo
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span className="highlight"></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
