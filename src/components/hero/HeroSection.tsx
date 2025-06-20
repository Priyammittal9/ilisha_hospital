
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, Clock } from "lucide-react";

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "ilisha healthcare",
      subtitle: "multispecialty hospital",
      description: "Advanced medical care with compassion and expertise",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop"
    },
    {
      title: "24/7 Emergency Care",
      subtitle: "Always Here for You",
      description: "Round-the-clock emergency services with expert medical team",
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1200&h=800&fit=crop"
    },
    {
      title: "State-of-the-Art Facilities",
      subtitle: "Modern Healthcare Technology",
      description: "Latest medical equipment and advanced treatment options",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-medical-teal/90 to-medical-blue/90 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container-width px-4">
          <div className="max-w-4xl">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-2xl md:text-3xl text-medical-blue mb-6 font-medium">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
              <Link to="/appointment">
                <Button className="bg-white text-medical-teal hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-medical-teal px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <Users className="h-8 w-8 text-white mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-white">50,000+</h3>
                </div>
                <p className="text-white/80">Patients Treated</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <Award className="h-8 w-8 text-white mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-white">50+</h3>
                </div>
                <p className="text-white/80">Expert Doctors</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <Clock className="h-8 w-8 text-white mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-white">24/7</h3>
                </div>
                <p className="text-white/80">Emergency Care</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-2">
                  <Calendar className="h-8 w-8 text-white mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-white">5+</h3>
                </div>
                <p className="text-white/80">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Floating Medical Elements */}
      <div className="absolute top-20 right-10 animate-float">
        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-medical-blue rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="absolute bottom-32 left-10 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-medical-teal rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
