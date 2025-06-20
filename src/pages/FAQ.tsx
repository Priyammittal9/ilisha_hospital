
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Search, Phone, Mail, MessageCircle } from "lucide-react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqCategories = [
    {
      category: "General Information",
      faqs: [
        {
          id: "general-1",
          question: "What are the hospital visiting hours?",
          answer: "Our general visiting hours are from 10:00 AM to 8:00 PM daily. However, ICU visiting hours are restricted to 11:00 AM to 12:00 PM and 5:00 PM to 6:00 PM. Emergency services are available 24/7."
        },
        {
          id: "general-2",
          question: "Where is Ilisha Healthcare located?",
          answer: "We are located in Sector 62, Noida, Uttar Pradesh 201309. The hospital is easily accessible by metro, bus, and private vehicles with ample parking space available."
        },
        {
          id: "general-3",
          question: "How can I book an appointment?",
          answer: "You can book an appointment through our website, by calling our appointment desk at +91-120-456-7892, via WhatsApp, or by visiting the hospital directly. Online booking is available 24/7."
        },
        {
          id: "general-4",
          question: "What documents do I need to bring for admission?",
          answer: "Please bring a valid photo ID (Aadhaar, passport, or driving license), insurance card (if applicable), previous medical records, and a list of current medications."
        }
      ]
    },
    {
      category: "Appointments & Services",
      faqs: [
        {
          id: "appointment-1",
          question: "Can I reschedule or cancel my appointment?",
          answer: "Yes, you can reschedule or cancel your appointment up to 2 hours before the scheduled time. Please call our appointment desk or use our online portal to make changes."
        },
        {
          id: "appointment-2",
          question: "Do you provide emergency services?",
          answer: "Yes, we provide 24/7 emergency services with a dedicated emergency department, trauma care unit, and ambulance services. Our emergency helpline is +91-120-456-7891."
        },
        {
          id: "appointment-3",
          question: "What specialties are available at the hospital?",
          answer: "We offer comprehensive healthcare services including Cardiology, Neurology, Orthopedics, Pediatrics, Gynecology, General Medicine, Ophthalmology, Gastroenterology, and more."
        },
        {
          id: "appointment-4",
          question: "Do you provide home healthcare services?",
          answer: "Yes, we offer select home healthcare services including nursing care, physiotherapy, and diagnostic sample collection. Contact us for more details about availability in your area."
        }
      ]
    },
    {
      category: "Insurance & Billing",
      faqs: [
        {
          id: "insurance-1",
          question: "What insurance plans do you accept?",
          answer: "We accept most major insurance providers including HDFC ERGO, ICICI Lombard, Bajaj Allianz, Star Health, and government schemes like CGHS, ECHS. Please verify your specific plan with our billing department."
        },
        {
          id: "insurance-2",
          question: "Do you provide cashless treatment?",
          answer: "Yes, we provide cashless treatment for most insurance policies. Please bring your insurance card and ensure pre-authorization for planned procedures."
        },
        {
          id: "insurance-3",
          question: "What payment methods do you accept?",
          answer: "We accept cash, debit/credit cards, UPI payments, net banking, and medical insurance. EMI options are also available for certain procedures."
        },
        {
          id: "insurance-4",
          question: "Can I get a cost estimate before treatment?",
          answer: "Yes, we provide detailed cost estimates for all planned procedures. Our billing team will explain all charges and help you understand insurance coverage."
        }
      ]
    },
    {
      category: "COVID-19 Safety",
      faqs: [
        {
          id: "covid-1",
          question: "What COVID-19 safety measures are in place?",
          answer: "We follow strict COVID-19 protocols including mandatory masks, temperature screening, sanitization, social distancing, and separate COVID care areas to ensure patient and staff safety."
        },
        {
          id: "covid-2",
          question: "Do you provide COVID-19 testing?",
          answer: "Yes, we provide RT-PCR, Rapid Antigen, and Antibody tests for COVID-19. Both walk-in and home collection services are available."
        },
        {
          id: "covid-3",
          question: "Are vaccinations available at the hospital?",
          answer: "Yes, we provide COVID-19 vaccinations as well as routine immunizations for children and adults. Please check our vaccination schedule or call for appointments."
        },
        {
          id: "covid-4",
          question: "What should I do if I have COVID-19 symptoms?",
          answer: "If you have symptoms like fever, cough, or difficulty breathing, please call our helpline first. We have dedicated COVID care facilities and will guide you on the next steps."
        }
      ]
    },
    {
      category: "Facilities & Amenities",
      faqs: [
        {
          id: "facilities-1",
          question: "Do you have parking facilities?",
          answer: "Yes, we have ample parking space for both two-wheelers and four-wheelers. Parking is free for the first 2 hours and nominal charges apply thereafter."
        },
        {
          id: "facilities-2",
          question: "Is there a cafeteria or food service?",
          answer: "Yes, we have a cafeteria on the ground floor serving healthy meals, snacks, and beverages. We also provide patient meal services as per dietary requirements."
        },
        {
          id: "facilities-3",
          question: "Do you have an in-house pharmacy?",
          answer: "Yes, we have a 24/7 pharmacy stocked with all essential medications. We also provide home delivery services for medications within a 10km radius."
        },
        {
          id: "facilities-4",
          question: "Are there accommodation facilities for attendants?",
          answer: "Yes, we provide comfortable attendant rooms and guest house facilities. Some patient rooms also have provision for one attendant to stay overnight."
        }
      ]
    },
    {
      category: "Medical Records & Reports",
      faqs: [
        {
          id: "records-1",
          question: "How can I get my medical reports?",
          answer: "Medical reports are available 24-48 hours after tests. You can collect them from the lab, access them through our patient portal, or request home delivery for a small fee."
        },
        {
          id: "records-2",
          question: "Can I get my medical records transferred?",
          answer: "Yes, you can request transfer of your medical records to another healthcare provider. Please fill out a medical records request form and provide proper identification."
        },
        {
          id: "records-3",
          question: "How long are medical records maintained?",
          answer: "We maintain medical records for a minimum of 7 years as per medical council guidelines. Digital records are maintained for longer periods for easy access."
        },
        {
          id: "records-4",
          question: "Can family members access patient reports?",
          answer: "Family members can access reports with proper authorization from the patient or legal guardian. Valid ID and relationship proof are required."
        }
      ]
    }
  ];

  const allFaqs = faqCategories.flatMap(category => 
    category.faqs.map(faq => ({ ...faq, category: category.category }))
  );

  const filteredFaqs = allFaqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding text-white">
        <div className="container-width text-center">
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about our services, policies, and procedures. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="container-width">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            {searchTerm ? (
              // Show filtered results
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Search Results ({filteredFaqs.length})
                </h2>
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq) => (
                    <Card key={faq.id} className="medical-card">
                      <Collapsible 
                        open={openItems.includes(faq.id)}
                        onOpenChange={() => toggleItem(faq.id)}
                      >
                        <CollapsibleTrigger className="w-full">
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                              <div className="text-left">
                                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                  {faq.question}
                                </h3>
                                <p className="text-sm text-medical-teal">{faq.category}</p>
                              </div>
                              {openItems.includes(faq.id) ? (
                                <ChevronUp className="h-5 w-5 text-gray-500" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                              )}
                            </div>
                          </CardContent>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="px-6 pb-6">
                            <div className="border-t pt-4">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-600 text-lg">No questions found matching your search.</p>
                    <Button 
                      onClick={() => setSearchTerm("")}
                      className="mt-4 medical-button"
                    >
                      Clear Search
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              // Show categorized FAQs
              <div className="space-y-8">
                {faqCategories.map((category) => (
                  <div key={category.category}>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-medical-teal pb-2">
                      {category.category}
                    </h2>
                    <div className="space-y-4">
                      {category.faqs.map((faq) => (
                        <Card key={faq.id} className="medical-card">
                          <Collapsible 
                            open={openItems.includes(faq.id)}
                            onOpenChange={() => toggleItem(faq.id)}
                          >
                            <CollapsibleTrigger className="w-full">
                              <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                  <h3 className="text-left text-lg font-semibold text-gray-800">
                                    {faq.question}
                                  </h3>
                                  {openItems.includes(faq.id) ? (
                                    <ChevronUp className="h-5 w-5 text-gray-500" />
                                  ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-500" />
                                  )}
                                </div>
                              </CardContent>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <CardContent className="px-6 pb-6">
                                <div className="border-t pt-4">
                                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                              </CardContent>
                            </CollapsibleContent>
                          </Collapsible>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="bg-medical-light-blue section-padding">
        <div className="container-width">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-600">
              Our support team is here to help you with any additional questions or concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="medical-card text-center">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-medical-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our support team</p>
                <Button 
                  onClick={() => window.open("tel:+911204567890", "_self")}
                  className="medical-button"
                >
                  +91-120-456-7890
                </Button>
              </CardContent>
            </Card>

            <Card className="medical-card text-center">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-medical-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us your questions via email</p>
                <Button 
                  onClick={() => window.open("mailto:info@ilishahealthcare.com", "_self")}
                  variant="outline" 
                  className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white"
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="medical-card text-center">
              <CardContent className="p-6">
                <MessageCircle className="h-12 w-12 text-medical-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with us on WhatsApp</p>
                <Button 
                  onClick={() => {
                    const message = "Hello! I have a question about your services.";
                    const whatsappUrl = `https://wa.me/911204567890?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-50 py-8">
        <div className="container-width">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="sm">Patient Registration</Button>
              <Button variant="outline" size="sm">Insurance Information</Button>
              <Button variant="outline" size="sm">Hospital Policies</Button>
              <Button variant="outline" size="sm">Visiting Guidelines</Button>
              <Button variant="outline" size="sm">Medical Records</Button>
              <Button variant="outline" size="sm">Billing Support</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
