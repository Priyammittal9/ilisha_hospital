
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Upload,
  Briefcase,
  GraduationCap,
  Heart
} from "lucide-react";
import { toast } from "sonner";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applicationData, setApplicationData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    education: "",
    coverLetter: ""
  });

  const jobOpenings = [
    {
      id: "cardiologist",
      title: "Senior Cardiologist",
      department: "Cardiology",
      type: "Full-time",
      experience: "10+ years",
      location: "Noida",
      salary: "₹15-25 LPA",
      posted: "2024-01-15",
      description: "We are seeking an experienced cardiologist to join our cardiac care team. The ideal candidate will have expertise in interventional cardiology and patient care.",
      requirements: [
        "MBBS with MD/DM in Cardiology",
        "10+ years of clinical experience",
        "Experience in interventional procedures",
        "Valid medical license",
        "Excellent communication skills"
      ],
      responsibilities: [
        "Diagnose and treat cardiovascular conditions",
        "Perform cardiac procedures and interventions",
        "Collaborate with multidisciplinary teams",
        "Mentor junior doctors and medical students",
        "Participate in research activities"
      ]
    },
    {
      id: "staff-nurse",
      title: "Staff Nurse - ICU",
      department: "Nursing",
      type: "Full-time",
      experience: "2-5 years",
      location: "Noida",
      salary: "₹3-5 LPA",
      posted: "2024-01-12",
      description: "Looking for dedicated ICU nurses to provide critical care to patients in our intensive care unit with state-of-the-art facilities.",
      requirements: [
        "B.Sc Nursing or GNM",
        "2+ years ICU experience",
        "Valid nursing license",
        "BLS/ACLS certification preferred",
        "Strong clinical skills"
      ],
      responsibilities: [
        "Provide direct patient care in ICU",
        "Monitor patient vital signs",
        "Administer medications as prescribed",
        "Maintain patient records",
        "Assist doctors during procedures"
      ]
    },
    {
      id: "lab-technician",
      title: "Laboratory Technician",
      department: "Pathology",
      type: "Full-time",
      experience: "1-3 years",
      location: "Noida",
      salary: "₹2-4 LPA",
      posted: "2024-01-10",
      description: "Join our pathology team as a laboratory technician to perform various diagnostic tests and maintain laboratory equipment.",
      requirements: [
        "B.Sc in Medical Laboratory Technology",
        "1+ years of lab experience",
        "Knowledge of lab equipment",
        "Attention to detail",
        "Computer literacy"
      ],
      responsibilities: [
        "Perform diagnostic tests",
        "Maintain laboratory equipment",
        "Ensure quality control",
        "Prepare lab reports",
        "Follow safety protocols"
      ]
    },
    {
      id: "pharmacist",
      title: "Clinical Pharmacist",
      department: "Pharmacy",
      type: "Full-time",
      experience: "3-7 years",
      location: "Noida",
      salary: "₹4-7 LPA",
      posted: "2024-01-08",
      description: "Seeking a clinical pharmacist to manage medication therapy and provide pharmaceutical care to patients.",
      requirements: [
        "B.Pharm/Pharm.D",
        "Valid pharmacy license",
        "3+ years clinical experience",
        "Knowledge of drug interactions",
        "Patient counseling skills"
      ],
      responsibilities: [
        "Review medication orders",
        "Counsel patients on medications",
        "Monitor drug therapy",
        "Collaborate with healthcare team",
        "Maintain pharmacy records"
      ]
    },
    {
      id: "physiotherapist",
      title: "Physiotherapist",
      department: "Rehabilitation",
      type: "Full-time",
      experience: "2-5 years",
      location: "Noida",
      salary: "₹3-6 LPA",
      posted: "2024-01-05",
      description: "Join our rehabilitation team to help patients recover and improve their physical function through therapeutic exercises.",
      requirements: [
        "BPT/MPT degree",
        "Valid physiotherapy license",
        "2+ years experience",
        "Knowledge of rehabilitation techniques",
        "Good communication skills"
      ],
      responsibilities: [
        "Assess patient conditions",
        "Develop treatment plans",
        "Provide therapeutic exercises",
        "Monitor patient progress",
        "Educate patients and families"
      ]
    },
    {
      id: "admin-manager",
      title: "Hospital Administration Manager",
      department: "Administration",
      type: "Full-time",
      experience: "5-8 years",
      location: "Noida",
      salary: "₹6-10 LPA",
      posted: "2024-01-03",
      description: "Manage hospital operations and ensure smooth functioning of administrative processes in our healthcare facility.",
      requirements: [
        "MBA/MHA preferred",
        "5+ years healthcare administration",
        "Leadership experience",
        "Knowledge of hospital operations",
        "Strong organizational skills"
      ],
      responsibilities: [
        "Oversee daily operations",
        "Manage staff schedules",
        "Ensure compliance with regulations",
        "Handle patient complaints",
        "Coordinate with departments"
      ]
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setApplicationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleJobApplication = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!applicationData.fullName || !applicationData.email || !applicationData.position) {
      toast.error("Please fill all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(applicationData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    console.log("Job Application Data:", applicationData);
    toast.success("Application submitted successfully! We'll contact you soon.");
    
    // Reset form
    setApplicationData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      education: "",
      coverLetter: ""
    });
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding text-white">
        <div className="container-width text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Healthcare Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Be part of a compassionate healthcare team dedicated to providing excellent 
            patient care and making a difference in people's lives.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Ilisha Healthcare?</h2>
            <p className="text-xl text-gray-600">Building careers while caring for our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="medical-card text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-medical-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Meaningful Work</h3>
                <p className="text-gray-600">
                  Make a real difference in patients' lives while advancing your career 
                  in a supportive healthcare environment.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card text-center">
              <CardContent className="p-6">
                <GraduationCap className="h-12 w-12 text-medical-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Continuous Learning</h3>
                <p className="text-gray-600">
                  Access to ongoing training, workshops, and professional development 
                  opportunities to enhance your skills.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-medical-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Team Collaboration</h3>
                <p className="text-gray-600">
                  Work with a diverse team of healthcare professionals in a 
                  collaborative and inclusive environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600">Explore career opportunities at Ilisha Healthcare</p>
          </div>

          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="medical-card">
                <Collapsible>
                  <CollapsibleTrigger className="w-full">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="text-left">
                          <div className="flex items-center gap-4 mb-2">
                            <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                            <Badge variant="outline">{job.type}</Badge>
                          </div>
                          <div className="flex items-center gap-6 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1" />
                              {job.department}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.experience}
                            </div>
                            <div className="font-semibold text-medical-teal">
                              {job.salary}
                            </div>
                          </div>
                        </div>
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6">
                      <div className="border-t pt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-3">Job Description</h4>
                              <p className="text-gray-600">{job.description}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-3">Requirements</h4>
                              <ul className="space-y-2">
                                {job.requirements.map((req, index) => (
                                  <li key={index} className="text-gray-600 flex items-start">
                                    <span className="text-medical-teal mr-2">•</span>
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-3">Responsibilities</h4>
                              <ul className="space-y-2">
                                {job.responsibilities.map((resp, index) => (
                                  <li key={index} className="text-gray-600 flex items-start">
                                    <span className="text-medical-teal mr-2">•</span>
                                    {resp}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="flex gap-3">
                              <Button 
                                onClick={() => setSelectedJob(job.id)}
                                className="medical-button"
                              >
                                Apply Now
                              </Button>
                              <Button variant="outline">
                                Share Job
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {selectedJob && (
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-2xl mx-auto">
              <Card className="medical-card">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Submit Your Application</h2>
                    <p className="text-gray-600">
                      Apply for: {jobOpenings.find(job => job.id === selectedJob)?.title}
                    </p>
                  </div>
                  
                  <form onSubmit={handleJobApplication} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          type="text"
                          value={applicationData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={applicationData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={applicationData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Position Applied For</Label>
                        <Select 
                          value={applicationData.position} 
                          onValueChange={(value) => handleInputChange("position", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select position" />
                          </SelectTrigger>
                          <SelectContent>
                            {jobOpenings.map((job) => (
                              <SelectItem key={job.id} value={job.title}>
                                {job.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Input
                          id="experience"
                          type="text"
                          value={applicationData.experience}
                          onChange={(e) => handleInputChange("experience", e.target.value)}
                          placeholder="e.g., 5 years"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="education">Highest Education</Label>
                        <Input
                          id="education"
                          type="text"
                          value={applicationData.education}
                          onChange={(e) => handleInputChange("education", e.target.value)}
                          placeholder="e.g., MBBS, B.Sc Nursing"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="coverLetter">Cover Letter</Label>
                      <Textarea
                        id="coverLetter"
                        value={applicationData.coverLetter}
                        onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                        placeholder="Tell us why you're interested in this position..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Upload Resume</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                        <p className="text-sm text-gray-500">PDF, DOC, DOCX (max 5MB)</p>
                        <Button type="button" variant="outline" className="mt-2">
                          Choose File
                        </Button>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" className="flex-1 medical-button">
                        Submit Application
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setSelectedJob(null)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Employee Benefits */}
      <section className="section-padding bg-medical-light-blue">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Employee Benefits</h2>
            <p className="text-xl text-gray-600">We care about our team's well-being and growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                <h3 className="font-semibold text-gray-800">Health Insurance</h3>
                <p className="text-sm text-gray-600">Comprehensive medical coverage</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                <h3 className="font-semibold text-gray-800">Professional Development</h3>
                <p className="text-sm text-gray-600">Training and certification support</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                <h3 className="font-semibold text-gray-800">Work-Life Balance</h3>
                <p className="text-sm text-gray-600">Flexible schedules and time off</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
                <h3 className="font-semibold text-gray-800">Competitive Salary</h3>
                <p className="text-sm text-gray-600">Market-competitive compensation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
