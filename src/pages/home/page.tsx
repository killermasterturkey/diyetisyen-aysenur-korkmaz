import { useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Recipes from './components/Recipes';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-emerald-50/30">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Recipes />
      <Blog />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
