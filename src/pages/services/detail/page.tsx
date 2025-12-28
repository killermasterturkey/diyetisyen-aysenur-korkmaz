import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const ServiceDetailPage = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicesData: any = {
    'kilo-yonetimi': {
      title: 'Kilo Yönetimi',
      subtitle: 'Sağlıklı Kilo Verme, Kilo Alma ve Kilo Koruma',
      icon: 'ri-scales-3-line',
      gradient: 'from-emerald-500 to-teal-500',
      image: 'https://readdy.ai/api/search-image?query=healthy%20weight%20management%20journey%20transformation%20concept%20with%20measuring%20tape%20fresh%20vegetables%20fruits%20scale%20fitness%20equipment%20bright%20natural%20lighting%20lifestyle%20photography%20high%20quality%20clean%20background&width=1200&height=600&seq=detail-weight-hero&orientation=landscape',
      description: 'Kilo yönetimi, sadece sayılarla değil, sağlıklı bir yaşam tarzı değişimiyle başlar. Kişiye özel beslenme planları, düzenli takip ve motivasyon desteği ile hedeflerinize ulaşın.',
      benefits: [
        'Kişiye özel beslenme planları',
        'Haftalık düzenli takip ve destek',
        'Metabolizma analizi ve optimizasyon',
        'Yaşam tarzı koçluğu',
        'Sağlıklı ve lezzetli tarifler',
        'Sürdürülebilir sonuçlar',
      ],
      process: [
        { title: 'İlk Görüşme', desc: 'Detaylı anamnez, vücut analizi ve hedef belirleme' },
        { title: 'Plan Hazırlama', desc: 'Kişiye özel beslenme programı oluşturma' },
        { title: 'Takip Süreci', desc: 'Haftalık kontroller ve plan güncellemeleri' },
        { title: 'Hedef Başarısı', desc: 'Hedefe ulaşma ve koruma programı' },
      ],
    },
    'sporcu-beslenmesi': {
      title: 'Sporcu Beslenmesi',
      subtitle: 'Performans Odaklı Beslenme Programları',
      icon: 'ri-run-line',
      gradient: 'from-teal-500 to-cyan-500',
      image: 'https://readdy.ai/api/search-image?query=athletic%20sports%20nutrition%20concept%20with%20protein%20rich%20foods%20supplements%20gym%20equipment%20fitness%20training%20bright%20natural%20lighting%20sports%20photography%20high%20quality%20clean%20background&width=1200&height=600&seq=detail-sports-hero&orientation=landscape',
      description: 'Spor performansınızı maksimize etmek için özel beslenme stratejileri. Kas kütlesi artırma, yağ yakma, enerji optimizasyonu ve toparlanma desteği.',
      benefits: [
        'Performans artırıcı beslenme planları',
        'Antrenman öncesi ve sonrası beslenme',
        'Kas kütlesi artırma programları',
        'Yağ yakma ve definasyon',
        'Besin takviyesi danışmanlığı',
        'Yarışma öncesi hazırlık',
      ],
      process: [
        { title: 'Değerlendirme', desc: 'Spor dalı, hedef ve vücut analizi' },
        { title: 'Strateji', desc: 'Antrenman programına uygun beslenme planı' },
        { title: 'Uygulama', desc: 'Düzenli takip ve performans ölçümü' },
        { title: 'Optimizasyon', desc: 'Sonuçlara göre plan güncelleme' },
      ],
    },
    'metabolik-hastaliklar': {
      title: 'Metabolik Hastalıklar',
      subtitle: 'İnsülin Direnci, Diyabet, PCOS, Hipotiroidi',
      icon: 'ri-heart-pulse-line',
      gradient: 'from-cyan-500 to-blue-500',
      image: 'https://readdy.ai/api/search-image?query=metabolic%20health%20diabetes%20management%20concept%20with%20blood%20sugar%20monitor%20healthy%20low%20glycemic%20foods%20medical%20consultation%20bright%20natural%20lighting%20healthcare%20photography%20high%20quality%20clean%20background&width=1200&height=600&seq=detail-metabolic-hero&orientation=landscape',
      description: 'Metabolik hastalıklarda beslenme tedavisinin önemi büyüktür. Fonksiyonel beslenme yaklaşımı ile kan şekeri dengesi, hormonal denge ve metabolik sağlık.',
      benefits: [
        'Kan şekeri dengeleme',
        'İnsülin direnci yönetimi',
        'Hormonal denge desteği',
        'PCOS semptom kontrolü',
        'Tiroid fonksiyon optimizasyonu',
        'İlaç ihtiyacını azaltma',
      ],
      process: [
        { title: 'Tanı Analizi', desc: 'Mevcut testler ve semptom değerlendirmesi' },
        { title: 'Fonksiyonel Plan', desc: 'Hastalığa özel beslenme programı' },
        { title: 'Düzenli Takip', desc: 'Kan değerleri ve semptom kontrolü' },
        { title: 'İyileşme', desc: 'Metabolik sağlığın restorasyonu' },
      ],
    },
    'gebelik-beslenmesi': {
      title: 'Gebelik Beslenmesi',
      subtitle: 'Anne ve Bebek Sağlığı İçin Özel Beslenme',
      icon: 'ri-parent-line',
      gradient: 'from-pink-500 to-rose-500',
      image: 'https://readdy.ai/api/search-image?query=pregnant%20woman%20healthy%20nutrition%20concept%20with%20fresh%20fruits%20vegetables%20nutritious%20foods%20bright%20natural%20lighting%20maternity%20lifestyle%20photography%20high%20quality%20clean%20background&width=1200&height=600&seq=detail-pregnancy-hero&orientation=landscape',
      description: 'Gebelik ve emzirme döneminde anne ve bebek sağlığı için kritik öneme sahip beslenme desteği. Sağlıklı kilo alımı ve besin dengesi.',
      benefits: [
        'Sağlıklı kilo alımı kontrolü',
        'Besin eksikliği önleme',
        'Gebelik şikayetleri yönetimi',
        'Gestasyonel diyabet kontrolü',
        'Emzirme dönemi desteği',
        'Doğum sonrası beslenme',
      ],
      process: [
        { title: 'Gebelik Öncesi', desc: 'Vücut hazırlığı ve besin depoları' },
        { title: 'Gebelik Dönemi', desc: 'Trimester bazlı beslenme planı' },
        { title: 'Doğum Sonrası', desc: 'İyileşme ve emzirme desteği' },
        { title: 'Forma Dönüş', desc: 'Sağlıklı kilo verme programı' },
      ],
    },
    'cocuk-beslenmesi': {
      title: 'Çocuk Beslenmesi',
      subtitle: 'Sağlıklı Büyüme ve Gelişim',
      icon: 'ri-bear-smile-line',
      gradient: 'from-orange-500 to-amber-500',
      image: 'https://readdy.ai/api/search-image?query=happy%20children%20eating%20healthy%20colorful%20nutritious%20food%20fruits%20vegetables%20family%20meal%20time%20bright%20natural%20lighting%20lifestyle%20photography%20high%20quality%20clean%20background&width=1200&height=600&seq=detail-children-hero&orientation=landscape',
      description: 'Çocuk ve ergen döneminde sağlıklı büyüme ve gelişim için özel beslenme danışmanlığı. Seçici yeme problemleri ve beslenme alışkanlıkları.',
      benefits: [
        'Büyüme ve gelişim takibi',
        'Seçici yeme problemleri',
        'Sağlıklı alışkanlık kazandırma',
        'Okul başarısı desteği',
        'Bağışıklık güçlendirme',
        'Ailece sağlıklı beslenme',
      ],
      process: [
        { title: 'Değerlendirme', desc: 'Büyüme eğrileri ve beslenme alışkanlıkları' },
        { title: 'Aile Eğitimi', desc: 'Ebeveyn ve çocuk beslenme eğitimi' },
        { title: 'Uygulama', desc: 'Kademeli alışkanlık değişimi' },
        { title: 'Takip', desc: 'Düzenli büyüme ve gelişim kontrolü' },
      ],
    },
    'sindirim-sistemi': {
      title: 'Sindirim Sistemi',
      subtitle: 'Kabızlık, Şişkinlik, IBS, Reflü',
      icon: 'ri-heart-add-line',
      gradient: 'from-violet-500 to-purple-500',
      image: 'https://readdy.ai/api/search-image?query=digestive%20health%20gut%20wellness%20concept%20with%20fiber%20rich%20foods%20probiotics%20healthy%20nutrition%20bright%20natural%20lighting%20healthcare%20photography%20high%20quality%20clean%20background&width=1200&height=600&seq=detail-digestive-hero&orientation=landscape',
      description: 'Sindirim sistemi sorunlarında beslenme tedavisi ile semptom kontrolü ve bağırsak sağlığı. Fonksiyonel beslenme yaklaşımı.',
      benefits: [
        'Semptom kontrolü ve rahatlama',
        'Bağırsak mikrobiyota dengesi',
        'Gıda intoleransı tespiti',
        'Probiyotik ve prebiyotik desteği',
        'Yaşam kalitesi artışı',
        'İlaç ihtiyacını azaltma',
      ],
      process: [
        { title: 'Semptom Analizi', desc: 'Detaylı şikayet ve tetikleyici değerlendirmesi' },
        { title: 'Eliminasyon', desc: 'Tetikleyici besinlerin belirlenmesi' },
        { title: 'İyileştirme', desc: 'Bağırsak sağlığı restorasyon programı' },
        { title: 'Sürdürme', desc: 'Uzun vadeli sağlık koruması' },
      ],
    },
  };

  const service = servicesData[slug || ''] || servicesData['kilo-yonetimi'];

  const faqData = [
    {
      question: 'İlk görüşme ne kadar sürer?',
      answer: 'İlk görüşme yaklaşık 45-60 dakika sürmektedir. Bu sürede detaylı anamnez, vücut analizi ve hedef belirleme yapılır.',
    },
    {
      question: 'Beslenme planı ne kadar sürede hazırlanır?',
      answer: 'İlk görüşmeden sonra 2-3 gün içinde kişiye özel beslenme planınız hazırlanır ve size iletilir.',
    },
    {
      question: 'Takip görüşmeleri nasıl yapılır?',
      answer: 'Takip görüşmeleri haftalık veya iki haftada bir yapılır. Online veya yüz yüze görüşme seçenekleri mevcuttur.',
    },
    {
      question: 'Beslenme planı ne kadar süre uygulanır?',
      answer: 'Beslenme planı, hedefinize ve ilerlemenize göre düzenli olarak güncellenir. Süreç kişiye özeldir ve ortalama 3-6 ay sürer.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-emerald-50/30">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 group">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-12">
                <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-full text-sm font-semibold mb-6 shadow-xl`}>
                  <i className={`${service.icon} text-xl`}></i>
                  Hizmetlerim
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold font-serif text-white mb-4 leading-tight">
                  {service.title}
                </h1>
                <p className="text-2xl text-white/90 max-w-3xl">
                  {service.subtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div className="relative group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-10 blur transition-opacity"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold font-serif text-gray-900 mb-6">
                    Hizmet Detayları
                  </h2>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-10 shadow-xl">
                <h2 className="text-4xl font-bold font-serif text-gray-900 mb-8">
                  Faydaları
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 flex items-center justify-center bg-emerald-600 rounded-xl flex-shrink-0 mt-1 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                        <i className="ri-check-line text-white text-xl"></i>
                      </div>
                      <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="relative group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-10 blur transition-opacity"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold font-serif text-gray-900 mb-10">
                    Süreç Nasıl İşler?
                  </h2>
                  <div className="space-y-8">
                    {service.process.map((step: any, index: number) => (
                      <div key={index} className="flex gap-6 group/item">
                        <div className="relative">
                          <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${service.gradient} text-white rounded-2xl font-bold text-2xl flex-shrink-0 shadow-lg group-hover/item:scale-110 group-hover/item:rotate-6 transition-all`}>
                            {index + 1}
                          </div>
                          {index < service.process.length - 1 && (
                            <div className="absolute top-16 left-1/2 w-0.5 h-8 bg-gradient-to-b from-emerald-300 to-transparent"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* CTA Card */}
              <div className={`relative group bg-gradient-to-br ${service.gradient} rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-20 h-20 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                    <i className={`${service.icon} text-4xl`}></i>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    Hemen Başlayın
                  </h3>
                  <p className="text-white/90 mb-8 text-lg leading-relaxed">
                    İlk konsültasyonunuz ücretsiz! Randevu alın ve sağlıklı yaşam yolculuğunuza başlayın.
                  </p>
                  <Link
                    to="/iletisim"
                    className="block w-full px-6 py-4 bg-white text-emerald-600 font-bold rounded-2xl text-center hover:bg-emerald-50 hover:scale-105 transition-all whitespace-nowrap shadow-xl"
                  >
                    Randevu Al
                  </Link>
                </div>
              </div>

              {/* Contact Card */}
              <div className="relative group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-10 blur transition-opacity"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    İletişim Bilgileri
                  </h3>
                  <div className="space-y-6">
                    <a href="tel:+905475373522" className="flex items-center gap-4 text-gray-700 hover:text-emerald-600 transition-colors group/item">
                      <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-xl group-hover/item:bg-emerald-600 transition-colors">
                        <i className="ri-phone-line text-2xl text-emerald-600 group-hover/item:text-white transition-colors"></i>
                      </div>
                      <span className="text-lg font-medium">0547 537 3522</span>
                    </a>
                    <div className="flex items-start gap-4 text-gray-700">
                      <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-xl flex-shrink-0">
                        <i className="ri-map-pin-line text-2xl text-emerald-600"></i>
                      </div>
                      <span className="text-sm leading-relaxed">Evliya Çelebi Caddesi Etiler mahallesi Mirador İş Merkezi no:7 kat:7 daire 703 Muratpaşa/Antalya</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Services */}
              <div className="relative group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Diğer Hizmetler
                  </h3>
                  <div className="space-y-3">
                    <Link to="/hizmetlerim/kilo-yonetimi" className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 transition-colors group/item">
                      <i className="ri-arrow-right-s-line text-xl group-hover/item:translate-x-1 transition-transform"></i>
                      <span className="font-medium">Kilo Yönetimi</span>
                    </Link>
                    <Link to="/hizmetlerim/sporcu-beslenmesi" className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 transition-colors group/item">
                      <i className="ri-arrow-right-s-line text-xl group-hover/item:translate-x-1 transition-transform"></i>
                      <span className="font-medium">Sporcu Beslenmesi</span>
                    </Link>
                    <Link to="/hizmetlerim/metabolik-hastaliklar" className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 transition-colors group/item">
                      <i className="ri-arrow-right-s-line text-xl group-hover/item:translate-x-1 transition-transform"></i>
                      <span className="font-medium">Metabolik Hastalıklar</span>
                    </Link>
                    <Link to="/hizmetlerim/gebelik-beslenmesi" className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 transition-colors group/item">
                      <i className="ri-arrow-right-s-line text-xl group-hover/item:translate-x-1 transition-transform"></i>
                      <span className="font-medium">Gebelik Beslenmesi</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-serif text-gray-900 mb-4">
              Sıkça Sorulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Sorular</span>
            </h2>
            <p className="text-xl text-gray-600">Hizmetler hakkında merak edilenler</p>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details key={index} className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                  <div className="w-10 h-10 flex items-center justify-center bg-emerald-600 rounded-xl flex-shrink-0 group-open:rotate-180 transition-transform">
                    <i className="ri-arrow-down-s-line text-2xl text-white"></i>
                  </div>
                </summary>
                <p className="mt-6 text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
