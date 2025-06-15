import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Flixtar</h3>
            <p className="text-gray-400">
              Creating compelling visual stories that captivate audiences and elevate brands.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Navigation">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-accent transition">Home</a></li>
              <li><a href="#results" className="text-gray-400 hover:text-accent transition">Results</a></li>
              <li><a href="#work" className="text-gray-400 hover:text-accent transition">Our Work</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-accent transition">Testimonials</a></li>
              <li><a href="#book" className="text-gray-400 hover:text-accent transition">Book a Call</a></li>
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-accent transition">
                <FaFacebook size={20} title="Facebook" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-accent transition">
                <FaTwitter size={20} title="Twitter" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-accent transition">
                <FaInstagram size={20} title="Instagram" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-accent transition">
                <FaLinkedin size={20} title="LinkedIn" />
              </a>
            </div>

            <p className="text-gray-400 mb-2">
              Email: <a href="mailto:info.flixtar@gmail.com" className="hover:text-accent transition">info.flixtar@gmail.com</a>
            </p>
            <p className="text-gray-400">
              Office Address: 910, Zircon Arena,<br />
              Near Pal Haveli, Bhatha Road,<br />
              Surat, Gujarat, India - 394510
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Flixtar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
