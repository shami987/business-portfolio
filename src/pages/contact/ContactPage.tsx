import { motion } from 'motion/react';
import { Facebook, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter } from 'lucide-react';
import './contact.styles.css';

export default function ContactPage() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Contact Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6 sm:mb-8">Let's Build Something Great Together</h2>

            <div className="space-y-6 sm:space-y-8 mb-10 sm:mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-600">shamicephas9@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Call Us</h4>
                  <p className="text-gray-600">+250 790 850 118</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Visit Us</h4>
                  <p className="text-gray-600"></p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors">
                <Github size={20} />
              </a>
            </div>

            <div className="mt-10">
              <a
                href="https://wa.me/250790850118"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-emerald-100"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            <form className="space-y-5 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all">
                  <option>Website Development</option>
                  <option>Mobile App Development</option>
                  <option>Custom Software</option>
                  <option>UI/UX Design</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-100">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
