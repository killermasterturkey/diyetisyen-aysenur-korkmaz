import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-serif mb-4 text-emerald-400">
              Dyt. Ayşenur Korkmaz
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Sağlıklı yaşam yolculuğunuzda profesyonel beslenme danışmanlığı ile yanınızdayım. 5000+ mutlu danışanla birlikte büyüyen bir aile.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-emerald-400 hover:bg-emerald-400/10 transition-all cursor-pointer"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-emerald-400 hover:bg-emerald-400/10 transition-all cursor-pointer"
              >
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-emerald-400 hover:bg-emerald-400/10 transition-all cursor-pointer"
              >
                <i className="ri-youtube-fill text-lg"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-emerald-400 hover:bg-emerald-400/10 transition-all cursor-pointer"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/hakkimda" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link to="/tarifler" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Tarifler
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Blog Haberleri
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hizmetler</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/hizmetlerim/kilo-yonetimi" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Kilo Yönetimi
                </Link>
              </li>
              <li>
                <Link to="/hizmetlerim/sporcu-beslenmesi" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Sporcu Beslenmesi
                </Link>
              </li>
              <li>
                <Link to="/hizmetlerim/metabolik-hastaliklar" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Metabolik Hastalıklar
                </Link>
              </li>
              <li>
                <Link to="/hizmetlerim/gebelik-beslenmesi" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Gebelik Beslenmesi
                </Link>
              </li>
              <li>
                <Link to="/hizmetlerim/cocuk-beslenmesi" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Çocuk Beslenmesi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-emerald-400 text-lg mt-1"></i>
                <span className="text-gray-400 text-sm leading-relaxed">
                  Evliya Çelebi Caddesi Etiler mahallesi Mirador İş Merkezi no:7 kat:7 daire 703 Muratpaşa/Antalya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-phone-line text-emerald-400 text-lg"></i>
                <a href="tel:+905475373522" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  0547 537 3522
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-line text-emerald-400 text-lg"></i>
                <a href="mailto:info@diyetisyenaysenurkorkmaz.com" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  info@diyetisyenaysenurkorkmaz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Diyetisyen Ayşenur Korkmaz. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">
              Kullanım Koşulları
            </a>
            <span className="text-gray-500 text-sm">
              Powered by Killer Master Turkey
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
