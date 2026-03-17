import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
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

export default function HomePage() {
  return <Hero />;
}
