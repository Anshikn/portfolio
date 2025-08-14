import './App.css'
import About from './components/About'
import Home from './components/Home'
import Works from './components/Works'
import Contacts from './components/Contacts'
import AnimatedBackground from './components/AnimatedBackground'
import cv from './assets/pdf/MUHAMMED ANSHIK N (SD).pdf'
import { Link, Routes, Route, BrowserRouter, useLocation } from "react-router-dom"

function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between mt-6 md:mt-12 px-4 relative z-10">
      <Link to="/">
        <h2 className="pl-4 md:pl-16 text-lg md:text-xl mb-4 md:mb-0">
          Muhammed <span className="text-purple-500">Anshik N</span>
        </h2>
      </Link>
      <ul className="flex flex-wrap justify-center md:justify-end list-none space-x-4 md:space-x-8 pr-0 md:pr-8">
        <li>
          <Link
            to="/works"
            className={`hover:text-purple-500 transition-colors text-sm md:text-base ${location.pathname === '/works' ? 'text-purple-400' : ''}`}
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`hover:text-purple-500 transition-colors text-sm md:text-base ${location.pathname === '/about' ? 'text-purple-400' : ''}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`hover:text-purple-500 transition-colors text-sm md:text-base ${location.pathname === '/contact' ? 'text-purple-400' : ''}`}
          >
            Let's Chat!
          </Link>
        </li>
        <li>
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors text-sm md:text-base"
          >
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedBackground />
      <Navbar />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
