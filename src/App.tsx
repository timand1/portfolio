import { useEffect, useState } from 'react'
import './App.scss'
import Button from './components/button/button'

function App() {
const [darkMode, setDarkMode] = useState(false)

useEffect(() => {
  darkMode ? document.querySelector('body')?.classList.add('dark') : document.querySelector('body')?.classList.remove('dark')
}, [darkMode])

  return (
    <div className="App">
      <Button text={'Dark Mode'} clickEvent={() => setDarkMode(!darkMode)} />
    </div>
  )
}

export default App
