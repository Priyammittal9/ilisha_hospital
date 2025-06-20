
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, FileText } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

const Appointment = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    timeSlot: "",
    reason: "",
    previousVisit: "no"
  });

  const departments = [
    "Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Gynecology",
    "General Medicine", "Ophthalmology", "Gastroenterology", "Dermatology", "Urology"
  ];

  const doctorsByDepartment = {
    "Cardiology": ["Dr. Rajesh Gupta", "Dr. Amit Sharma"],
    "Neurology": ["Dr. Priya Mehta", "Dr. Vikram Singh"],
    "Orthopedics": ["Dr. Sunita Sharma", "Dr. Ravi Kumar"],
    "Pediatrics": ["Dr. Anjali Gupta", "Dr. Rohit Sharma"],
    "Gynecology": ["Dr. Kavita Singh", "Dr. Deepika Verma"],
    "General Medicine": ["Dr. Manoj Agarwal", "Dr. Neha Jain"],
    "Ophthalmology": ["Dr. Kavita Singh", "Dr. Deepak Verma"],
    "Gastroenterology": ["Dr. Sanjay Mishra", "Dr. Rekha Sharma"],
    "Dermatology": ["Dr. Pooja Gupta", "Dr. Alok Verma"],
    "Urology": ["Dr. Rahul Saxena", "Dr. Smita Joshi"]
  };

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || 
        !formData.department || !formData.doctor || !date || !formData.timeSlot) {
      toast.error("Please fill all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    // Simulate appointment booking
    const appointmentData = {
      ...formData,
      date: format(date, "PPP"),
      appointmentId: `APP${Date.now()}`
    };

    console.log("Appointment Data:", appointmentData);
    
    toast.success("Appointment booked successfully! You will receive a confirmation email shortly.");
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
      doctor: "",
      timeSlot: "",
      reason: "",
      previousVisit: "no"
    });
    setDate(undefined);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding text-white">
        <div className="container-width text-center">
          <h1 className="text-5xl font-bold mb-6">Book Your Appointment</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Schedule your visit with our expert doctors. Choose your preferred date, 
            time, and specialist for personalized healthcare.
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-800 flex items-center justify-center">
                  <CalendarIcon className="mr-2 h-6 w-6 text-medical-teal" />
                  Schedule Your Appointment
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center">
                        <Phone className="mr-2 h-4 w-4" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>

                  {/* Department and Doctor Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Department *</Label>
                      <Select 
                        value={formData.department} 
                        onValueChange={(value) => {
                          handleInputChange("department", value);
                          handleInputChange("doctor", ""); // Reset doctor when department changes
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept} value={dept}>
                              {dept}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Preferred Doctor *</Label>
                      <Select 
                        value={formData.doctor} 
                        onValueChange={(value) => handleInputChange("doctor", value)}
                        disabled={!formData.department}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select doctor" />
                        </SelectTrigger>
                        <SelectContent>
                          {formData.department && doctorsByDepartment[formData.department as keyof typeof doctorsByDepartment]?.map((doctor) => (
                            <SelectItem key={doctor} value={doctor}>
                              {doctor}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Date and Time Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="flex items-center">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        Preferred Date *
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) =>
                              date < new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        Preferred Time *
                      </Label>
                      <Select 
                        value={formData.timeSlot} 
                        onValueChange={(value) => handleInputChange("timeSlot", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Previous Visit */}
                  <div className="space-y-2">
                    <Label>Have you visited our hospital before?</Label>
                    <Select 
                      value={formData.previousVisit} 
                      onValueChange={(value) => handleInputChange("previousVisit", value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">No, this is my first visit</SelectItem>
                        <SelectItem value="yes">Yes, I'm a returning patient</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Reason for Visit */}
                  <div className="space-y-2">
                    <Label htmlFor="reason" className="flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      Reason for Visit
                    </Label>
                    <Textarea
                      id="reason"
                      value={formData.reason}
                      onChange={(e) => handleInputChange("reason", e.target.value)}
                      placeholder="Please describe your symptoms or reason for the visit"
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button type="submit" className="medical-button px-12 py-3 text-lg">
                      Book Appointment
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <Clock className="h-8 w-8 text-medical-teal mx-auto" />
                  <h3 className="font-semibold">Quick Booking</h3>
                  <p className="text-sm text-gray-600">Get confirmation within 2 hours</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <Phone className="h-8 w-8 text-medical-teal mx-auto" />
                  <h3 className="font-semibold">Need Help?</h3>
                  <p className="text-sm text-gray-600">Call us at +91-120-456-7890</p>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <Mail className="h-8 w-8 text-medical-teal mx-auto" />
                  <h3 className="font-semibold">Email Confirmation</h3>
                  <p className="text-sm text-gray-600">Receive appointment details via email</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="bg-red-50 border-l-4 border-red-500 p-4 mx-4 mb-8">
        <div className="container-width">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              Medical Emergency?
            </h3>
            <p className="text-red-700 mb-4">
              For urgent medical care, please visit our emergency department or call our emergency hotline immediately.
            </p>
            <Button 
              onClick={() => window.open("tel:+911204567890", "_self")}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <Phone className="mr-2 h-4 w-4" />
              Emergency: +91-120-456-7890
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
