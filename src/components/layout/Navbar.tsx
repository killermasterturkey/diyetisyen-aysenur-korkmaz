import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Kilo Yönetimi', slug: 'kilo-yonetimi' },
    { name: 'Sporcu Beslenmesi', slug: 'sporcu-beslenmesi' },
    { name: 'Metabolik Hastalıklar', slug: 'metabolik-hastaliklar' },
    { name: 'Gebelik Beslenmesi', slug: 'gebelik-beslenmesi' },
    { name: 'Çocuk Beslenmesi', slug: 'cocuk-beslenmesi' },
    { name: 'Sindirim Sistemi', slug: 'sindirim-sistemi' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold font-serif text-emerald-700 hover:text-emerald-600 transition-colors"
          >
            <h1>Dyt. Ayşenur Korkmaz</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                location.pathname === '/' ? 'text-emerald-600' : 'text-gray-700'
              }`}
            >
              Ana Sayfa
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                location.pathname === '/about' ? 'text-emerald-600' : 'text-gray-700'
              }`}
            >
              Hakkımda
            </Link>
            
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors hover:text-emerald-600 flex items-center gap-1 ${
                  location.pathname.includes('/services') ? 'text-emerald-600' : 'text-gray-700'
                }`}
              >
                Hizmetlerim
                <i className={`ri-arrow-down-s-line text-lg transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl py-3 animate-fadeIn">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={`/services/${service.slug}`}
                      className="block px-6 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/recipes"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                location.pathname.includes('/recipes') ? 'text-emerald-600' : 'text-gray-700'
              }`}
            >
              Tarifler
            </Link>
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                location.pathname.includes('/blog') ? 'text-emerald-600' : 'text-gray-700'
              }`}
            >
              Blog Haberleri
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                location.pathname === '/contact' ? 'text-emerald-600' : 'text-gray-700'
              }`}
            >
              İletişim
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap flex items-center gap-2"
            >
              Randevu Al
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-emerald-600 transition-colors"
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-xl my-4 py-4 animate-fadeIn">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-6 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
            >
              Ana Sayfa
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-6 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
            >
              Hakkımda
            </Link>
            <div className="px-6 py-2">
              <div className="text-xs font-semibold text-gray-500 mb-2">Hizmetlerim</div>
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={`/services/${service.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-sm text-gray-600 hover:text-emerald-600 transition-colors pl-4"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <Link
              to="/recipes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-6 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
            >
              Tarifler
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-6 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
            >
              Blog Haberleri
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-6 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
            >
              İletişim
            </Link>
            <div className="px-6 pt-4">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-medium rounded-full text-center hover:shadow-lg transition-all whitespace-nowrap"
              >
                Randevu Al
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
