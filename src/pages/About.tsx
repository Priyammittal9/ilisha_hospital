
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart, Shield, Target, Eye } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and personalized attention."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to providing the highest quality healthcare services and outcomes."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Building trust through transparency, safety protocols, and ethical practices."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaborative approach with multidisciplinary teams for optimal patient care."
    }
  ];

  const milestones = [
    { year: "2019", event: "Hospital established with 50-bed capacity" },
    { year: "2020", event: "Launched 24/7 emergency services" },
    { year: "2021", event: "Added advanced ICU and cardiac care unit" },
    { year: "2022", event: "Achieved NABH accreditation" },
    { year: "2023", event: "Expanded to 100 beds with new surgical suites" },
    { year: "2024", event: "Introduced telemedicine and digital health services" }
  ];

  const leadership = [
    {
      name: "Dr. Rajesh Gupta",
      position: "Chairman & Chief Medical Officer",
      qualification: "MBBS, MD (Medicine), FICP",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      description: "Leading cardiologist with 25+ years of experience in critical care and hospital administration."
    },
    {
      name: "Dr. Sunita Sharma",
      position: "Medical Director",
      qualification: "MBBS, MS (Surgery), FACS",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      description: "Renowned surgeon specializing in minimally invasive procedures and women's health."
    },
    {
      name: "Mr. Amit Kumar",
      position: "CEO & Administrator",
      qualification: "MBA (Healthcare), MHA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Healthcare management expert with extensive experience in hospital operations and strategic planning."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding text-white">
        <div className="container-width text-center">
          <h1 className="text-5xl font-bold mb-6">About Ilisha Healthcare</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A leading multispeciality hospital in Noida, committed to providing 
            world-class healthcare services with compassion, excellence, and innovation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="medical-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-medical-teal mr-3" />
                  <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide accessible, affordable, and quality healthcare services to our community 
                  while maintaining the highest standards of medical excellence, patient safety, and 
                  compassionate care. We strive to be the preferred healthcare destination by 
                  continuously innovating and adapting to the evolving needs of our patients.
                </p>
              </CardContent>
            </Card>

            <Card className="medical-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-medical-teal mr-3" />
                  <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be recognized as the leading healthcare institution in North India, 
                  setting benchmarks in clinical excellence, patient experience, and medical innovation. 
                  We envision a future where every individual has access to world-class healthcare 
                  services delivered with empathy and cutting-edge technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-medical-light-blue">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="medical-card text-center group">
                <CardContent className="p-6">
                  <div className="bg-medical-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-medical-teal transition-all duration-300">
                    <value.icon className="h-8 w-8 text-medical-teal group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced healthcare professionals leading our mission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="medical-card text-center group">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-medical-teal/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{leader.name}</h3>
                  <h4 className="text-medical-teal font-semibold mb-2">{leader.position}</h4>
                  <p className="text-sm text-gray-600 mb-3">{leader.qualification}</p>
                  <p className="text-gray-600">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones in our commitment to healthcare excellence</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-medical-teal"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  } ml-8 md:ml-0`}>
                    <Card className="medical-card">
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-bold text-medical-teal mb-2">{milestone.year}</h3>
                        <p className="text-gray-600">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-medical-teal rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                State-of-the-Art Infrastructure
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our modern facility spans across multiple floors with advanced medical 
                equipment, comfortable patient rooms, and specialized treatment areas 
                designed to provide the best possible care experience.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-medical-light-blue p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">100+ Beds</h4>
                  <p className="text-sm text-gray-600">Including ICU & HDU</p>
                </div>
                <div className="bg-medical-light-blue p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">10 OTs</h4>
                  <p className="text-sm text-gray-600">Modern operation theaters</p>
                </div>
                <div className="bg-medical-light-blue p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">24/7 Lab</h4>
                  <p className="text-sm text-gray-600">Diagnostic services</p>
                </div>
                <div className="bg-medical-light-blue p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">Emergency</h4>
                  <p className="text-sm text-gray-600">Round-the-clock care</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=300&h=300&fit=crop"
                alt="Hospital corridor"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=300&h=300&fit=crop"
                alt="Patient room"
                className="rounded-lg shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=300&h=300&fit=crop"
                alt="Medical equipment"
                className="rounded-lg shadow-lg -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=300&fit=crop"
                alt="Hospital exterior"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
