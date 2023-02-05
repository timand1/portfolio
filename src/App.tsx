import { useEffect, useState } from 'react'
import './App.scss'
import Hero from './components/hero/hero'
import Button from './components/button/button'
import Extra from './components/extra/extra'

function App() {
const [darkMode, setDarkMode] = useState(false)

useEffect(() => {
  darkMode ? document.querySelector('body')?.classList.add('dark') : document.querySelector('body')?.classList.remove('dark')
}, [darkMode])

  return (
    <div className="App">
      <Hero />
      <Button text={'Dark Mode'} clickEvent={() => setDarkMode(!darkMode)} />
      <Extra />
    </div>
  )
}

export default App
