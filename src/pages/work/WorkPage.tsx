import { motion } from 'motion/react';
import { PROJECTS } from '../../lib/constants';
import './work.styles.css';

export default function WorkPage() {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Our Work</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Featured Projects</h2>
          </div>
          <p className="text-gray-600 max-w-md text-lg">
            A glimpse into the digital solutions we've crafted for our diverse range of clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-900"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full aspect-video object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                <span className="text-indigo-400 font-medium text-sm mb-2">{project.client}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
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
}
