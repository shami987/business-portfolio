import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HomePage from '../pages/home/HomePage';
import ServicesPage from '../pages/services/ServicesPage';
import AboutPage from '../pages/about/AboutPage';
import WorkPage from '../pages/work/WorkPage';
import TestimonialsPage from '../pages/testimonials/TestimonialsPage';
import PricePage from '../pages/price/PricePage';
import CTAPage from '../pages/cta/CTAPage';
import ContactPage from '../pages/contact/ContactPage';

export default function App() {
  return (
    <div className="font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <HomePage />
        <ServicesPage />
        <AboutPage />
        <WorkPage />
        <TestimonialsPage />
        <PricePage />
        <CTAPage />
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
