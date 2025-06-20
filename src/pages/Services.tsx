
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Activity,
  Ambulance,
  Heart,
  Microscope,
  Clock,
  Shield,
  Phone,
  Users,
  Zap,
  Pill,
  Bed,
  Stethoscope
} from "lucide-react";

const Services = () => {
  const emergencyServices = [
    {
      icon: Clock,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency medical services with trauma specialists and advanced life support."
    },
    {
      icon: Ambulance,
      title: "Ambulance Service",
      description: "Fully equipped ambulances with trained paramedics for emergency transport and medical support."
    },
    {
      icon: Heart,
      title: "Critical Care",
      description: "ICU and HDU facilities with state-of-the-art monitoring and life support systems."
    },
    {
      icon: Zap,
      title: "Trauma Center",
      description: "Specialized trauma care for accidents, injuries, and emergency surgical procedures."
    }
  ];

  const diagnosticServices = [
    {
      icon: Microscope,
      title: "Laboratory Services",
      description: "Complete range of diagnostic tests including pathology, biochemistry, and microbiology.",
      features: ["Blood Tests", "Urine Analysis", "Hormonal Studies", "Tumor Markers"]
    },
    {
      icon: Activity,
      title: "Radiology & Imaging",
      description: "Advanced imaging services for accurate diagnosis and treatment planning.",
      features: ["X-Ray", "CT Scan", "MRI", "Ultrasound"]
    },
    {
      icon: Heart,
      title: "Cardiac Diagnostics",
      description: "Comprehensive cardiac evaluation and monitoring services.",
      features: ["ECG", "Echocardiography", "Stress Test", "Holter Monitoring"]
    },
    {
      icon: Stethoscope,
      title: "Pulmonary Function",
      description: "Lung function tests and respiratory health assessments.",
      features: ["Spirometry", "ABG Analysis", "Sleep Studies", "Bronchoscopy"]
    }
  ];

  const supportServices = [
    {
      icon: Pill,
      title: "24/7 Pharmacy",
      description: "In-house pharmacy with comprehensive medication services and consultation.",
      features: ["Prescription Drugs", "OTC Medicines", "Drug Information", "Home Delivery"]
    },
    {
      icon: Users,
      title: "Blood Bank",
      description: "Safe blood collection, testing, and transfusion services.",
      features: ["Blood Donation", "Component Separation", "Cross Matching", "Emergency Supply"]
    },
    {
      icon: Bed,
      title: "Dialysis Center",
      description: "Modern dialysis facility with experienced nephrology team.",
      features: ["Hemodialysis", "Peritoneal Dialysis", "Plasma Exchange", "CRRT"]
    },
    {
      icon: Shield,
      title: "Infection Control",
      description: "Strict infection prevention protocols and safety measures.",
      features: ["Sterilization", "Isolation Units", "PPE Protocols", "Health Screening"]
    }
  ];

  const specializedServices = [
    {
      title: "Operation Theaters",
      description: "10 modern operation theaters with advanced surgical equipment and laminar flow systems.",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400&h=300&fit=crop",
      features: ["Minimally Invasive Surgery", "Robotic Surgery", "Endoscopic Procedures", "Day Care Surgery"]
    },
    {
      title: "Maternity Services",
      description: "Comprehensive maternity care with NICU facilities and experienced obstetricians.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      features: ["Prenatal Care", "Normal Delivery", "C-Section", "High-Risk Pregnancy"]
    },
    {
      title: "Cancer Care",
      description: "Multidisciplinary cancer treatment with chemotherapy and radiation therapy.",
      image: "https://images.unsplash.com/photo-1559757164-f012e9ef5634?w=400&h=300&fit=crop",
      features: ["Oncology", "Chemotherapy", "Radiation Therapy", "Palliative Care"]
    },
    {
      title: "Rehabilitation",
      description: "Comprehensive rehabilitation services for physical and occupational therapy.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      features: ["Physiotherapy", "Occupational Therapy", "Speech Therapy", "Pain Management"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding text-white">
        <div className="container-width text-center">
          <h1 className="text-5xl font-bold mb-6">Comprehensive Healthcare Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            From emergency care to specialized treatments, we provide a complete range 
            of medical services with state-of-the-art technology and expert care.
          </p>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="section-padding bg-red-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Emergency Services</h2>
            <p className="text-xl text-gray-600">24/7 emergency care when you need it most</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="medical-card group text-center">
                <CardContent className="p-6">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-red-500 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={() => window.open("tel:+911204567890", "_self")}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Emergency Helpline: +91-120-456-7890
            </Button>
          </div>
        </div>
      </section>

      {/* Diagnostic Services */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Diagnostic Services</h2>
            <p className="text-xl text-gray-600">Advanced diagnostic capabilities for accurate healthcare</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {diagnosticServices.map((service, index) => (
              <Card key={index} className="medical-card group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-medical-teal/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-medical-teal transition-all duration-300">
                      <service.icon className="h-6 w-6 text-medical-teal group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-medical-light-blue text-medical-teal px-3 py-1 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Specialized Services</h2>
            <p className="text-xl text-gray-600">Advanced medical treatments and procedures</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <Card key={index} className="medical-card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-medical-teal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-medical-light-blue text-medical-teal px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Support Services</h2>
            <p className="text-xl text-gray-600">Comprehensive support for your healthcare needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
              <Card key={index} className="medical-card group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-medical-blue/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-medical-blue transition-all duration-300">
                      <service.icon className="h-6 w-6 text-medical-blue group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-50 text-medical-blue px-3 py-1 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Packages */}
      <section className="section-padding bg-medical-light-blue">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Health Packages</h2>
            <p className="text-xl text-gray-600">Comprehensive health checkup packages for preventive care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="medical-card">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Basic Health Checkup</h3>
                <p className="text-3xl font-bold text-medical-teal mb-4">₹2,999</p>
                <ul className="text-left space-y-2 mb-6">
                  <li>• Complete Blood Count</li>
                  <li>• Lipid Profile</li>
                  <li>• Blood Sugar</li>
                  <li>• ECG</li>
                  <li>• Chest X-Ray</li>
                  <li>• Doctor Consultation</li>
                </ul>
                <Link to="/appointment">
                  <Button className="w-full medical-button">Book Package</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Comprehensive Checkup</h3>
                <p className="text-3xl font-bold text-medical-teal mb-4">₹5,999</p>
                <ul className="text-left space-y-2 mb-6">
                  <li>• All Basic Tests</li>
                  <li>• Liver Function</li>
                  <li>• Kidney Function</li>
                  <li>• Thyroid Profile</li>
                  <li>• Ultrasound Abdomen</li>
                  <li>• Specialist Consultation</li>
                </ul>
                <Link to="/appointment">
                  <Button className="w-full medical-button">Book Package</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Executive Health Checkup</h3>
                <p className="text-3xl font-bold text-medical-teal mb-4">₹9,999</p>
                <ul className="text-left space-y-2 mb-6">
                  <li>• All Comprehensive Tests</li>
                  <li>• CT Scan</li>
                  <li>• Stress Test</li>
                  <li>• Tumor Markers</li>
                  <li>• Vitamin Profile</li>
                  <li>• Multiple Consultations</li>
                </ul>
                <Link to="/appointment">
                  <Button className="w-full medical-button">Book Package</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-medical-teal text-white section-padding">
        <div className="container-width text-center">
          <h2 className="text-3xl font-bold mb-4">Need Any of Our Services?</h2>
          <p className="text-xl mb-6">
            Contact us to learn more about our comprehensive healthcare services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment">
              <Button className="bg-white text-medical-teal hover:bg-gray-100 px-8 py-3">
                Book Appointment
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-medical-teal px-8 py-3">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
