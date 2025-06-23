
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const handleEmergencyCall = () => {
  //   window.open("tel:+911204567890", "_self");
  // };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90"
    }`}>
      <div className="container-width">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-medical-teal rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IH</span>
            </div>
            <div className="hidden md:block">
              <h1 className="font-bold text-lg text-gray-800">Ilisha Healthcare</h1>
              <p className="text-xs text-gray-600">Multispeciality Hospital</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-medical-teal transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-medical-teal transition-colors">
              About
            </Link>
            
            {/* Departments Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-medical-teal transition-colors">
                Departments <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/departments" className="w-full">All Departments</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Cardiology</DropdownMenuItem>
                <DropdownMenuItem>Neurology</DropdownMenuItem>
                <DropdownMenuItem>Orthopedics</DropdownMenuItem>
                <DropdownMenuItem>Gynecology</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Doctors Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-medical-teal transition-colors">
                Doctors <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/doctors" className="w-full">All Doctors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Senior Consultants</DropdownMenuItem>
                <DropdownMenuItem>Specialists</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/services" className="text-gray-700 hover:text-medical-teal transition-colors">
              Services
            </Link>
            {/* <Link to="/blog" className="text-gray-700 hover:text-medical-teal transition-colors">
              Blog
            </Link> */}
            <Link to="/contact" className="text-gray-700 hover:text-medical-teal transition-colors">
              Contact
            </Link>
          </div>

          {/* Emergency Call & Appointment Button */}
          <div className="flex items-center space-x-4">
            <Button
              // onClick={handleEmergencyCall}
              variant="outline"
              size="sm"
              className="hidden md:flex items-center space-x-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              <span>Emergency</span>
            </Button>
            
            <Link 
            // to="/appointment"
            to={'#'}
            >
              <Button className="medical-button">
                Book Appointment
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-gray-700 hover:text-medical-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-700 hover:text-medical-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/departments"
                className="block text-gray-700 hover:text-medical-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Departments
              </Link>
              <Link
                to="/doctors"
                className="block text-gray-700 hover:text-medical-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Doctors
              </Link>
              <Link
                to="/services"
                className="block text-gray-700 hover:text-medical-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-medical-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                // onClick={handleEmergencyCall}
                variant="outline"
                className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              >
                <Phone className="h-4 w-4 mr-2" />
                Emergency Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
