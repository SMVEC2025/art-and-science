import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

const MobileSidebarMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <>
      {/* Menu toggle button - only on mobile */}
      <div className="mobile-bar">
        <img src="/assets/img/logo/whitelogo.png" alt="" />
         <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
      <MdMenu/>
      </button>
      </div>

      {/* Overlay and Sidebar */}
      <div className={`sidebar-overlay ${menuOpen ? "show" : ""}`} onClick={() => setMenuOpen(false)}></div>
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <button className="submenu-toggle" onClick={() => toggleSubMenu(0)}>
              About ▾
            </button>
            <ul className={`submenu ${openSubMenu === 0 ? "show" : ""}`}>
              <li><a href="#">Vision & Mission</a></li>
              <li><a href="#">Principal's Message</a></li>
            </ul>
          </li>
          <li>
            <button className="submenu-toggle" onClick={() => toggleSubMenu(1)}>
              Programs ▾
            </button>
            <ul className={`submenu ${openSubMenu === 1 ? "show" : ""}`}>
              <li><a href="#">UG Courses</a></li>
              <li><a href="#">PG Courses</a></li>
            </ul>
          </li>
          <li><a href="#">Admissions</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default MobileSidebarMenu;
