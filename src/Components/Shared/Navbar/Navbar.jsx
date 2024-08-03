import "./Navbar.css";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../../Context/ShopContext";
import nav_dropdown from "../../Assets/nav_dropdown.png";

export const Navbar = () => {
  const [menu, setMenu] = useState("");
  const { getTotalCartItems } = useContext(ShopContext);
  let location = useLocation();
  const path = location.pathname;

  const navbarRef = useRef();
  const menuRef = useRef();
  const dropdownRef = useRef();

  useEffect(() => {
    if (path === "/Mens") {
      setMenu("Mens");
    } else if (path === "/Womens") {
      setMenu("Womens");
    } else if (path === "/Kids") {
      setMenu("Kids");
    } else if (path === "/") {
      setMenu("Shop");
    } else {
      setMenu("");
    }
  }, [path]);

  const dropdown_toggle = () => {
    menuRef.current.classList.toggle("nav-menu-visible");
    dropdownRef.current.classList.toggle("open");
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      menuRef.current.classList.remove("nav-menu-visible");
      dropdownRef.current.classList.remove("open");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavMenuClick = () => {
    menuRef.current.classList.remove("nav-menu-visible");
    dropdownRef.current.classList.remove("open");
  };

  return (
    <div className="navbar" ref={navbarRef}>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>FASHION</p>
      </div>
      <img
        className="nav-dropdown"
        src={nav_dropdown}
        onClick={dropdown_toggle}
        ref={dropdownRef}
        alt="Dropdown"
      />
      <ul ref={menuRef} className="nav-menu">
        <Link className="nav-li" onClick={handleNavMenuClick} to="/">
          Shop {menu === "Shop" ? <hr /> : <></>}
        </Link>
        <Link className="nav-li" onClick={handleNavMenuClick} to="/Mens">
          Mens {menu === "Mens" ? <hr /> : <></>}
        </Link>
        <Link className="nav-li" onClick={handleNavMenuClick} to="/Womens">
          Womens {menu === "Womens" ? <hr /> : <></>}
        </Link>
        <Link className="nav-li" onClick={handleNavMenuClick} to="/Kids">
          Kids {menu === "Kids" ? <hr /> : <></>}
        </Link>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <Link to="/Logout">
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
            >
              Log Out
            </button>
          </Link>
        ) : (
          <Link to="/Login">
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <Link to="/cart">
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </Link>
      </div>
    </div>
  );
};
