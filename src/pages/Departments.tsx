
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Brain,
  Bone,
  Baby,
  Eye,
  UserCheck,
  Activity,
  Stethoscope,
  Zap,
  Pill
} from "lucide-react";

const Departments = () => {
  const departments = [
    {
      icon: Heart,
      name: "Cardiology",
      description: "Comprehensive heart and cardiovascular care including interventional cardiology, cardiac surgery, and preventive cardiology.",
      services: ["ECG & Echo", "Angioplasty", "Cardiac Surgery", "Pacemaker Implantation"],
      doctors: ["Dr. Rajesh Gupta", "Dr. Amit Sharma"],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop"
    },
    {
      icon: Brain,
      name: "Neurology",
      description: "Advanced neurological care for brain, spine, and nervous system disorders with state-of-the-art diagnostic facilities.",
      services: ["Brain MRI", "EEG", "Stroke Treatment", "Epilepsy Management"],
      doctors: ["Dr. Priya Mehta", "Dr. Vikram Singh"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      icon: Bone,
      name: "Orthopedics",
      description: "Complete bone, joint, and musculoskeletal care including sports medicine and trauma surgery.",
      services: ["Joint Replacement", "Arthroscopy", "Fracture Treatment", "Sports Medicine"],
      doctors: ["Dr. Sunita Sharma", "Dr. Ravi Kumar"],
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop"
    },
    {
      icon: Baby,
      name: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents with experienced pediatricians and child specialists.",
      services: ["Newborn Care", "Vaccination", "Growth Monitoring", "Pediatric Surgery"],
      doctors: ["Dr. Anjali Gupta", "Dr. Rohit Sharma"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
      icon: Eye,
      name: "Ophthalmology",
      description: "Complete eye care services including cataract surgery, retinal treatments, and vision correction procedures.",
      services: ["Cataract Surgery", "LASIK", "Retinal Treatment", "Glaucoma Care"],
      doctors: ["Dr. Kavita Singh", "Dr. Deepak Verma"],
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=300&fit=crop"
    },
    {
      icon: UserCheck,
      name: "General Medicine",
      description: "Primary healthcare services for adults including preventive care, chronic disease management, and health screenings.",
      services: ["Health Checkups", "Diabetes Care", "Hypertension", "Preventive Medicine"],
      doctors: ["Dr. Manoj Agarwal", "Dr. Neha Jain"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
    },
    {
      icon: Activity,
      name: "Gastroenterology",
      description: "Digestive system care including endoscopy, liver treatments, and gastrointestinal surgery.",
      services: ["Endoscopy", "Colonoscopy", "Liver Treatment", "IBD Management"],
      doctors: ["Dr. Sanjay Mishra", "Dr. Rekha Sharma"],
      image: "https://images.unsplash.com/photo-1559757164-f012e9ef5634?w=400&h=300&fit=crop"
    },
    {
      icon: Stethoscope,
      name: "Pulmonology",
      description: "Respiratory care and lung health services including asthma treatment and sleep disorders.",
      services: ["Pulmonary Function", "Asthma Care", "Sleep Studies", "TB Treatment"],
      doctors: ["Dr. Alok Verma", "Dr. Pooja Gupta"],
      image: "https://images.unsplash.com/photo-1551854838-b9ceb8ff0b4f?w=400&h=300&fit=crop"
    },
    {
      icon: Zap,
      name: "Emergency Medicine",
      description: "24/7 emergency care with trauma specialists, critical care units, and advanced life support systems.",
      services: ["Trauma Care", "Critical Care", "Emergency Surgery", "Poison Treatment"],
      doctors: ["Dr. Rahul Saxena", "Dr. Smita Joshi"],
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400&h=300&fit=crop"
    },
    {
      icon: Pill,
      name: "Pharmacy",
      description: "24/7 pharmacy services with comprehensive medication management and consultation.",
      services: ["Prescription Drugs", "OTC Medicines", "Drug Consultation", "Home Delivery"],
      doctors: ["Dr. Pharmacist Team"],
      image: "https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding text-white">
        <div className="container-width text-center">
          <h1 className="text-5xl font-bold mb-6">Medical Departments</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive healthcare services across multiple specialties with expert doctors 
            and state-of-the-art medical facilities.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="medical-card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-medical-teal/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <dept.icon className="h-16 w-16 text-white" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-medical-teal/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <dept.icon className="h-6 w-6 text-medical-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{dept.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{dept.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Services Offered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="bg-medical-light-blue text-medical-teal px-3 py-1 rounded-full text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Our Doctors:</h4>
                    <div className="space-y-1">
                      {dept.doctors.map((doctor, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{doctor}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link to="/doctors" className="flex-1">
                      <Button variant="outline" className="w-full border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white">
                        View Doctors
                      </Button>
                    </Link>
                    <Link to="/appointment" className="flex-1">
                      <Button className="w-full medical-button">
                        Book Appointment
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-medical-teal text-white section-padding">
        <div className="container-width text-center">
          <h2 className="text-3xl font-bold mb-4">Need Medical Consultation?</h2>
          <p className="text-xl mb-6">
            Our expert doctors are available for consultation across all specialties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointment">
              <Button className="bg-white text-medical-teal hover:bg-gray-100 px-8 py-3">
                Book Appointment
              </Button>
            </Link>
            <Link to="/doctors">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-medical-teal px-8 py-3">
                Find a Doctor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
