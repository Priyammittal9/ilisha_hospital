
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription submitted");
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-medical-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IH</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Ilisha Healthcare</h3>
                <p className="text-gray-400 text-sm">Multispeciality Hospital</p>
              </div>
            </div>
            {/* <p className="text-gray-400">
              Leading healthcare facility in Noida providing comprehensive medical services 
              with compassion and excellence since 2019.
            </p> */}
            <p className="text-gray-400 capitalize">
               healthcare facility in Noida providing comprehensive medical services 
              with compassion and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-medical-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-medical-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-medical-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-medical-blue transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/departments" className="block text-gray-400 hover:text-white transition-colors">
                Departments
              </Link>
              <Link to="/doctors" className="block text-gray-400 hover:text-white transition-colors">
                Our Doctors
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/appointment" className="block text-gray-400 hover:text-white transition-colors">
                Book Appointment
              </Link>
              {/* <Link to="/careers" className="block text-gray-400 hover:text-white transition-colors">
                Careers
              </Link> */}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <div className="space-y-2">
              <p className="text-gray-400">24/7 Emergency Care</p>
              <p className="text-gray-400">ICU & Critical Care</p>
              <p className="text-gray-400">Diagnostic Services</p>
              <p className="text-gray-400">Ambulance Service</p>
              <p className="text-gray-400">Pharmacy</p>
              <p className="text-gray-400">Blood Bank</p>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-medical-teal" />
                <span className="text-gray-400 text-sm">
                  Shankar bazar  Chitrakoot, UP 
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-medical-teal" />
                <span className="text-gray-400 text-sm">+91-8858733618</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-medical-teal" />
                <span className="text-gray-400 text-sm">info@ilishahealthcare.com</span>
              </div> */}
            </div>

            <div className="space-y-2">
              <h5 className="font-medium">Newsletter</h5>
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button type="submit" className="medical-button">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Ilisha Healthcare & Multispeciality Hospital. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
              // to="/faq"
              to={'#'}
               className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link 
              // to="/faq"
              to={'#'}
               className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link 
              // to="/faq"
              to={'#'}
               className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
