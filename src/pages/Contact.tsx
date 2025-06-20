
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    department: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    console.log("Contact Form Data:", formData);
    toast.success("Thank you for your message! We'll get back to you within 24 hours.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      department: ""
    });
  };

  const handleWhatsAppClick = () => {
    const message = "Hello! I would like to inquire about your hospital services.";
    const whatsappUrl = `https://wa.me/911204567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleDirectionsClick = () => {
    const address = "Sector 62, Noida, Uttar Pradesh 201309";
    const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding text-white">
        <div className="container-width text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for appointments, inquiries, or any assistance. 
            We're here to help you with all your healthcare needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="medical-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
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
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Department</Label>
                      <Select 
                        value={formData.department} 
                        onValueChange={(value) => handleInputChange("department", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="appointment">Appointment</SelectItem>
                          <SelectItem value="emergency">Emergency</SelectItem>
                          <SelectItem value="billing">Billing</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Enter message subject"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Enter your message"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full medical-button">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-medical-teal mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Hospital Address</h3>
                      <p className="text-gray-600 mb-4">
                        Ilisha Healthcare & Multispeciality Hospital<br />
                        Sector 62, Noida<br />
                        Uttar Pradesh 201309, India
                      </p>
                      <Button 
                        onClick={handleDirectionsClick}
                        variant="outline" 
                        size="sm" 
                        className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white"
                      >
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-medical-teal mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Phone Numbers</h3>
                      <div className="space-y-2 text-gray-600">
                        <p>Main Reception: <a href="tel:+911204567890" className="text-medical-teal hover:underline">+91-120-456-7890</a></p>
                        <p>Emergency: <a href="tel:+911204567891" className="text-red-600 hover:underline">+91-120-456-7891</a></p>
                        <p>Appointment: <a href="tel:+911204567892" className="text-medical-teal hover:underline">+91-120-456-7892</a></p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-medical-teal mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Email Addresses</h3>
                      <div className="space-y-2 text-gray-600">
                        <p>General: <a href="mailto:info@ilishahealthcare.com" className="text-medical-teal hover:underline">info@ilishahealthcare.com</a></p>
                        <p>Appointments: <a href="mailto:appointments@ilishahealthcare.com" className="text-medical-teal hover:underline">appointments@ilishahealthcare.com</a></p>
                        <p>Emergency: <a href="mailto:emergency@ilishahealthcare.com" className="text-red-600 hover:underline">emergency@ilishahealthcare.com</a></p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-medical-teal mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Hospital Hours</h3>
                      <div className="space-y-2 text-gray-600">
                        <p>Emergency: 24/7</p>
                        <p>OPD: Mon-Sat, 8:00 AM - 8:00 PM</p>
                        <p>Sunday: 9:00 AM - 2:00 PM</p>
                        <p>ICU/Admissions: 24/7</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="medical-card bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MessageCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">WhatsApp Support</h3>
                      <p className="text-gray-600 mb-4">
                        Get instant support via WhatsApp for quick queries and appointment booking.
                      </p>
                      <Button 
                        onClick={handleWhatsAppClick}
                        className="bg-green-500 hover:bg-green-600 text-white"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Find Us on Map</h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8147916779765!2d77.36750631508!3d28.606889982432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1635784234567!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hospital Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 text-white py-8">
        <div className="container-width text-center">
          <h2 className="text-2xl font-bold mb-2">Medical Emergency?</h2>
          <p className="mb-4">Call our emergency hotline immediately for urgent medical care</p>
          <Button 
            onClick={() => window.open("tel:+911204567891", "_self")}
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3"
          >
            <Phone className="mr-2 h-5 w-5" />
            Emergency: +91-120-456-7891
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
