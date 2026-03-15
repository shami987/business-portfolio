import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { INDUSTRIES, PROCESS } from '../../lib/constants';
import { Hero3D } from '../../components/Hero3D';
import './home.styles.css';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-950 via-indigo-900 to-black">
        <Hero3D />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
            Build Modern Websites for Your Business
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-10">
            We design and develop high-performance websites, web applications, and digital solutions to help businesses grow.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              Get a Quote <ArrowRight size={20} />
            </a>
            <a
              href="#work"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all text-center"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown className="text-white/50" size={32} />
      </div>
    </section>
  );
};

const Industries = () => {
  return (
    <section className="py-24 bg-indigo-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-indigo-200 text-base sm:text-lg max-w-2xl mx-auto">
            We provide tailored digital solutions for a wide range of sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 sm:gap-4 group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-indigo-900 transition-all duration-300">
                <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <span className="font-semibold text-center text-sm sm:text-base">{industry}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">How We Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Our Proven Process</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

          {PROCESS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-indigo-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Ready to Start Your Project?</h2>
        <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
          Request a free consultation today and let's discuss how we can help your business grow digitally.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-indigo-50 transition-all shadow-xl"
          >
            Request a Free Consultation
          </a>
          <a
            href="#pricing"
            className="bg-indigo-500 text-white border border-indigo-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-indigo-400 transition-all"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Industries />
      <Process />
    </>
  );
}
