import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = ({ onNavigate }) => {
  const handleSocialClick = (platform) => {
    switch (platform) {
      case 'facebook':
        window.open('https://facebook.com/deliciarecipes', '_blank');
        break;
      case 'instagram':
        window.open('https://instagram.com/deliciarecipes', '_blank');
        break;
      case 'email':
        window.location.href = 'mailto:hello@deliciarecipes.com';
        break;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-400">Delicia Recipes</h3>
            <p className="text-gray-300 leading-relaxed">
              Discover amazing recipes from around the world. From quick weeknight dinners to elegant weekend feasts.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleSocialClick('facebook')}
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} />
              </button>
              <button
                onClick={() => handleSocialClick('instagram')}
                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </button>
              <button
                onClick={() => handleSocialClick('email')}
                className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Send us an email"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => onNavigate('about')}
                className="block text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                About Us
              </button>
              <button
                onClick={() => onNavigate('learn-more')}
                className="block text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                Learn More
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="block text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                Contact Us
              </button>
              <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors duration-200">
                Recipe Categories
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-orange-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-orange-400" />
                <span className="text-gray-300">hello@deliciarecipes.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-orange-400" />
                <span className="text-gray-300">123 Culinary Street, Food City</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-400">Business Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-orange-400" />
                <div className="text-gray-300">
                  <div>Mon - Fri: 9AM - 6PM</div>
                  <div>Sat - Sun: 10AM - 4PM</div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="text-sm font-medium text-orange-400 mb-2">Newsletter</h5>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-orange-400 focus:outline-none text-sm"
                />
                <button className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2025 Delicia Recipes. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;