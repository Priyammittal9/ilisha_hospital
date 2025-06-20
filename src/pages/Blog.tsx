
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Health Tips", "Medical News", "Wellness", "Prevention", "Treatment"];

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Heart Health Tips for a Stronger Tomorrow",
      excerpt: "Discover proven strategies to maintain cardiovascular health and prevent heart disease through lifestyle changes and preventive care.",
      category: "Health Tips",
      author: "Dr. Rajesh Gupta",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Understanding Diabetes: Prevention and Management",
      excerpt: "A comprehensive guide to understanding diabetes, its risk factors, and effective management strategies for better health outcomes.",
      category: "Prevention",
      author: "Dr. Manoj Agarwal",
      date: "2024-01-12",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559757164-f012e9ef5634?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Mental Health Awareness: Breaking the Stigma",
      excerpt: "Exploring the importance of mental health awareness and how to support mental wellness in our community.",
      category: "Wellness",
      author: "Dr. Priya Mehta",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Latest Advances in Minimally Invasive Surgery",
      excerpt: "Discover how minimally invasive surgical techniques are revolutionizing patient care with faster recovery times.",
      category: "Medical News",
      author: "Dr. Sunita Sharma",
      date: "2024-01-08",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Nutrition Guidelines for Healthy Aging",
      excerpt: "Learn about essential nutrients and dietary practices that support healthy aging and longevity.",
      category: "Health Tips",
      author: "Dr. Anjali Gupta",
      date: "2024-01-05",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Cancer Screening: Early Detection Saves Lives",
      excerpt: "Understanding the importance of regular cancer screenings and how early detection improves treatment outcomes.",
      category: "Prevention",
      author: "Dr. Sanjay Mishra",
      date: "2024-01-03",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      id: 7,
      title: "Pediatric Health: Essential Vaccinations for Children",
      excerpt: "A complete guide to childhood vaccinations and their importance in preventing serious diseases.",
      category: "Health Tips",
      author: "Dr. Rohit Sharma",
      date: "2024-01-01",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop"
    },
    {
      id: 8,
      title: "Women's Health: Regular Checkups and Screenings",
      excerpt: "Important health screenings every woman should know about for maintaining optimal health throughout life.",
      category: "Prevention",
      author: "Dr. Kavita Singh",
      date: "2023-12-28",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=250&fit=crop"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding text-white">
        <div className="container-width text-center">
          <h1 className="text-5xl font-bold mb-6">Health & Wellness Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay informed with the latest health tips, medical insights, and wellness advice 
            from our expert medical team.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "medical-button" : ""}
                >
                  {category === "all" ? "All Articles" : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === "all" && !searchTerm && (
        <section className="section-padding">
          <div className="container-width">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Article</h2>
            <Card className="medical-card overflow-hidden max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-medical-teal">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-3">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="medical-button w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            {selectedCategory === "all" ? "Latest Articles" : `${selectedCategory} Articles`}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="medical-card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-white/90 text-gray-700">
                    {post.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-medical-teal transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <Button variant="outline" size="sm" className="group-hover:bg-medical-teal group-hover:text-white group-hover:border-medical-teal">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="mt-4 medical-button"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-medical-teal text-white section-padding">
        <div className="container-width text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Health Tips</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter for the latest health insights and medical updates
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-gray-800"
            />
            <Button className="bg-white text-medical-teal hover:bg-gray-100 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
