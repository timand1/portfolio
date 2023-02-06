import { Routes, HashRouter, Route } from "react-router-dom";
import './App.scss'
import Homepage from './views/homepage/homepage'
import ProjectFull from "./views/projectFull/projectFull";

function App() {
  
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/'element={<Homepage />} />
          <Route path='/:title' element={<ProjectFull />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
