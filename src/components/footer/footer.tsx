import './footer.scss'
import githubLogo from '../../assets/github.svg'
import linkedinLogo from '../../assets/linkedin.svg'

function Footer() {  

    const date = new Date().getFullYear() + ' '

    return (
      <div className='footer'>
        <div className="footer-links">
            <a href="https://github.com/timand1">GitHub <img src={githubLogo} alt="GitHub Logo" /></a>
            <a href="https://www.linkedin.com/in/tim-andersson-04531b253/">LinkedIn <img src={linkedinLogo} alt="LinkedIn Logo" /></a>
        </div>
        <p>	&#169; Tim Andersson {date} - <a href="mailto:timandersson22@live.se">Contact</a></p>
      </div>    
    )
  }
  
  export default Footer
  