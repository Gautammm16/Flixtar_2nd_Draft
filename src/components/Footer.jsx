import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12" aria-label="Website Footer">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          <section aria-label="About Flixtar">
            <h3 className="text-xl font-bold text-accent mb-4">Flixtar</h3>
            <p className="text-gray-400">
              Creating compelling visual stories that captivate audiences and elevate brands.
            </p>
          </section>

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

          <nav aria-label="Service Categories">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/projects?category=video-branding" className="text-gray-400 hover:text-accent transition">Video Branding</a></li>
              <li><a href="/projects?category=social-media" className="text-gray-400 hover:text-accent transition">Social Media</a></li>
              <li><a href="/projects?category=content-creation" className="text-gray-400 hover:text-accent transition">Content Creation</a></li>
              <li><a href="/projects?category=marketing" className="text-gray-400 hover:text-accent transition">Marketing</a></li>
            </ul>
          </nav>

          <section aria-label="Social & Contact Info">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-accent transition"><FaFacebook size={20} /></a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-accent transition"><FaTwitter size={20} /></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-accent transition"><FaInstagram size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-accent transition"><FaLinkedin size={20} /></a>
            </div>
            <p className="text-gray-400">Email: info.flixtar@gmail.com</p>
            <br />
            <p className="text-gray-400">
              Office Address: <br />
              910, Zircon Arena, near Pal Haveli, Bhatha Road, Surat, Gujarat, India.<br />
              Pin Code: 394510
            </p>
          </section>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Flixtar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
