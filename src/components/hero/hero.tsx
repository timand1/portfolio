import './hero.scss'
import github from '../../assets/github.svg'
import email from '../../assets/email.svg'
import linkedin from '../../assets/linkedin.svg'

function Hero() {
  return (
    <div className='hero'>
        <div className='hero--header'>
            <h1>Hi, I'm Tim!</h1>
            <h2>Frontend Developer</h2>
        </div>
        <section className='hero--content'>

        <div className='hero--image'>
            <img src="https://wallpaperaccess.com/full/154009.jpg" alt="" />
        </div>
        <div className='hero--text'>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at voluptas ex vero, quod quas inventore quo unde porro ipsum ducimus quis, quisquam modi. Magnam animi eveniet dolor molestiae optio?</p>
        </div>
        </section>
        <div className='hero--links'>
            <a href="http://www.github.com" target="_blank"><img src={linkedin} alt="LinkedIn Icon" /></a>
            <a href="http://www.linkedin.com" target="_blank"><img src={github} alt="GitHub Icon" /></a>
            <a href="mailto: timandersson22@live.se"><img src={email} alt="Email Icon" /></a>
        </div>
    </div>    
  )
}

export default Hero
