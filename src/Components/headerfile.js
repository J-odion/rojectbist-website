import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/Logo.svg'; // Replace with the actual path to your logo image

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-12 h-12" />
        </Link>
        <button
          className="md:hidden text-white"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`md:flex md:items-center ${
          navbarOpen ? 'block' : 'hidden'
        } mt-4 md:mt-0`}
      >
        <ul className="md:flex space-x-4 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#why-us">Why Us</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#our-services">Our Services</a>
          </li>
          <li>
            <a href="#contact-us">Contact Us</a>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <a
          href="#"
          className="mt-4 md:mt-0 md:inline-block text-[#887040] bg-[#F5F6FA] rounded-sm px-4 py-2 text-center shadow hover:bg-gray-800"
        >
          Download App
        </a>
      </div>
    </nav>
  );
}

export default Header;
