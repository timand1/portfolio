import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import './navbar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Navbar() {  

const navigate = useNavigate()
const [menuOpen, setMenuOpen] = useState<boolean>(false)
const scrollToSection: (section : string) => void = (section) => {
  setMenuOpen(false)

  navigate('/')
  const y = document.getElementById(section)!.getBoundingClientRect().top + window.pageYOffset - 120;
  window.scrollTo({ top: y, behavior: "smooth" });
}


const useOutsideClick = (callback: () => void) => {
  const navRef  = useRef(null);

  useEffect(() => {
    function handleClick (event:any) {     
      if (navRef.current && !(navRef.current as HTMLElement).contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [navRef]);

  return navRef;
};

const handleClickOutside = () => {
  setMenuOpen(false)
};

const navRef = useOutsideClick(handleClickOutside);

const toggleMenu: () => void = () => {
  setMenuOpen(!menuOpen)
}

    return (
      <div className='navbar' ref={navRef}>
        <img onClick={(e) => navigate('/')} src={logo} alt="Tim Andersson Logo" />
        <div className='navbar--icons'>
            <a href="http://www.github.com/timand1" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/tim-andersson-04531b253/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="mailto: timandersson22@live.se">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div> 
        <div className={menuOpen ? 'nav--btn open' : 'nav--btn'} onClick={toggleMenu}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
          <div className='close-bar'></div>
        </div>
        <div className='navbar--links'>
          <p onClick={() => scrollToSection('home')}>home</p>
          <p onClick={() => scrollToSection('about')}>about</p>
          <p onClick={() => scrollToSection('knowledge')}>knowledge</p>
          <p onClick={() => scrollToSection('projects')}>projects</p>
          <p onClick={() => scrollToSection('experiments')}>experiments</p>
          <p onClick={() => scrollToSection('contact')}>contact</p>
        </div>
      </div>    
    )
  }
  
  export default Navbar
  