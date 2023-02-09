import { Routes, HashRouter, Route } from "react-router-dom";
import './App.scss'
import Homepage from './views/homepage/homepage'
import ProjectFull from "./views/projectFull/projectFull";
import Errorpage from "./components/errorpage/errorpage";
import Navbar from "./components/navbar/navbar";
import { useState } from "react";
function App() {
  const [goTo, setGoTo] = useState<string>()
  const setElementScroll:(element:string) => void = (element) => {
    setGoTo(element)
  }
  return (
    <div className="App">
      <HashRouter>
      <Navbar />
        <Routes>
          <Route path='/'element={<Homepage />} />
          <Route path='/error' element={<Errorpage />} />
          <Route path='/:title' element={<ProjectFull />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
