// import React, { useContext, useState } from "react";
// import "./Navbar.css";
// import { assets } from "../../assets/assets";
// import { Link, useNavigate } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { StoreContext } from "../../context/StoreContext";

// const Navbar = ({ setShowLogin }) => {
//   const [menu, setMenu] = useState("home");
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/");
//   };

//   return (
//     <div className="navbar">
//       <Link to="/">
//         {" "}
//         <img src={assets.logo} alt="Logo" className="logo" />
//       </Link>
//       <ul className="navbar-menu">
//         <Link
//           to="/"
//           onClick={() => setMenu("home")}
//           className={menu === "home" ? "active" : ""}
//         >
//           Home
//         </Link>
//         <a
//           href="#explore-menu"
//           onClick={() => setMenu("menu")}
//           className={menu === "menu" ? "active" : ""}
//         >
//           Menu
//         </a>
//         <a
//           href="#app-download"
//           onClick={() => setMenu("mobile-app")}
//           className={menu === "mobile-app" ? "active" : ""}
//         >
//           App
//         </a>
//         <a
//           href="#footer"
//           onClick={() => setMenu("contact")}
//           className={menu === "contact" ? "active" : ""}
//         >
//           Contact
//         </a>
//       </ul>
//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="Search" />
//         <div className="navbar-search-icon">
//           <Link to="/cart">
//             <img src={assets.basket_icon} alt="Basket" />
//           </Link>
//           <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
//         </div>
//         {!token ? (
//           <button onClick={() => setShowLogin(true)}>Sign In</button>
//         ) : (
//           <div className="navbar-profile">
//             <img src={assets.profile_icon} alt="" />
//             <ul className="nav-profile-dropdown">
//               <li onClick={() => navigate("/myorders")}>
//                 <img src={assets.bag_icon} alt="" />
//                 <p>Orders</p>
//               </li>
//               <hr />
//               <li onClick={logout}>
//                 <img src={assets.logout_icon} alt="" />
//                 <p>Logout</p>
//               </li>
//             </ul>
//           </div>
//         )}

//         <div
//           className="mobile-menu-icon"
//           onClick={() => setShowMobileMenu(!showMobileMenu)}
//         >
//           {showMobileMenu ? <FaTimes /> : <FaBars />}
//         </div>
//       </div>

//       {/* Mobile Menu Sidebar */}
//       <div className={`mobile-menu ${showMobileMenu ? "active" : ""}`}>
//         <ul>
//           <Link
//             to="/"
//             onClick={() => {
//               setMenu("home");
//               setShowMobileMenu(false);
//             }}
//             className={menu === "home" ? "active" : ""}
//           >
//             Home
//           </Link>
//           <a
//             href="#explore-menu"
//             onClick={() => {
//               setMenu("menu");
//               setShowMobileMenu(false);
//             }}
//             className={menu === "menu" ? "active" : ""}
//           >
//             Menu
//           </a>
//           <a
//             href="#app-download"
//             onClick={() => {
//               setMenu("mobile-app");
//               setShowMobileMenu(false);
//             }}
//             className={menu === "mobile-app" ? "active" : ""}
//           >
//             App
//           </a>
//           <a
//             href="#footer"
//             onClick={() => {
//               setMenu("contact");
//               setShowMobileMenu(false);
//             }}
//             className={menu === "contact" ? "active" : ""}
//           >
//             Contact
//           </a>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  // Close mobile menu when clicking outside (optional)
  const handleCloseMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      {/* Desktop Menu (Hidden on Mobile) */}
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}

        {/* Mobile Menu Toggle Button */}
        <div
          className="mobile-menu-icon"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu (Only visible when toggled) */}
      <div className={`mobile-menu ${showMobileMenu ? "active" : ""}`}>
        <ul>
          <Link
            to="/"
            onClick={() => {
              setMenu("home");
              setShowMobileMenu(false);
            }}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => {
              setMenu("menu");
              setShowMobileMenu(false);
            }}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#app-download"
            onClick={() => {
              setMenu("mobile-app");
              setShowMobileMenu(false);
            }}
            className={menu === "mobile-app" ? "active" : ""}
          >
            App
          </a>
          <a
            href="#footer"
            onClick={() => {
              setMenu("contact");
              setShowMobileMenu(false);
            }}
            className={menu === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
