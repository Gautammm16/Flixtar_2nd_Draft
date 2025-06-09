import ContactForm from '../components/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Get In Touch</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="text-accent mr-4 mt-1">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1">Our Office</h3>
                <p className="text-gray-400">
                  123 Creative Street<br />
                  Digital City, DC 10001<br />
                  United States
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-accent mr-4 mt-1">
                <FaPhone size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-gray-400">
                  +1 (555) 123-4567<br />
                  Mon-Fri, 9am-6pm
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-accent mr-4 mt-1">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-gray-400">
                  info@flixtar.com<br />
                  support@flixtar.com
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-accent mr-4 mt-1">
                <FaClock size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1">Business Hours</h3>
                <p className="text-gray-400">
                  Monday - Friday: 9am - 6pm<br />
                  Saturday: 10am - 4pm<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Find Us on Map</h2>
        <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
          {/* Map embed would go here */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291322!2d-73.987844924264!3d40.74844047138911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuNiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;