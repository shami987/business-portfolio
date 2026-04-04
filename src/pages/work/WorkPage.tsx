import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../lib/constants';
import './work.styles.css';

export default function WorkPage() {
  return (
    <section id="work" className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Our Work</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Featured Projects</h2>
        </div>

        <div className="flex flex-col divide-y divide-gray-100">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-8 sm:gap-12 py-16 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl shadow-indigo-950/80">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full aspect-video object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Details */}
              <div className="w-full md:w-1/2 flex flex-col gap-5">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{project.name}</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{project.description}</p>
                <p className="text-indigo-500 font-medium text-sm">/ {project.client}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link || '#'}
                  target={project.link ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="mt-2 self-start flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors duration-300">
                  View case study <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
