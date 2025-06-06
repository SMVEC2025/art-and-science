import React, { useState, useEffect } from 'react'
import { IoMdCall } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import mainlogo from '/assets/img/logo/mainlogo.png'
import smveclogo from '/assets/img/logo/smveclogo.png'
import { useNavigate } from 'react-router-dom';
import TopHeader from './TopHeader';
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle first scroll > 70px
      if (currentScrollY > 70) {
        setIsScrolled(true);

        // Detect scroll direction
        if (currentScrollY < lastScrollY) {
          setScrollingUp(true);
        } else {
          setScrollingUp(false);
        }
      } else {
        setIsScrolled(false);
        setScrollingUp(false); // Reset scrolling direction when less than 70px
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  function handleClick(value) {
    navigate(value)
  }
  const handleMouseIn = (value) => {
    setSliderContent(value);
    setShowSlider(true)
  }
  return (
   <>

    <div className={`navbar-main ${isScrolled ? "scrolled" : ''} ${scrollingUp ? "up" : "down"}`}>
      <div className='left'>
        <span><img src={mainlogo} alt="" /></span>

      </div>
      <div className='right'>
        <div className='links'>
          <div className='menu-item'>
            <span onClick={() => handleClick('/')}>Home</span>
          </div>

          <div className='menu-item'>
            <span>About</span>
            <div className='dropdown'>
              <span onClick={() => handleClick('/about')}>About</span>
              <span onClick={() => handleClick('/about/history')}>History of SMVEC</span>
              <span onClick={() => handleClick('/contact-us')}>Contact us</span>
            </div>
          </div>

          <div className='menu-item'>
            <span>Academics</span>
            <div className='dropdown'>
              <span onClick={() => handleClick('/departments/department-of-basicscience')}>departments</span>
              <span onClick={() => handleClick('/faculty')}>Faculty</span>
              <span onClick={() => handleClick('/programs')}>Programs</span>
            </div>
          </div>

          <div className='menu-item'>
            <span>Campus</span>
            <div className='dropdown'>
              <span onClick={() => handleClick('/campus')}>campus Life</span>
              <span onClick={() => handleClick('/events')}>Events</span>
            </div>
          </div>

          <div className='menu-item'>
            <span onClick={() => handleClick('/admission')} >Admission</span>
           
          </div>

          <div className='menu-item'>
            <span><button>Apply Now</button></span>
          </div>
        </div>

      </div>

    </div>
   </>
  )
}

export default Navbar