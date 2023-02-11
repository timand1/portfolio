import './about.scss'
import Button from '../button/button'

function About() {

  const goToContact: () => void = () => {
    const y = document.getElementById('contact')!.getBoundingClientRect().top + window.pageYOffset - 120;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <div className='about' id='about'>
        <h1>About me</h1>
        <p>I am a 32 year old man living in Karlstad, Sweden with my SO and daughter.
            Previously educated as a pharmacist at Karlstad University but wanted to do something that I'm excited about.
            Therefore I joined a frontend program to learn JavaScript, CSS and HTML as few examples.
            I am very eager to put my new skillset in use and start this new chapter of my life.</p>
        <Button text="Contact" clickEvent={goToContact} />
    </div>    
  )
}

export default About
