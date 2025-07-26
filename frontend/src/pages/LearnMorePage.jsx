import React from 'react';
import { BookOpen, Video, Users, Star, ChefHat, Utensils, Clock, TrendingUp } from 'lucide-react';

const LearnMorePage = () => {
  return (
    <div className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Learn More About Cooking</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cooking techniques, tips, and resources that will transform your culinary skills 
            and inspire your kitchen adventures.
          </p>
        </div>

        {/* Categories Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Recipe Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Appetizers", count: "125 recipes", icon: "🥗", color: "bg-green-100 text-green-700" },
              { name: "Main Courses", count: "250 recipes", icon: "🍖", color: "bg-red-100 text-red-700" },
              { name: "Desserts", count: "180 recipes", icon: "🍰", color: "bg-pink-100 text-pink-700" },
              { name: "Beverages", count: "95 recipes", icon: "🥤", color: "bg-blue-100 text-blue-700" },
              { name: "Breakfast", count: "160 recipes", icon: "🥞", color: "bg-yellow-100 text-yellow-700" },
              { name: "Vegetarian", count: "200 recipes", icon: "🥕", color: "bg-orange-100 text-orange-700" },
              { name: "Quick Meals", count: "140 recipes", icon: "⚡", color: "bg-purple-100 text-purple-700" },
              { name: "International", count: "300 recipes", icon: "🌎", color: "bg-indigo-100 text-indigo-700" }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center cursor-pointer group">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 transition-colors">{category.name}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                  {category.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <Video className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">Step-by-step video guides for complex techniques and recipes.</p>
              <button className="text-orange-600 hover:text-orange-700 font-medium">Watch Now →</button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <BookOpen className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cooking Guides</h3>
              <p className="text-gray-600 mb-4">Comprehensive written guides covering cooking fundamentals.</p>
              <button className="text-green-600 hover:text-green-700 font-medium">Read More →</button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community Forum</h3>
              <p className="text-gray-600 mb-4">Connect with other cooks, share tips, and get answers.</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Join Discussion →</button>
            </div>
          </div>
        </div>

        {/* Cooking Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Essential Cooking Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <ChefHat className="w-6 h-6 text-orange-600 mr-2" />
                Kitchen Fundamentals
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><span className="text-green-600 mr-2 mt-1">•</span>Keep your knives sharp for safer and more efficient cutting</li>
                <li className="flex items-start"><span className="text-green-600 mr-2 mt-1">•</span>Prep all ingredients before you start cooking (mise en place)</li>
                <li className="flex items-start"><span className="text-green-600 mr-2 mt-1">•</span>Taste as you go and adjust seasoning accordingly</li>
                <li className="flex items-start"><span className="text-green-600 mr-2 mt-1">•</span>Use room temperature ingredients for better mixing</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Utensils className="w-6 h-6 text-blue-600 mr-2" />
                Cooking Techniques
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><span className="text-blue-600 mr-2 mt-1">•</span>Master basic techniques: sautéing, roasting, and braising</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2 mt-1">•</span>Control heat properly - high for searing, low for simmering</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2 mt-1">•</span>Let meat rest after cooking for juicier results</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2 mt-1">•</span>Build flavors in layers throughout the cooking process</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Clock className="w-6 h-6 text-purple-600 mr-2" />
                Time Management
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><span className="text-purple-600 mr-2 mt-1">•</span>Plan your meals weekly to save time and reduce waste</li>
                <li className="flex items-start"><span className="text-purple-600 mr-2 mt-1">•</span>Batch cook staples like grains and proteins</li>
                <li className="flex items-start"><span className="text-purple-600 mr-2 mt-1">•</span>Keep a well-stocked pantry for quick meal solutions</li>
                <li className="flex items-start"><span className="text-purple-600 mr-2 mt-1">•</span>Use timers to prevent overcooking</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-red-600 mr-2" />
                Level Up Your Skills
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><span className="text-red-600 mr-2 mt-1">•</span>Experiment with new spices and flavor combinations</li>
                <li className="flex items-start"><span className="text-red-600 mr-2 mt-1">•</span>Learn to cook by sight, smell, and taste, not just timers</li>
                <li className="flex items-start"><span className="text-red-600 mr-2 mt-1">•</span>Practice plating and presentation techniques</li>
                <li className="flex items-start"><span className="text-red-600 mr-2 mt-1">•</span>Don't be afraid to make mistakes - they're learning opportunities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "10 Essential Knife Skills Every Cook Should Master",
                excerpt: "Learn the fundamental knife techniques that will make you faster and safer in the kitchen.",
                readTime: "8 min read",
                category: "Techniques"
              },
              {
                title: "Building the Perfect Spice Collection",
                excerpt: "Discover which spices to prioritize and how to store them for maximum flavor.",
                readTime: "6 min read",
                category: "Ingredients"
              },
              {
                title: "Meal Prep Like a Pro: Complete Guide",
                excerpt: "Transform your weekly cooking routine with these professional meal prep strategies.",
                readTime: "12 min read",
                category: "Planning"
              }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer group">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600"></div>
                <div className="p-6">
                  <span className="inline-block bg-orange-100 text-orange-700 text-xs font-medium px-2 py-1 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{article.readTime}</span>
                    <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-12 text-center">
          <Star className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Culinary Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of home cooks who have transformed their kitchens with our expert guidance.
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors mr-4">
            Browse Recipes
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
            Join Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnMorePage;
