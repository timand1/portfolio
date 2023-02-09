import Hero from '../../components/hero/hero'
import Knowledge from '../../components/knowledge/knowledge'
import Portfolio from '../../components/portfolio/portfolio'
import Extra from '../../components/extra/extra'
import Footer from '../../components/footer/footer'
import About from '../../components/about/about'
import Contact from '../../components/contact/contact'
import './homepage.scss'

function Homepage() {

  return (
    <div className='homepage'>
        <Hero />
        <About />
        <Knowledge />
        <Portfolio />
        <Contact />
        <Extra />
        <Footer />
    </div>    
    )
  }
  
  export default Homepage
  