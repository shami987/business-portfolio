import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HomePage from '../pages/home/HomePage';
import AboutPage from '../pages/about/AboutPage';
import ServicesPage from '../pages/services/ServicesPage';
import WorkPage from '../pages/work/WorkPage';
import PricePage from '../pages/price/PricePage';
import ContactPage from '../pages/contact/ContactPage';

export default function App() {
  return (
    <div className="font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <HomePage />
        <AboutPage />
        <ServicesPage />
        <WorkPage />
        <PricePage />
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
