import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS, PRICING } from '../../lib/constants';
import './price.styles.css';

const Pricing = () => {
  return (
    <section id="pricing" className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Choose Your Package</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRICING.map((pkg, index) => (
            <Link to="/contact#contact-form" key={pkg.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 sm:p-8 rounded-3xl bg-white border relative cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${pkg.recommended ? 'border-indigo-600 shadow-xl lg:scale-105 z-10' : 'border-gray-100 shadow-sm'}`}
              >
                {pkg.recommended && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
                    Recommended
                  </span>
                )}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                {pkg.price && pkg.price !== 'Contact Us' && (
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">{pkg.price}</span>
                    {pkg.price !== 'Custom' && <span className="text-gray-500">/project</span>}
                  </div>
                )}
                <p className="text-gray-600 mb-8">{pkg.description}</p>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle2 size={20} className="text-indigo-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={`w-full py-4 rounded-xl font-bold text-center ${pkg.recommended ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                  Get Started
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div key={faq.id} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base sm:text-lg font-bold text-gray-900 pr-4">{faq.question}</span>
                {openId === faq.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 sm:p-6 pt-0 text-gray-600 border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function PricePage() {
  return (
    <>
      <Pricing />
      <FAQ />
    </>
  );
}
