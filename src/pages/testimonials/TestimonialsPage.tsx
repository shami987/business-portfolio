import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../lib/constants';

export default function TestimonialsPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 sm:top-8 sm:right-8 text-indigo-200 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
              <p className="text-base sm:text-lg md:text-xl text-gray-700 italic mb-6 sm:mb-8 relative z-10">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
