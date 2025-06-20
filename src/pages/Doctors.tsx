
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Search, Star, Calendar, Award } from "lucide-react";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const doctors = [
    {
      id: 1,
      name: "Dr. Rajesh Gupta",
      department: "Cardiology",
      designation: "Senior Cardiologist & Chairman",
      qualification: "MBBS, MD (Medicine), DM (Cardiology), FICP",
      experience: "25+ years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=400&fit=crop&crop=face",
      specialization: ["Interventional Cardiology", "Heart Surgery", "Cardiac Catheterization"],
      rating: 4.9,
      availability: "Mon-Sat: 9AM-5PM"
    },
    {
      id: 2,
      name: "Dr. Sunita Sharma",
      department: "Orthopedics",
      designation: "Senior Orthopedic Surgeon",
      qualification: "MBBS, MS (Orthopedics), Fellowship in Joint Replacement",
      experience: "20+ years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop&crop=face",
      specialization: ["Joint Replacement", "Arthroscopy", "Trauma Surgery"],
      rating: 4.8,
      availability: "Mon-Fri: 10AM-6PM"
    },
    {
      id: 3,
      name: "Dr. Priya Mehta",
      department: "Neurology",
      designation: "Senior Neurologist",
      qualification: "MBBS, MD (Medicine), DM (Neurology)",
      experience: "18+ years",
      image: "https://images.unsplash.com/photo-1594824484533-f0e12e92ab5b?w=300&h=400&fit=crop&crop=face",
      specialization: ["Stroke Treatment", "Epilepsy", "Movement Disorders"],
      rating: 4.9,
      availability: "Tue-Sat: 11AM-4PM"
    },
    {
      id: 4,
      name: "Dr. Anjali Gupta",
      department: "Pediatrics",
      designation: "Senior Pediatrician",
      qualification: "MBBS, MD (Pediatrics), Fellowship in Neonatology",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=400&fit=crop&crop=face",
      specialization: ["Newborn Care", "Child Development", "Vaccination"],
      rating: 4.9,
      availability: "Mon-Sat: 9AM-1PM, 4PM-7PM"
    },
    {
      id: 5,
      name: "Dr. Vikram Singh",
      department: "Neurology",
      designation: "Consultant Neurosurgeon",
      qualification: "MBBS, MS (General Surgery), MCh (Neurosurgery)",
      experience: "22+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
      specialization: ["Brain Surgery", "Spine Surgery", "Tumor Surgery"],
      rating: 4.8,
      availability: "Wed-Sun: 2PM-6PM"
    },
    {
      id: 6,
      name: "Dr. Kavita Singh",
      department: "Ophthalmology",
      designation: "Senior Eye Specialist",
      qualification: "MBBS, MS (Ophthalmology), Fellowship in Retina",
      experience: "16+ years",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=400&fit=crop&crop=face",
      specialization: ["Cataract Surgery", "Retinal Diseases", "LASIK"],
      rating: 4.7,
      availability: "Mon-Fri: 10AM-5PM"
    },
    {
      id: 7,
      name: "Dr. Manoj Agarwal",
      department: "General Medicine",
      designation: "Senior Physician",
      qualification: "MBBS, MD (Internal Medicine), FICP",
      experience: "19+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
      specialization: ["Diabetes Care", "Hypertension", "Preventive Medicine"],
      rating: 4.6,
      availability: "Mon-Sat: 8AM-12PM, 5PM-8PM"
    },
    {
      id: 8,
      name: "Dr. Sanjay Mishra",
      department: "Gastroenterology",
      designation: "Senior Gastroenterologist",
      qualification: "MBBS, MD (Medicine), DM (Gastroenterology)",
      experience: "17+ years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=400&fit=crop&crop=face",
      specialization: ["Endoscopy", "Liver Diseases", "IBD Treatment"],
      rating: 4.8,
      availability: "Tue-Sat: 11AM-3PM"
    }
  ];

  const departments = [
    "all", "Cardiology", "Orthopedics", "Neurology", "Pediatrics", 
    "Ophthalmology", "General Medicine", "Gastroenterology"
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = selectedDepartment === "all" || doctor.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding text-white">
        <div className="container-width text-center">
          <h1 className="text-5xl font-bold mb-6">Meet Our Expert Doctors</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our team of highly qualified and experienced medical professionals 
            are dedicated to providing you with the best possible care.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container-width">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search doctors by name, department, or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept === "all" ? "All Departments" : dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoctors.map((doctor) => (
              <Card key={doctor.id} className="medical-card group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                    <p className="text-medical-teal font-semibold">{doctor.designation}</p>
                    <p className="text-gray-600 text-sm">{doctor.department}</p>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">Qualification:</h4>
                      <p className="text-gray-600 text-sm">{doctor.qualification}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">Experience:</h4>
                      <p className="text-gray-600 text-sm">{doctor.experience}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">Specialization:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {doctor.specialization.slice(0, 2).map((spec, idx) => (
                          <span
                            key={idx}
                            className="bg-medical-light-blue text-medical-teal px-2 py-1 rounded text-xs"
                          >
                            {spec}
                          </span>
                        ))}
                        {doctor.specialization.length > 2 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            +{doctor.specialization.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">Availability:</h4>
                      <p className="text-gray-600 text-sm">{doctor.availability}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Link to="/appointment" className="w-full">
                      <Button className="w-full medical-button">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Appointment
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No doctors found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDepartment("all");
                }}
                className="mt-4 medical-button"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-medical-light-blue section-padding">
        <div className="container-width text-center">
          <div className="max-w-2xl mx-auto">
            <Award className="h-16 w-16 text-medical-teal mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose Our Doctors?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our medical team consists of board-certified specialists with extensive 
              training from premier medical institutions. They are committed to providing 
              personalized, evidence-based care using the latest medical technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold text-gray-800">Highly Qualified</h3>
                  <p className="text-sm text-gray-600">Board-certified specialists</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold text-gray-800">Experienced</h3>
                  <p className="text-sm text-gray-600">15+ years average experience</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold text-gray-800">Patient-Centered</h3>
                  <p className="text-sm text-gray-600">Compassionate care approach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
