import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              <i className="ri-verified-badge-fill"></i>
              Sertifikalı Diyetisyen
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold font-serif leading-tight">
              <span className="text-gray-900">Sağlıklı Yaşam</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Yolculuğunuzda
              </span>
              <br />
              <span className="text-gray-900">Yanınızdayım</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              5000+ mutlu danışanla birlikte, kişiye özel beslenme planları ve sürdürülebilir yaşam tarzı değişiklikleriyle hedeflerinize ulaşın. Bilimsel, fonksiyonel ve bütüncül beslenme yaklaşımıyla sağlıklı yaşamın kapılarını aralayın.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/iletisim"
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-full hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap flex items-center gap-2"
              >
                Hemen Başla
                <i className="ri-arrow-right-line"></i>
              </Link>
              <Link
                to="/hakkimda"
                className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-medium rounded-full hover:bg-emerald-50 transition-all whitespace-nowrap"
              >
                Daha Fazla Bilgi
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-emerald-600">5000+</div>
                <div className="text-sm text-gray-600">Mutlu Danışan</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">98%</div>
                <div className="text-sm text-gray-600">Başarı Oranı</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">7+</div>
                <div className="text-sm text-gray-600">Yıllık Deneyim</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fadeInUp animation-delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 z-10"></div>
              <img
                src="/images/hero-dietitian.png"
                alt="Diyetisyen Ayşenur Korkmaz"
                className="w-full h-auto object-cover object-top"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full opacity-20 blur-2xl animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-2xl text-emerald-600"></i>
      </div>
    </section>
  );
};

export default Hero;
