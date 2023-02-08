import Hero from '../../components/hero/hero'
import Knowledge from '../../components/knowledge/knowledge'
import Portfolio from '../../components/portfolio/portfolio'
import Extra from '../../components/extra/extra'
import Footer from '../../components/footer/footer'
import About from '../../components/about/about'
import './homepage.scss'
import { useEffect, useState } from 'react'

function Homepage() {
//     import Button from '../../components/button/button'
//     const [darkMode, setDarkMode] = useState(false)
    
//     useEffect(() => {
//       darkMode ? document.querySelector('body')?.classList.add('dark') : document.querySelector('body')?.classList.remove('dark')
//     }, [darkMode])
// <Button text={'Dark Mode'} clickEvent={() => setDarkMode(!darkMode)} />
    return (
      <div className='homepage'>
          <Hero />
          <About />
          <Knowledge />
          <Portfolio />
          <Extra />
          <Footer />
      </div>    
    )
  }
  
  export default Homepage
  