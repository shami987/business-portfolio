import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HomePage from '../pages/home/HomePage';
import ServicesPage from '../pages/services/ServicesPage';
import WorkPage from '../pages/work/WorkPage';
import ContactPage from '../pages/contact/ContactPage';
import BlogPage from '../pages/blog/BlogPage';
import BlogDetailPage from '../pages/blog/BlogDetailPage';

function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [hash]);
  return null;
}

export default function App() {
  return (
    <div className="font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <ScrollToHash />
      <main>
        <Routes>
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="*" element={
            <>
              <HomePage />
              <ServicesPage />
              <WorkPage />
              <ContactPage />
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
