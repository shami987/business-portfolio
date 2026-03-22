import { motion } from 'motion/react';
import './about.styles.css';

export default function AboutPage() {
  return (
    <section id="about" className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">Our Story & Mission</h2>
            <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                Founded in 2025, NovaSoft Digital Solutions began with a simple vision: to bridge the gap between complex technology and business growth. We started as a small team of passionate developers and have grown into a full-service digital agency.
              </p>
              <p>
                Our mission is to empower businesses of all sizes with cutting-edge digital tools that are not only powerful but also intuitive and beautiful. We believe that every business deserves a digital presence that reflects its excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-base">To be the global leader in delivering innovative digital experiences that inspire and transform.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Our Values</h4>
                  <p className="text-base">Innovation, Integrity, Excellence, and Client-Centricity drive everything we do.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://www.tek-task.com/sites/default/files/styles/marketing_slide/public/1046x616_hitech.jpg?itok=tG31DyP4"
                alt="Team working"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-indigo-600 text-white p-8 rounded-2xl shadow-xl hidden lg:block">
              <p className="text-4xl font-bold">1+</p>
              <p className="text-sm font-medium opacity-80">Years of Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
