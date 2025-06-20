
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Cardiology", "Orthopedics", "Pediatrics", "General", "Emergency"];

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 45,
      location: "Noida",
      treatment: "Heart Surgery",
      category: "Cardiology",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face",
      text: "The care I received at Ilisha Healthcare was exceptional. Dr. Rajesh Gupta and his team performed my heart surgery with such precision and compassion. The nursing staff was incredibly supportive throughout my recovery. I'm grateful for the excellent treatment that gave me a new lease on life.",
      doctor: "Dr. Rajesh Gupta",
      date: "January 2024",
      verified: true,
      featured: true
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      age: 38,
      location: "Greater Noida",
      treatment: "Knee Replacement",
      category: "Orthopedics",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "After suffering from knee pain for years, I finally got my knee replacement done at Ilisha Healthcare. Dr. Sunita Sharma explained everything clearly and the surgery was a complete success. I'm back to my normal activities within 3 months. Highly recommend this hospital!",
      doctor: "Dr. Sunita Sharma",
      date: "December 2023",
      verified: true
    },
    {
      id: 3,
      name: "Anita Singh",
      age: 52,
      location: "Delhi",
      treatment: "Cancer Treatment",
      category: "Oncology",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "Fighting cancer was the toughest battle of my life, but the oncology team at Ilisha Healthcare made it bearable. Their compassionate care, advanced treatment options, and emotional support helped me through this difficult journey. I'm now cancer-free and eternally grateful.",
      doctor: "Dr. Sanjay Mishra",
      date: "November 2023",
      verified: true
    },
    {
      id: 4,
      name: "Amit Patel",
      age: 34,
      location: "Noida",
      treatment: "Emergency Care",
      category: "Emergency",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "I was rushed to Ilisha Healthcare after a serious accident. The emergency team acted swiftly and saved my life. The trauma care unit is world-class and the doctors are highly skilled. I'm alive today because of their quick response and excellent medical care.",
      doctor: "Emergency Team",
      date: "October 2023",
      verified: true
    },
    {
      id: 5,
      name: "Kavita Gupta",
      age: 29,
      location: "Ghaziabad",
      treatment: "Childbirth",
      category: "Maternity",
      rating: 5,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face",
      text: "My delivery experience at Ilisha Healthcare was wonderful. The maternity ward is comfortable and the doctors are very caring. Dr. Kavita Singh guided me through a smooth delivery and the NICU team took excellent care of my premature baby. Thank you for making this journey special.",
      doctor: "Dr. Kavita Singh",
      date: "September 2023",
      verified: true
    },
    {
      id: 6,
      name: "Rohit Sharma",
      age: 8,
      location: "Noida",
      treatment: "Pediatric Surgery",
      category: "Pediatrics",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "My son needed surgery and we were very worried. But Dr. Anjali Gupta and the pediatric team were amazing with children. They made my son comfortable and explained everything to us. The surgery was successful and the recovery was smooth. Excellent pediatric care!",
      doctor: "Dr. Anjali Gupta",
      date: "August 2023",
      verified: true,
      parentTestimonial: true,
      parentName: "Rohit Sharma (Father)"
    },
    {
      id: 7,
      name: "Deepika Verma",
      age: 41,
      location: "Noida",
      treatment: "Eye Surgery",
      category: "Ophthalmology",
      rating: 5,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face",
      text: "I was losing my vision due to cataracts and was very scared about surgery. Dr. Deepak Verma performed the cataract surgery with such skill that my vision is now better than it was 10 years ago. The whole process was painless and the results are incredible.",
      doctor: "Dr. Deepak Verma",
      date: "July 2023",
      verified: true
    },
    {
      id: 8,
      name: "Manoj Agarwal",
      age: 55,
      location: "Greater Noida",
      treatment: "Diabetes Management",
      category: "General",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Managing diabetes was becoming difficult until I met Dr. Manoj Agarwal at Ilisha Healthcare. His comprehensive approach to diabetes care, including diet counseling and medication management, has transformed my health. My sugar levels are now under control and I feel much better.",
      doctor: "Dr. Manoj Agarwal",
      date: "June 2023",
      verified: true
    }
  ];

  const videoTestimonials = [
    {
      id: "video-1",
      name: "Sunita Malik",
      treatment: "Heart Surgery Recovery",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=300&fit=crop",
      duration: "2:45"
    },
    {
      id: "video-2",
      name: "Vikas Singh",
      treatment: "Orthopedic Recovery",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      duration: "3:12"
    },
    {
      id: "video-3",
      name: "Neha Gupta",
      treatment: "Maternity Experience",
      thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
      duration: "2:28"
    }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => 
    selectedCategory === "all" || testimonial.category === selectedCategory
  );

  const featuredTestimonials = filteredTestimonials.slice(0, 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding text-white">
        <div className="container-width text-center">
          <h1 className="text-5xl font-bold mb-6">Patient Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Read real stories from our patients about their healthcare journey and 
            recovery experiences at Ilisha Healthcare.
          </p>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Stories</h2>
            <p className="text-xl text-gray-600">Inspiring recovery journeys from our patients</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="medical-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative p-8 bg-gradient-to-br from-medical-teal to-medical-blue text-white">
                  <Quote className="h-12 w-12 opacity-30 mb-4" />
                  <p className="text-lg leading-relaxed mb-6">
                    {featuredTestimonials[currentSlide]?.text}
                  </p>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    <img
                      src={featuredTestimonials[currentSlide]?.image}
                      alt={featuredTestimonials[currentSlide]?.name}
                      className="w-16 h-16 rounded-full border-2 border-white"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">
                        {featuredTestimonials[currentSlide]?.name}
                      </h4>
                      <p className="text-white/80">
                        {featuredTestimonials[currentSlide]?.treatment}
                      </p>
                      <p className="text-white/60 text-sm">
                        Treated by {featuredTestimonials[currentSlide]?.doctor}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <Badge className="mb-4 bg-medical-teal">
                      {featuredTestimonials[currentSlide]?.category}
                    </Badge>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Excellent Care & Recovery
                    </h3>
                    <p className="text-gray-600">
                      Patient Age: {featuredTestimonials[currentSlide]?.age} | 
                      Location: {featuredTestimonials[currentSlide]?.location}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Treatment Date: {featuredTestimonials[currentSlide]?.date}</span>
                      {featuredTestimonials[currentSlide]?.verified && (
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          ✓ Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center mt-6 space-x-4">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex space-x-2">
                {featuredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? "bg-medical-teal" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <Button
                onClick={nextSlide}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container-width">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "medical-button" : ""}
              >
                {category === "all" ? "All Stories" : category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="medical-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{testimonial.category}</Badge>
                    {testimonial.verified && (
                      <Badge className="bg-green-100 text-green-800">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 line-clamp-4">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.parentTestimonial ? testimonial.parentName : testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">{testimonial.treatment}</p>
                      <p className="text-xs text-gray-500">
                        {testimonial.location} • {testimonial.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Video Stories</h2>
            <p className="text-xl text-gray-600">Watch our patients share their experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTestimonials.map((video) => (
              <Card key={video.id} className="medical-card overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-full p-4">
                      <Play className="h-8 w-8 text-medical-teal" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-black/70 text-white">
                    {video.duration}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800">{video.name}</h3>
                  <p className="text-sm text-gray-600">{video.treatment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-medical-teal text-white section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Patient Satisfaction</h2>
            <p className="text-xl">Our commitment to excellence reflected in numbers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-white/80">Patient Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <p className="text-white/80">Patients Treated</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <p className="text-white/80">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-white/80">Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="section-padding">
        <div className="container-width text-center">
          <Card className="medical-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Share Your Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Help others by sharing your experience at Ilisha Healthcare. 
                Your story could inspire and guide someone else on their healthcare journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="medical-button">
                  Write a Review
                </Button>
                <Button variant="outline" className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white">
                  Submit Video Story
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
