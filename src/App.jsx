
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Works from './components/Works'
import Contacts from './components/Contacts'
import AnimatedBackground from './components/AnimatedBackground'
import cv from './assets/pdf/MUHAMMED ANSHIK N (SD).pdf'
import { Router, Link, Routes, Route, BrowserRouter } from "react-router-dom"



function App() {


  return (
    <>
      <BrowserRouter >
        <AnimatedBackground />



        {/* Navigation */}
        <nav className="flex items-center justify-between mt-12 px-4 relative z-10">
          <Link to="/"><h2 className="pl-16 text-xl">
            Muhammed <span className="text-[#560cc6]">Anshik N</span>

          </h2></Link>
          <ul className="flex list-none space-x-8 pr-8">

            <li>
              <Link to="/works" className="hover:text-[#560cc6] transition-colors">
                Works
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#560cc6] transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#560cc6] transition-colors">
                Let's Chat!
              </Link>
            </li>
            <li>
              <a
                href={cv}
                target="_blank"
                className="hover:text-[#560cc6] transition-colors"
              >
                CV
              </a>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Works" element={<Works />} />
          <Route path="/Contact" element={<Contacts />} />
          <Route path="/About" element={<About />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
