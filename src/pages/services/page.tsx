import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: 'ri-scales-3-line',
      title: 'Kilo Verme, Kilo Alma ve Kilo Koruma',
      description: 'Sağlıklı ve sürdürülebilir kilo yönetimi programları ile hedeflerinize ulaşın. Kişiye özel beslenme planları, düzenli takip ve motivasyon desteği.',
      slug: 'kilo-yonetimi',
      gradient: 'from-emerald-500 to-teal-500',
      image: 'https://readdy.ai/api/search-image?query=healthy%20weight%20management%20concept%20with%20measuring%20tape%20fresh%20vegetables%20fruits%20scale%20bright%20natural%20lighting%20lifestyle%20photography%20high%20quality%20clean%20background&width=600&height=400&seq=service-weight&orientation=landscape',
    },
    {
      icon: 'ri-run-line',
      title: 'Sporcu Beslenmesi',
      description: 'Performans odaklı beslenme planları ile spor hedeflerinizi destekleyin. Kas kütlesi artırma, yağ yakma ve enerji optimizasyonu.',
      slug: 'sporcu-beslenmesi',
      gradient: 'from-teal-500 to-cyan-500',
      image: 'https://readdy.ai/api/search-image?query=athletic%20nutrition%20concept%20with%20protein%20foods%20gym%20equipment%20fitness%20lifestyle%20bright%20natural%20lighting%20sports%20photography%20high%20quality%20clean%20background&width=600&height=400&seq=service-sports&orientation=landscape',
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Metabolik Hastalıklarda Beslenme',
      description: 'İnsülin direnci, diyabet, hipotiroidi, PCOS gibi metabolik hastalıklarda özel beslenme desteği ve takip programları.',
      slug: 'metabolik-hastaliklar',
      gradient: 'from-cyan-500 to-blue-500',
      image: 'https://readdy.ai/api/search-image?query=metabolic%20health%20concept%20with%20blood%20sugar%20monitor%20healthy%20low%20glycemic%20foods%20medical%20consultation%20bright%20natural%20lighting%20healthcare%20photography%20high%20quality%20clean%20background&width=600&height=400&seq=service-metabolic&orientation=landscape',
    },
    {
      icon: 'ri-parent-line',
      title: 'Gebelik ve Emzirme Döneminde Beslenme',
      description: 'Anne ve bebek sağlığı için özel beslenme programları. Sağlıklı kilo alımı, besin desteği ve doğum sonrası beslenme takibi.',
      slug: 'gebelik-beslenmesi',
      gradient: 'from-pink-500 to-rose-500',
      image: 'https://readdy.ai/api/search-image?query=pregnant%20woman%20eating%20healthy%20nutritious%20food%20fresh%20fruits%20vegetables%20bright%20natural%20lighting%20maternity%20lifestyle%20photography%20high%20quality%20clean%20background&width=600&height=400&seq=service-pregnancy&orientation=landscape',
    },
    {
      icon: 'ri-bear-smile-line',
      title: 'Çocuk ve Ergen Beslenmesi',
      description: 'Sağlıklı büyüme ve gelişim için çocuk ve ergen dönemine özel beslenme danışmanlığı. Seçici yeme problemleri ve beslenme alışkanlıkları.',
      slug: 'cocuk-beslenmesi',
      gradient: 'from-orange-500 to-amber-500',
      image: 'https://readdy.ai/api/search-image?query=happy%20children%20eating%20healthy%20colorful%20nutritious%20food%20fruits%20vegetables%20bright%20natural%20lighting%20family%20lifestyle%20photography%20high%20quality%20clean%20background&width=600&height=400&seq=service-children&orientation=landscape',
    },
    {
      icon: 'ri-heart-add-line',
      title: 'Sindirim Sistemi Sorunlarında Beslenme',
      description: 'Kabızlık, şişkinlik, IBS, reflü gibi sindirim sistemi sorunlarında beslenme desteği ve özel diyet programları.',
      slug: 'sindirim-sistemi',
      gradient: 'from-violet-500 to-purple-500',
      image: 'https://readdy.ai/api/search-image?query=digestive%20health%20concept%20with%20fiber%20rich%20foods%20probiotics%20gut%20friendly%20nutrition%20bright%20natural%20lighting%20healthcare%20photography%20high%20quality%20clean%20background&width=600&height=400&seq=service-digestive&orientation=landscape',
    },
    {
      icon: 'ri-heart-line',
      title: 'Kadın Sağlığı ve Hormonal Denge',
      description: 'Kadın sağlığına yönelik hormonal dengeyi destekleyen beslenme programları. PCOS, menopoz ve hormonal düzensizlikler.',
      slug: 'kadin-sagligi',
      gradient: 'from-rose-500 to-pink-500',
      image: 'https://readdy.ai/api/search-image?query=womens%20health%20nutrition%20concept%20with%20hormone%20balancing%20foods%20wellness%20lifestyle%20bright%20natural%20lighting%20healthcare%20photography%20high%20quality%20clean%20background&width=600&height=400&seq=service-womens&orientation=landscape',
    },
    {
      icon: 'ri-shield-line',
      title: 'Bağışıklık Sistemi Desteği',
      description: 'Bağışıklık sistemini güçlendiren beslenme programları ile hastalıklara karşı direncini artır.',
      slug: 'bagisiklik-sistemi',
      gradient: 'from-green-500 to-emerald-500',
      image: 'https://readdy.ai/api/search-image?query=immune%20system%20boost%20concept%20with%20vitamin%20rich%20foods%20citrus%20fruits%20vegetables%20bright%20natural%20lighting%20health%20photography%20high%20quality%20clean%20background&width=600&height=400&seq=service-immune&orientation=landscape',
    },
    {
      icon: 'ri-leaf-line',
      title: 'Vejetaryen/Vegan Beslenme',
      description: 'Bitkisel beslenme ile dengeli ve sağlıklı yaşam. Protein, vitamin ve mineral dengesi için özel planlar.',
      slug: 'vejetaryen-vegan',
      gradient: 'from-lime-500 to-green-500',
      image: 'https://readdy.ai/api/search-image?query=vegetarian%20vegan%20nutrition%20concept%20with%20colorful%20plant%20based%20foods%20vegetables%20legumes%20bright%20natural%20lighting%20lifestyle%20photography%20high%20quality%20clean%20background&width=600&height=400&seq=service-vegan&orientation=landscape',
    },
  ];

  const faqData = [
    {
      question: 'Hangi hizmetler için randevu alabilirim?',
      answer: 'Kilo yönetimi, sporcu beslenmesi, metabolik hastalıklar, gebelik beslenmesi, çocuk beslenmesi ve tüm diğer beslenme danışmanlığı hizmetleri için randevu alabilirsiniz.',
    },
    {
      question: 'Beslenme programı ne kadar sürede hazırlanır?',
      answer: 'İlk görüşmeden sonra 2-3 gün içinde kişiye özel beslenme programınız hazırlanır ve size iletilir.',
    },
    {
      question: 'Takip görüşmeleri ne sıklıkla yapılır?',
      answer: 'Genellikle 2-4 haftada bir takip görüşmeleri yapılır. Ancak bu süre, kişinin durumuna ve hedeflerine göre değişiklik gösterebilir.',
    },
    {
      question: 'Beslenme programları nasıl iletilir?',
      answer: 'Beslenme programları dijital ortamda PDF formatında veya özel beslenme uygulamaları üzerinden iletilir. Ayrıca detaylı açıklamalar görüşme sırasında yapılır.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-emerald-50/30">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold font-serif text-gray-900 mb-6">
            Uzmanlık <span className="text-emerald-600">Alanlarım</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Beslenme, tek bir kalıba sığdırılamayacak kadar bireysel ve çok yönlü bir alandır. Yaş, cinsiyet, yaşam tarzı, sağlık durumu ve hedeflerinize özel planlarla tüm alanlarda destek veriyorum.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/hizmetlerim/${service.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`}></div>
                </div>
                
                <div className="p-6">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-emerald-600 font-medium text-sm group-hover:gap-4 transition-all">
                    Detaylı Bilgi
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-serif text-gray-900 mb-12 text-center">
            Sıkça Sorulan <span className="text-emerald-600">Sorular</span>
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details key={index} className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                  <i className="ri-arrow-down-s-line text-2xl text-emerald-600 group-open:rotate-180 transition-transform flex-shrink-0"></i>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;