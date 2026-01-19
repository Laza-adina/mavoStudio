import React, { useState } from 'react';
import { Menu, X, Code, Palette, Users, Zap, Target, Shield, ArrowRight, Check, Mail, Phone, MapPin } from 'lucide-react';

export default function MavoStudio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-12 h-13 rounded-lg flex items-center justify-center ">
                <img src="M.png" alt="" className='mt-1'/>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">MAVO Studio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-yellow-500 transition">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-yellow-500 transition">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-yellow-500 transition">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-yellow-500 transition">Portfolio</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-yellow-500 transition">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition">Contact</button>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left py-2 text-gray-700">Portfolio</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-2 text-gray-700">Pricing</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-yellow-500">Contact</button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home"  className="pt-32 pb-20 px-4 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/cafe.png')" }}>
      
        <div className="max-w-7xl mx-auto text-center">
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            We Build Websites<br />That Make an <span className="text-yellow-500">Impact</span>
          </h1>
          <p className="text-xl md:text-2xl text-white-600 mb-8 max-w-3xl mx-auto">
            Mavo Studio creates modern, fast and professional websites for businesses.
          </p>
          <button onClick={() => scrollToSection('contact')} className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition inline-flex items-center">
            Get Your Website <ArrowRight className="ml-2" size={20} />
          </button>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Your website ready in 7 to 25 days</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Design</h3>
              <p className="text-gray-600">Clean, responsive and professional</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">Quality websites at competitive rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Who We Are</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Mavo Studio is a web development company specializing in modern website creation and outsourcing services. We focus on delivering simple, fast and efficient digital solutions for businesses around the world.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-black" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Simplicity</h4>
                    <p className="text-gray-600">Clear and efficient web solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-black" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Reliability</h4>
                    <p className="text-gray-600">On-time delivery and guaranteed quality</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Check className="text-black" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Performance</h4>
                    <p className="text-gray-600">Fast and optimized websites</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <Code size={64} className="mx-auto mb-4 text-yellow-400" />
                <p className="text-2xl font-bold">Design. Code. Impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <Code className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Business websites</li>
                <li>• Professional websites</li>
                <li>• Website redesign</li>
                <li>• Maintenance</li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="text-yellow-500 font-semibold hover:text-yellow-600">
              Request a Quote →
              </button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <Palette className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Figma mockups</li>
                <li>• Brand identity</li>
                <li>• Design system</li>
                <li>• Prototyping</li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="text-yellow-500 font-semibold hover:text-yellow-600">
              Request a Quote →
              </button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Outsourcing</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Front-end development</li>
                <li>• Back-end development</li>
                <li>• Web integration</li>
                <li>• Technical support</li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="text-yellow-500 font-semibold hover:text-yellow-600">
              Request a Quote →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Portfolio & Templates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Business', 'Restaurant', 'Hotel', 'Education', 'Store', 'Portfolio'].map((type, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="bg-gray-900 rounded-xl h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
                    <span className="text-black text-2xl font-bold">View Demo</span>
                  </div>
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Template {type}</h3>
                    <p className="text-gray-300">Modern & Responsive</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-2">Starter Website</h3>
              <div className="text-4xl font-bold text-yellow-400 mb-6">€400</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start"><Check className="text-yellow-400 mr-2 flex-shrink-0" size={20} /> 1–3 pages</li>
                <li className="flex items-start"><Check className="text-yellow-400 mr-2 flex-shrink-0" size={20} /> Premium design</li>
                <li className="flex items-start"><Check className="text-yellow-400 mr-2 flex-shrink-0" size={20} /> Mobile responsive</li>
                <li className="flex items-start"><Check className="text-yellow-400 mr-2 flex-shrink-0" size={20} /> Contact form</li>
                <li className="flex items-start"><Check className="text-yellow-400 mr-2 flex-shrink-0" size={20} /> Delivery: 7 days</li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
                Request Quote
              </button>
            </div>
            <div className="bg-yellow-400 text-black p-8 rounded-xl transform md:scale-105 shadow-2xl">
              <div className="bg-black text-yellow-400 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">POPULAR</div>
              <h3 className="text-2xl font-bold mb-2">Professional Website</h3>
              <div className="text-4xl font-bold mb-6">€800</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start"><Check className="mr-2 flex-shrink-0" size={20} /> 4–7 pages</li>
                <li className="flex items-start"><Check className="mr-2 flex-shrink-0" size={20} /> Custom design</li>
                <li className="flex items-start"><Check className="mr-2 flex-shrink-0" size={20} /> Animations</li>
                <li className="flex items-start"><Check className="mr-2 flex-shrink-0" size={20} /> SEO optimization</li>
                <li className="flex items-start"><Check className="mr-2 flex-shrink-0" size={20} /> 2 revisions</li>
                <li className="flex items-start"><Check className="mr-2 flex-shrink-0" size={20} /> Delivery: 10–14 days</li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="w-full bg-black text-yellow-400 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">
                Request Quote
              </button>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-2">Business Website</h3>
              <div className="text-4xl font-bold text-yellow-400 mb-6">€1200</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start"><Check className="text-yellow-400 mr-2 flex-shrink-0" size={20} /> 8–15 pages</li>
                <li className="flex items-start"><Check className="text-yellow-400 mr-2 flex-shrink-0" size={20} /> Fully custom design</li>
                <li className="flex items-start"><Check className="text-yellow-400 mr-2 flex-shrink-0" size={20} /> Performance optimized</li>
                <li className="flex items-start"><Check className="text-yellow-400 mr-2 flex-shrink-0" size={20} /> Enhanced security</li>
                <li className="flex items-start"><Check className="text-yellow-400 mr-2 flex-shrink-0" size={20} /> 1-month support</li>
                <li className="flex items-start"><Check className="text-yellow-400 mr-2 flex-shrink-0" size={20} /> Delivery: 15–25 days</li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">WhatsApp</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-400 focus:outline-none"
                ></textarea>
              </div>
              <button onClick={handleSubmit} className="w-full bg-yellow-400 text-black py-4 rounded-lg font-semibold hover:bg-yellow-500 transition text-lg">
                Send Message
              </button>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <Phone className="text-yellow-500 mr-3" size={24} />
                  <h3 className="font-bold text-lg">WhatsApp Business</h3>
                </div>
                <p className="text-gray-600">+261 34 51 595 68</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <Mail className="text-yellow-500 mr-3" size={24} />
                  <h3 className="font-bold text-lg">Email</h3>
                </div>
                <p className="text-gray-600">lazaher23@gmail.com</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <MapPin className="text-yellow-500 mr-3" size={24} />
                  <h3 className="font-bold text-lg">Location</h3>
                </div>
                <p className="text-gray-600">Antsirabe, Madagascar</p>
              </div>
              <div className="bg-yellow-400 p-6 rounded-xl text-center">
                <p className="text-black font-bold text-xl mb-2">Need a website in 7 days?</p>
                <p className="text-gray-900">Contact us now and let's make it happen!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-2">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">M</span>
                </div>
                <span className="ml-3 text-xl font-bold">MAVO Studio</span>
              </div>
              <p className="text-yellow-400 font-semibold">Design. Code. Impact.</p>
            </div>
            <div className="flex space-x-6 mb-6 md:mb-0">
              <button onClick={() => scrollToSection('home')} className="hover:text-yellow-400 transition">Home</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-yellow-400 transition">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-yellow-400 transition">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-yellow-400 transition">Contact</button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 MAVO Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}