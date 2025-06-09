import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Flixtar</h3>
            <p className="text-gray-400">
              Creating compelling visual stories that captivate audiences and elevate brands.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-accent transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-accent transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-accent transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/projects?category=video-branding" className="text-gray-400 hover:text-accent transition">
                  Video Branding
                </Link>
              </li>
              <li>
                <Link to="/projects?category=social-media" className="text-gray-400 hover:text-accent transition">
                  Social Media
                </Link>
              </li>
              <li>
                <Link to="/projects?category=content-creation" className="text-gray-400 hover:text-accent transition">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link to="/projects?category=marketing" className="text-gray-400 hover:text-accent transition">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-accent transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition">
                <FaLinkedin size={20} />
              </a>
            </div>
            <p className="text-gray-400">
              Email: info@flixtar.com
            </p>
            <p className="text-gray-400">
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Flixtar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;