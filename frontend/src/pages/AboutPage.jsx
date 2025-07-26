import React from 'react';
import { Heart, Users, Award, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Delicia Recipes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about bringing people together through the joy of cooking and sharing delicious meals.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2025 by a group of culinary enthusiasts, Delicia Recipes began as a small blog 
                sharing family recipes and cooking tips. Today, we've grown into a comprehensive platform 
                that serves food lovers worldwide.
              </p>
              <p>
                Our mission is simple: to make cooking accessible, enjoyable, and rewarding for everyone. 
                Whether you're a beginner learning to boil water or a seasoned chef looking for inspiration, 
                we have something special for you.
              </p>
              <p>
                Every recipe on our platform is tested, tasted, and perfected by our team of culinary experts. 
                We believe that great food brings people together and creates lasting memories.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Our kitchen team" 
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-semibold mb-4">Why Choose Delicia?</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Expert-tested recipes</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Step-by-step instructions</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Nutritional information</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Video tutorials</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Community support</li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">We love what we do and it shows in every recipe we share.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Building connections through shared culinary experiences.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">Every recipe is carefully curated and thoroughly tested.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Globe className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Diversity</h3>
              <p className="text-gray-600">Celebrating flavors and traditions from around the world.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Chef Maria Rodriguez",
                role: "Head Chef & Founder",
                image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=300",
                bio: "20+ years of culinary experience specializing in Mediterranean and Latin cuisine."
              },
              {
                name: "David Chen",
                role: "Recipe Developer",
                image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=300",
                bio: "Expert in Asian fusion cuisine with a passion for innovative flavor combinations."
              },
              {
                name: "Sarah Johnson",
                role: "Nutrition Specialist",
                image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300",
                bio: "Registered dietitian focused on creating healthy, delicious meals for families."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Culinary Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of our community and discover the joy of cooking with thousands of fellow food enthusiasts.
          </p>
          <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Start Cooking Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;