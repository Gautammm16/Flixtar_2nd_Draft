// import { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../assets/logo.png'; // adjust path if needed

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleNavClick = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="bg-primary py-4 px-6 shadow-lg sticky top-0 z-50">
//       <div className="container mx-auto relative flex items-center justify-between">
//         {/* Logo */}
//         <button onClick={() => handleNavClick('hero')} className="flex items-center z-10">
//           <img src={logo} alt="Flixtar Logo" className="h-14 w-auto" />
//         </button>

//         {/* Center Navigation */}
//         <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
//           <button onClick={() => handleNavClick('hero')} className="text-light hover:text-accent transition">
//             Home
//           </button>
//           <button onClick={() => handleNavClick('results')} className="text-light hover:text-accent transition">
//             Results
//           </button>
//           <button onClick={() => handleNavClick('work')} className="text-light hover:text-accent transition">
//             Our Work
//           </button>
//           <button onClick={() => handleNavClick('testimonials')} className="text-light hover:text-accent transition">
//             Testimonials
//           </button>
//         </nav>

//         {/* Book a Call */}
//         <div className="hidden md:flex z-10">
//           <button
//             onClick={() => handleNavClick('book')}
//             className="px-4 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-opacity-90 transition"
//           >
//             Book a Call
//           </button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-light hover:text-accent transition z-10"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-secondary mt-4 py-4 px-6 rounded-lg">
//           <nav className="flex flex-col space-y-4">
//             <button onClick={() => handleNavClick('hero')} className="text-light hover:text-accent transition text-left">
//               Home
//             </button>
//             <button onClick={() => handleNavClick('results')} className="text-light hover:text-accent transition text-left">
//               Results
//             </button>
//             <button onClick={() => handleNavClick('work')} className="text-light hover:text-accent transition text-left">
//               Our Work
//             </button>
//             <button onClick={() => handleNavClick('testimonials')} className="text-light hover:text-accent transition text-left">
//               Testimonials
//             </button>
//             <button
//               onClick={() => handleNavClick('book')}
//               className="text-accent font-semibold text-left"
//             >
//               Book a Call
//             </button>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;



import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png'; // adjust if needed

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
      <div className="container mx-auto relative flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center z-10 focus:outline-none"
          aria-label="Go to Home Section"
        >
          <img src={logo} alt="Flixtar Logo" className="h-14 w-auto" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2" role="navigation" aria-label="Primary Navigation">
          {['hero', 'results', 'work', 'testimonials'].map((id, idx) => (
            <button
              key={idx}
              onClick={() => handleNavClick(id)}
              className="text-light hover:text-accent transition"
              aria-label={`Navigate to ${id.charAt(0).toUpperCase() + id.slice(1)} section`}
            >
              {id === 'hero' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        {/* CTA */}
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
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav
          className="md:hidden bg-secondary mt-4 py-4 px-6 rounded-lg"
          aria-label="Mobile Navigation"
        >
          <ul className="flex flex-col space-y-4">
            {['hero', 'results', 'work', 'testimonials', 'book'].map((id, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`text-left transition ${
                    id === 'book' ? 'text-accent font-semibold' : 'text-light hover:text-accent'
                  }`}
                  aria-label={`Navigate to ${id.charAt(0).toUpperCase() + id.slice(1)} section`}
                >
                  {id === 'hero' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
