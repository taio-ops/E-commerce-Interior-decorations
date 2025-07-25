import React, { useState, useRef } from "react";
import { FaTruck } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import "./style.css";
import { Link } from "react-router-dom";

const Nav = ({ searchbtn }) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navRef = useRef();

  const toggleSearch = () => setShowSearch(!showSearch);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <div className="free">
        <div className="icon">
          <FaTruck />
        </div>
        <p>Free Shipping Worldwide when shopping upto $1000</p>
      </div>
      <div className="main_header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="./img/header1.jpg" alt="logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav ref={navRef}>
            <ul>
              <li>
                <Link to="/" className="link">HOME</Link>
              </li>
              <li>
                <Link to="/product" className="link">SHOP</Link>
              </li>
              <li>
                <Link to="/about" className="link">ABOUT</Link>
              </li>
              <li>
                <Link to="/contact" className="link">CONTACT</Link>
              </li>
            </ul>
            {/* Close Button */}
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <IoCloseOutline />
            </button>
          </nav>

          {/* Logo, Search and Icons */}
          <div className="container_logo">
            <div className="search_box">
              <div className={`search_input ${showSearch ? "show" : ""}`}>
                <input
                  type="text"
                  value={search}
                  placeholder="Search for products"
                  autoComplete="off"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={() => searchbtn(search)}>
                  <IoIosSearch />
                </button>
              </div>
            </div>

            <div className="second_icon">
              <Link to="/wish" className="link"><CiHeart /></Link>
              <Link to="/cart" className="link"><IoBagOutline /></Link>

              {/* Hamburger Button */}
              <button className="nav-btn" onClick={showNavbar}>
                <RxHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
