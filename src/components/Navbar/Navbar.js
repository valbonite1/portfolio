import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../public/img/white-logo.png';
import { TweenMax } from 'gsap';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as ImIcons from 'react-icons/im';

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobMenu = () => setClick(false);

 let nav = useRef(null);
 
   useEffect(() => {

    TweenMax.to(nav, 0, {css: {visibility: 'visible'}}); 
   }) 

    return (
          <div >
            <nav className="navbar" ref={el => nav = el} >
                  <Link to="/" className="nav-link">           {/* child */}
                    <img src={logo} className="logo"/>
                  </Link>
                  <div className="menu" onClick={handleClick}> {/* child */}
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                  </div>
                <div className={click ? 'navbar-nav active' : 'navbar-nav'}>   
                  <ul className="navbar-nav-container"> 
                      <li className="nav-item">            
                        <Link to="/" className="nav-link" onClick={closeMobMenu}>
                          <AiIcons.AiOutlineHome className="icons"/><span className="link-text">HOME</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/about" className="nav-link" onClick={closeMobMenu}>
                          <BsIcons.BsPerson className="icons" /><span className="link-text">ABOUT</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/skills" className="nav-link" onClick={closeMobMenu}>
                          <ImIcons.ImStack className="icons" /><span className="link-text">SKILLS</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/project" className="nav-link" onClick={closeMobMenu}>
                          <BiIcons.BiBookBookmark className="icons" /><span className="link-text">PROJECTS</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/contact" className="nav-link" onClick={closeMobMenu}>
                          <RiIcons.RiContactsLine className="icons contact-icon" /><span className="link-text">CONTACT</span>
                        </Link>
                      </li>
                  </ul>
                </div>
            </nav>
          </div>
    )
}

export default Navbar;
