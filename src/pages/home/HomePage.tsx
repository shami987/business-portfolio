import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, Users, FolderOpen, Clock, Star, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Hero3D } from '../../components/Hero3D';
import { SERVICES, PROJECTS, TESTIMONIALS } from '../../lib/constants';
import './home.styles.css';

const Hero = () => (
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
          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all flex items-center justify-center gap-2"
          >
            Get a Quote <ArrowRight size={20} />
          </Link>
          <Link
            to="/work"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all text-center"
          >
            View Our Work
          </Link>
        </div>
      </motion.div>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
      <ChevronDown className="text-white/50" size={32} />
    </div>
  </section>
);

const stats = [
  { icon: FolderOpen, label: 'Projects Completed', value: '20+' },
  { icon: Users, label: 'Happy Clients', value: '15+' },
  { icon: Clock, label: 'Years Experience', value: '1+' },
  { icon: Star, label: 'Client Satisfaction', value: '98%' },
];

const Stats = () => (
  <section className="py-16 bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ icon: Icon, label, value }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
              <Icon className="text-indigo-600" size={24} />
            </div>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-gray-500 font-medium">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesPreview = () => (
  <section className="py-20 sm:py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Our Services</h2>
        </div>
        <Link to="/services" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
          View All Services <ArrowRight size={20} />
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES.slice(0, 3).map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">{service.title}</h3>
            <p className="text-gray-600 mb-5 text-sm sm:text-base">{service.description}</p>
            <ul className="space-y-2">
              {service.features.slice(0, 3).map((f) => (
                <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle2 size={16} className="text-indigo-500 shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedWork = () => (
  <section className="py-20 sm:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Our Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Featured Projects</h2>
        </div>
        <Link to="/work" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
          See All Projects <ArrowRight size={20} />
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {PROJECTS.slice(0, 2).map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-gray-900"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full aspect-video object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-8 flex flex-col justify-end">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 sm:py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Testimonials</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">What Our Clients Say</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm"
          >
            <p className="text-base sm:text-lg text-gray-700 italic mb-6">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
              <div>
                <h4 className="font-bold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-20 sm:py-24 bg-indigo-600 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Ready to Start Your Project?</h2>
      <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
        Request a free consultation today and let's discuss how we can help your business grow digitally.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <Link to="/contact" className="bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-indigo-50 transition-all shadow-xl">
          Request a Free Consultation
        </Link>
        <Link to="/pricing" className="bg-indigo-500 text-white border border-indigo-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-indigo-400 transition-all">
          View Pricing
        </Link>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <FeaturedWork />
      <Testimonials />
      <CTA />
    </>
  );
}
