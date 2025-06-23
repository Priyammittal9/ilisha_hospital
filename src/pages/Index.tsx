
import { HeroSection } from "@/components/hero/HeroSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Phone, 
  Users, 
  Award,
  Heart,
  Brain,
  Bone,
  Baby,
  Eye,
  UserCheck,
  Clock,
  Shield,
  Star
} from "lucide-react";

const Index = () => {
  const quickServices = [
    {
      icon: Calendar,
      title: "Book Appointment ",
      description: "Schedule your visit online",
      link: "#",
      // link: "/appointment",
      color: "bg-blue-500"
    },
    {
      icon: Phone,
      title: "Emergency Care",
      description: "24/7 emergency services",
      // link: "tel:+918858733618",
      link: "#",
      color: "bg-red-500"
    },
    {
      icon: Users,
      title: "Find a Doctor",
      description: "Browse our specialists",
      link: "/doctors",
      color: "bg-green-500"
    },
    {
      icon: Award,
      title: "Our Services",
      description: "Comprehensive healthcare",
      link: "/services",
      color: "bg-purple-500"
    }
  ];

  const departments = [
    // { icon: Heart, name: "Phsiotherapy", description: "Heart & cardiovascular care" },
    // { icon: Brain, name: "Gengral Surgeon", description: "Brain & nervous system" },
    // { icon: Bone, name: "Physician", description: "Bone & joint treatments" },
    // // { icon: Baby, name: "Pediatrics", description: "Children's healthcare" },
    // // { icon: Eye, name: "Ophthalmology", description: "Eye care specialists" },
    // { icon: UserCheck, name: "General Medicine", description: "Primary healthcare" }
    { icon: Heart, name: "Phsiotherapy", description: "" },
    { icon: Brain, name: "Gengral Surgeon", description: "" },
    { icon: Bone, name: "Physician", description: "" },
    { icon: UserCheck, name: "Deabetolagy", description: "" },
    // { icon: Baby, name: "Pediatrics", description: "Children's healthcare" },
    // { icon: Eye, name: "Ophthalmology", description: "Eye care specialists" },
    { icon: UserCheck, name: "General Medicine", description: "" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Excellent care and very professional staff. The doctors are highly skilled and caring.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Best hospital in Noida. Quick appointment booking and state-of-the-art facilities.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Anita Singh",
      rating: 5,
      text: "Compassionate care during my treatment. The nursing staff is exceptional.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Services */}
      <section className="section-padding bg-medical-soft-gray">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Access</h2>
            <p className="text-xl text-gray-600">Fast and easy access to our services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="medical-card group cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* <h2 className="text-4xl font-bold text-gray-800">
                Leading Healthcare Excellence Since 2019
              </h2> */}
              <h2 className="text-4xl font-bold text-gray-800">
                Leading Healthcare Excellence 
              </h2>
              <p className="text-lg text-gray-600">
                Ilisha Healthcare & Multispeciality Hospital is a premier healthcare facility 
                in Chitrakoot, providing comprehensive medical services with state-of-the-art 
                technology and compassionate care.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4">
                  <Clock className="h-8 w-8 text-medical-teal mx-auto mb-2" />
                  <h4 className="font-semibold">24/7 Care</h4>
                  <p className="text-sm text-gray-600">Round-the-clock services</p>
                </div>
                <div className="text-center p-4">
                  <Shield className="h-8 w-8 text-medical-teal mx-auto mb-2" />
                  <h4 className="font-semibold">Quality</h4>
                  {/* <h4 className="font-semibold">NABH Accredited</h4> */}
                  <p className="text-sm text-gray-600">Quality assurance</p>
                </div>
              </div>
              <Link to="/about">
                <Button className="medical-button">Learn More About Us</Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop"
                alt="Hospital"
                className="rounded-xl shadow-lg"
              />
              {/* <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-medical-teal">5+</h4>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section-padding bg-medical-light-blue">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Specialities</h2>
            <p className="text-xl text-gray-600">Comprehensive medical care across multiple specialties</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="medical-card group">
                <CardContent className="p-6 text-center">
                  <div className="bg-medical-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-medical-teal group-hover:text-white transition-all duration-300">
                    <dept.icon className="h-8 w-8 text-medical-teal group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{dept.name}</h3>
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  <Link to="/departments">
                    <Button variant="outline" size="sm" className="group-hover:bg-medical-teal group-hover:text-white group-hover:border-medical-teal">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/departments">
              <Button className="medical-button">View All Departments</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from our valued patients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/testimonials">
              <Button variant="outline" className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white">
                Read More Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Emergency Banner */}
      <section className="bg-red-600 text-white section-padding">
        <div className="container-width text-center">
          <h2 className="text-3xl font-bold mb-4">Emergency? We're Here 24/7</h2>
          <p className="text-xl mb-6">Immediate medical attention when you need it most</p>
          <Button 
            // onClick={() => window.open("tel:+911204567890", "_self")}
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Emergency: +91-8858733618
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
