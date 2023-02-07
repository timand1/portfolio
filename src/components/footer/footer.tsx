import './footer.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {  

    const date = new Date().getFullYear() + ' '

    return (
      <div className='footer'>
        <div className="footer-links">
            <a href="https://github.com/timand1">GitHub  <FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://www.linkedin.com/in/tim-andersson-04531b253/">LinkedIn <FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <p>	&#169; Tim Andersson {date} - <a href="mailto:timandersson22@live.se">Contact</a></p>
      </div>    
    )
  }
  
  export default Footer
  