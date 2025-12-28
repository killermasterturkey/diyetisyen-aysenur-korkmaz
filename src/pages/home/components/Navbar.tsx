import { motion } from 'framer-motion';

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img 
              src="https://public.readdy.ai/ai/img_res/570884e5-eaef-4d47-9749-97f53455b122.png" 
              alt="Diyetisyen Ayşenur Korkmaz Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className={`font-serif text-xl font-semibold transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              Diyetisyen Ayşenur KORKMAZ
            </span>
          </a>

          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`font-sans text-sm font-medium transition-colors hover:text-accent whitespace-nowrap cursor-pointer ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Hakkımda
            </button>
            <button
              onClick={() => scrollToSection('expertise')}
              className={`font-sans text-sm font-medium transition-colors hover:text-accent whitespace-nowrap cursor-pointer ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Uzmanlık Alanları
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-sans text-sm font-medium transition-colors hover:text-accent whitespace-nowrap cursor-pointer ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              İletişim
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-sage/80 hover:bg-sage text-white rounded-full font-sans text-sm font-medium transition-all hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Randevu Al
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}