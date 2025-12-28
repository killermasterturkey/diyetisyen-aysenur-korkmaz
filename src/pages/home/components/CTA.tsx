import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 opacity-20">
        <img
          src="https://readdy.ai/api/search-image?query=healthy%20food%20illustration%20fresh%20vegetables%20fruits%20simple%20minimalist%20white%20background%20transparent%20style&width=300&height=300&seq=cta-decoration-1&orientation=squarish"
          alt="Decoration"
          className="w-64 h-64 object-contain animate-float"
        />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <img
          src="https://readdy.ai/api/search-image?query=nutrition%20wellness%20illustration%20healthy%20lifestyle%20simple%20minimalist%20white%20background%20transparent%20style&width=300&height=300&seq=cta-decoration-2&orientation=squarish"
          alt="Decoration"
          className="w-64 h-64 object-contain animate-float-delayed"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8">
          <i className="ri-heart-pulse-line"></i>
          Sağlıklı Yaşama İlk Adım
        </div>

        <h2 className="text-4xl lg:text-6xl font-bold font-serif text-white mb-6 leading-tight">
          Hayalinizdeki Sağlıklı Yaşama
          <br />
          <span className="text-emerald-200">Bugün Başlayın</span>
        </h2>

        <p className="text-xl text-emerald-50 mb-12 max-w-3xl mx-auto leading-relaxed">
          5000+ mutlu danışanımıza katılın ve kişiye özel beslenme programlarıyla hedeflerinize ulaşın. İlk konsültasyonunuz ücretsiz!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            to="/iletisim"
            className="px-10 py-5 bg-white text-emerald-600 font-bold rounded-full hover:bg-emerald-50 hover:scale-105 hover:shadow-2xl transition-all whitespace-nowrap flex items-center gap-3 text-lg"
          >
            <i className="ri-calendar-check-line text-2xl"></i>
            Ücretsiz Konsültasyon
          </Link>
          <a
            href="tel:+905475373522"
            className="px-10 py-5 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all whitespace-nowrap flex items-center gap-3 text-lg"
          >
            <i className="ri-phone-line text-2xl"></i>
            Hemen Ara
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-white">
          <div className="flex items-center gap-2">
            <i className="ri-shield-check-line text-2xl text-emerald-200"></i>
            <span className="text-sm">Sertifikalı Diyetisyen</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-user-heart-line text-2xl text-emerald-200"></i>
            <span className="text-sm">5000+ Mutlu Danışan</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-star-fill text-2xl text-yellow-300"></i>
            <span className="text-sm">98% Başarı Oranı</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;