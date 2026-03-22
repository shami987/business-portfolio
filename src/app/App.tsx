import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HomePage from '../pages/home/HomePage';
import AboutPage from '../pages/about/AboutPage';
import ServicesPage from '../pages/services/ServicesPage';
import WorkPage from '../pages/work/WorkPage';
import PricePage from '../pages/price/PricePage';
import ContactPage from '../pages/contact/ContactPage';
import BlogPage from '../pages/blog/BlogPage';
import BlogDetailPage from '../pages/blog/BlogDetailPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/pricing" element={<PricePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
