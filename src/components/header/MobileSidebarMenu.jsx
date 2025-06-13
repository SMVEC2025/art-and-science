import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MobileSidebarMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };
    const navigate = useNavigate()
   function handleClick(value) {
    setMenuOpen(false)
    navigate(value)
  }

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
            <a onClick={() => handleClick('/')}>Home</a>
          </li>
          <li>
            <button className="submenu-toggle" onClick={() => toggleSubMenu(0)}>
              About ▾
            </button>
            <ul className={`submenu ${openSubMenu === 0 ? "show" : ""}`}>
              <li><a onClick={() => handleClick('/about-us')}>About</a></li>
              <li><a onClick={() => handleClick('/about/history')}>History of SMVEC</a></li>
              <li><a onClick={() => handleClick('/contact-us')}>Contact us
</a></li>
            </ul>
          </li>
          <li>
            <button className="submenu-toggle" onClick={() => toggleSubMenu(1)}>
              Academics ▾
            </button>
            <ul className={`submenu ${openSubMenu === 1 ? "show" : ""}`}>
              <li><a onClick={() => handleClick('/department/commerce')}>departments</a></li>
              <li><a onClick={() => handleClick('/faculty')}>Faculty</a></li>
              <li><a onClick={() => handleClick('/programs')}>Programs</a></li>
              <li><a onClick={() => handleClick('/ug-programs')}>ug Programs</a></li>
              <li><a onClick={() => handleClick('/pg-programs')}>pg Programs</a></li>
              <li><a onClick={() => handleClick('/calendar')}>calendar</a></li>
              <li><a onClick={() => handleClick('/activities')}>Activities</a></li>
            </ul>
          </li>
          <li>
            <button className="submenu-toggle" onClick={() => toggleSubMenu(2)}>
              Campus ▾
            </button>
            <ul className={`submenu ${openSubMenu === 2 ? "show" : ""}`}>
              <li><a onClick={() => handleClick('/campus')}>campus Life</a></li>
              <li><a onClick={() => handleClick('/events')}>Events</a></li>
              
            </ul>
          </li>
          <li><a onClick={() => handleClick('/admission')}>Admission</a></li>


        </ul>
      </div>
    </>
  );
};

export default MobileSidebarMenu;
