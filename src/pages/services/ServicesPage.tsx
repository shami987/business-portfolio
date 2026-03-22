import { motion } from 'motion/react';
import { CheckCircle2, Globe, Layout, Palette, ShoppingBag, Smartphone } from 'lucide-react';
import { SERVICES } from '../../lib/constants';
import './services.styles.css';

const ServiceIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'Globe':
      return <Globe className="text-indigo-600" size={32} />;
    case 'Layout':
      return <Layout className="text-indigo-600" size={32} />;
    case 'ShoppingBag':
      return <ShoppingBag className="text-indigo-600" size={32} />;
    case 'Smartphone':
      return <Smartphone className="text-indigo-600" size={32} />;
    case 'Palette':
      return <Palette className="text-indigo-600" size={32} />;
    default:
      return <Globe className="text-indigo-600" size={32} />;
  }
};

export default function ServicesPage() {
  return (
    <section id="services" className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Our Specialized Services</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            We offer a wide range of digital services to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={18} className="text-indigo-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
