import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  document.getElementById(section)?.scrollIntoView({behavior: 'smooth',})
}

const toggleMenu: () => void = () => {
  setMenuOpen(!menuOpen)
}

    return (
      <div className='navbar'>
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
          <p onClick={(e) => scrollToSection('home')}>home</p>
          <p onClick={(e) => scrollToSection('about')}>about</p>
          <p onClick={(e) => scrollToSection('knowledge')}>knowledge</p>
          <p onClick={(e) => scrollToSection('projects')}>projects</p>
          <p onClick={(e) => scrollToSection('experiments')}>experiments</p>
          <a href="mailto:timandersson22@live.se">contact</a>
        </div>
      </div>    
    )
  }
  
  export default Navbar
  