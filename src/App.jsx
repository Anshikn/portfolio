
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Works from './components/works'
import Contacts from './components/Contacts'
import { Router, Link, Routes, Route, BrowserRouter } from "react-router-dom"


function App() {


  return (
    <>
      <BrowserRouter >



        {/* Navigation */}
        <nav className="flex items-center justify-between mt-12 px-4 relative z-10">
          <h2 className="pl-16 text-xl">
            Muhammed <span className="text-[#560cc6]">Anshik N</span>
          </h2>
          <ul className="flex list-none space-x-8 pr-8">
            <li>
              <Link to="/" className=" hover:text-[#560cc6] transition-colors">
                Home
              </Link>
            </li>
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
                href="/MUHAMMED ANSHIK N (SD).pdf"
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
