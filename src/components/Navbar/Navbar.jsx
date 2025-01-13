import {useRef} from "react"
import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import {FaBars, FaTimes} from "react-icons/fa"
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'

const Navbar = ({theme, setTheme}) => {

  const navRef =  useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  const toggle_mode = () =>{
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className='navbar'>
      <img src={theme == 'light' ? logo_light : logo_dark} alt=""  className='logo'/>
      
      <nav ref={navRef} className="nav-links">
          <img src={close} className="close-btn" alt="close" onClick={showNavbar} />
        <a href="/home">Home</a>
        <a href="/products">Products</a>
        <a href="/features">Features</a>
        <a href="/about">About</a>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <img src={menu} alt="menu" />
      </button>

        {/* <div className='search-box'>
            <input type="text" placeholder='Search' />
            <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="" />
        </div> */}

        {/* <img onClick={toggle_mode} src={theme == 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon'/> */}
    </div>
  )
}

export default Navbar
