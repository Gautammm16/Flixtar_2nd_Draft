import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-primary py-4 px-6 shadow-lg sticky top-0 z-50" role="banner">
      <div className="container mx-auto flex items-center justify-between relative">
        
        {/* Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center z-10 focus:outline-none"
          aria-label="Go to Home Section"
        >
          <img src={logo} alt="Flixtar Logo" className="h-14 w-auto" loading="lazy" />
        </button>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8"
          role="navigation"
          aria-label="Primary Navigation"
        >
          {['hero', 'results', 'work', 'testimonials'].map((id) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="text-light hover:text-accent transition"
              aria-label={`Navigate to ${id === 'hero' ? 'Home' : id}`}
            >
              {id === 'hero' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:flex z-10">
          <button
            onClick={() => handleNavClick('book')}
            className="px-4 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
            aria-label="Book a Call"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-light hover:text-accent transition z-10"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <FaTimes size={24} aria-hidden="true" /> : <FaBars size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-menu"
        className={`md:hidden bg-secondary overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-[500px] mt-4 py-4 px-6 rounded-lg' : 'max-h-0'
        }`}
        aria-label="Mobile Navigation"
      >
        <ul className="flex flex-col space-y-4">
          {['hero', 'results', 'work', 'testimonials', 'book'].map((id) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={`text-left transition ${
                  id === 'book' ? 'text-accent font-semibold' : 'text-light hover:text-accent'
                }`}
                aria-label={`Navigate to ${id === 'hero' ? 'Home' : id}`}
              >
                {id === 'hero' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
