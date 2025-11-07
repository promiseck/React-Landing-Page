import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './components/Logo';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      
      title: 'Vehicle Registration',
      description: 'Seamless online vehicle registration with instant digital certificates',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      
      title: 'Driver Licensing',
      description: 'Complete driver licensing services from application to renewal',
      image: 'https://images.unsplash.com/photo-1581093458791-8a6b6d47d0b9?w=400&h=300&fit=crop',
      color: 'from-green-500 to-emerald-500'
    },
    {
      
      title: 'Document Verification',
      description: 'Advanced digital verification system for all vehicle documents',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      color: 'from-purple-500 to-pink-500'
    },
    {
      
      title: 'Mobile Services',
      description: 'Complete your DVLA transactions right from your mobile device',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const officeLocations = [
    {
      name: 'Accra Main Office',
      address: 'Ring Road Central, Accra',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      phone: '+233 30 123 4567',
      coords: { lat: 5.6037, lng: -0.1870 }
    },
    {
      name: 'Kumasi Regional Office',
      address: 'Adum, Kumasi',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      phone: '+233 32 123 4567',
      coords: { lat: 6.7000, lng: -1.6161 }
    },
    {
      name: 'Takoradi Branch',
      address: 'Market Circle, Takoradi',
      hours: 'Mon-Fri: 8:00 AM - 4:00 PM',
      phone: '+233 31 123 4567',
      coords: { lat: 4.9016, lng: -1.7831 }
    }
  ];

  const stats = [
    { number: '2M+', label: 'Registered Vehicles', icon: '🚙' },
    { number: '1.5M+', label: 'Active Drivers', icon: '👨‍✈️' },
    { number: '98%', label: 'Customer Satisfaction', icon: '⭐' },
    { number: '24/7', label: 'Digital Support', icon: '🌐' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
            : 'bg-white/80 backdrop-blur-lg'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Logo className="w-12 h-12" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-700 to-accent-500 bg-clip-text text-transparent">
                  DVLA Ghana
                </h1>
                <p className="text-xs text-gray-600">Driver & Vehicle  Licensing Authority</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Home', 'Services', 'Locations', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
              <motion.button
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ color: '#000000' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 bg-white/95 backdrop-blur-lg rounded-2xl p-6 space-y-4 shadow-xl"
              >
                {['Home', 'Services', 'Locations', 'About', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-700 hover:text-primary-600 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section with Background Image */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-200">
                   Transforming Ghana's Road Services
                </span>
              </motion.div>

              {/* UPDATED HEADING TEXT */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="text-gray-900">
                  DVLA Digital
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                  Services Portal
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 mb-12 leading-relaxed"
              >
                Experience the future of vehicle and driver services with Ghana's first fully digital licensing authority. Fast, secure, and accessible anywhere.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.button
                  className="group bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Your Journey</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>

                <motion.button
                  className="group border-2 border-primary-200 text-primary-700 hover:bg-primary-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Watch Demo</span>
                  <span className="text-lg">🎥</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Feature Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Modern Car"
                className="rounded-3xl shadow-2xl"
              />
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100"
              >
                <div className="text-2xl font-bold text-primary-600">95%</div>
                <div className="text-sm text-gray-600">Digital Transactions</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Images */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Digital Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions designed for modern Ghanaian drivers and vehicle owners
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback image if the original fails to load
                      e.target.src = 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=400&h=300&fit=crop';
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20`}></div>
                </div>
                <div className="p-8">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-2 group">
                    <span>Learn More</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations & Map Section */}
      <section id="locations" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Office Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit any of our conveniently located offices across Ghana
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* ACTUAL MAP - Embedded Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Our Offices</h3>
              <div className="rounded-2xl overflow-hidden h-96 border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270646.372158983!2d-1.6161000000000002!3d5.603700000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdd98888be87a79%3A0x7c9aad2c347a0e4e!2sGreater%20Accra%20Region!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DVLA Ghana Office Locations"
                ></iframe>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>📍 <strong>Main Offices:</strong> Accra, Kumasi, Takoradi</p>
                <p>🕒 <strong>Business Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM</p>
              </div>
            </motion.div>

            {/* Office Locations List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {officeLocations.map((office, index) => (
                <motion.div
                  key={office.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{office.name}</h4>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center space-x-2">
                      <span>📍</span>
                      <span>{office.address}</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span>🕒</span>
                      <span>{office.hours}</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span>📞</span>
                      <span>{office.phone}</span>
                    </p>
                  </div>
                  <button className="mt-4 text-primary-600 hover:text-primary-700 font-semibold text-sm">
                    Get Directions →
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Go Digital?
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
              Join millions of Ghanaians who have transformed their vehicle and driver service experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download App
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Logo className="w-10 h-10" />
                <div>
                  <h3 className="text-xl font-bold">DVLA Ghana</h3>
                  <p className="text-gray-400 text-sm">Driver & Vehicle Licensing Authority</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Building the future of transportation in Ghana through digital innovation and excellent service delivery.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#locations" className="hover:text-white transition-colors">Locations</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Vehicle Registration</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Driver Licensing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Document Verification</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 Accra, Ghana</li>
                <li>📞 +233 30 123 4567</li>
                <li>✉️ info@dvla.gov.gh</li>
                <li>🕒 Mon-Fri: 8:00 AM - 5:00 PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 DVLA Ghana. All rights reserved. | Building a Digital Ghana</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;