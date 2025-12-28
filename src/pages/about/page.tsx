import { useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certificates = [
    {
      title: 'Beslenme ve Diyetetik Lisans Diploması',
      institution: 'İstanbul Arel Üniversitesi',
      year: '2020',
      image: 'https://readdy.ai/api/search-image?query=university%20diploma%20certificate%20nutrition%20dietetics%20degree%20elegant%20frame%20professional%20document%20photography%20high%20quality%20clean%20background&width=400&height=300&seq=cert-diploma-v2&orientation=landscape',
    },
    {
      title: 'Fonksiyonel Beslenme Sertifikası',
      institution: 'Acıbadem Üniversitesi ASAGEM',
      year: '2021',
      image: 'https://readdy.ai/api/search-image?query=professional%20certificate%20functional%20nutrition%20training%20elegant%20frame%20document%20photography%20high%20quality%20clean%20background&width=400&height=300&seq=cert-functional-v2&orientation=landscape',
    },
    {
      title: 'Aşçılık Eğitimi Sertifikası',
      institution: 'Mutfak Sanatları Akademisi',
      year: '2019',
      image: 'https://readdy.ai/api/search-image?query=culinary%20arts%20certificate%20cooking%20training%20elegant%20frame%20professional%20document%20photography%20high%20quality%20clean%20background&width=400&height=300&seq=cert-culinary-v2&orientation=landscape',
    },
    {
      title: 'Sporcu Beslenmesi Sertifikası',
      institution: 'Türkiye Diyetisyenler Derneği',
      year: '2021',
      image: 'https://readdy.ai/api/search-image?query=sports%20nutrition%20certificate%20athletic%20training%20elegant%20frame%20professional%20document%20photography%20high%20quality%20clean%20background&width=400&height=300&seq=cert-sports-v2&orientation=landscape',
    },
    {
      title: 'Diyabet Eğitimi Sertifikası',
      institution: 'Sağlık Bakanlığı',
      year: '2020',
      image: 'https://readdy.ai/api/search-image?query=diabetes%20education%20certificate%20medical%20training%20elegant%20frame%20professional%20document%20photography%20high%20quality%20clean%20background&width=400&height=300&seq=cert-diabetes-v2&orientation=landscape',
    },
    {
      title: 'Türk İşaret Dili Sertifikası',
      institution: 'Aile ve Sosyal Hizmetler Bakanlığı',
      year: '2022',
      image: 'https://readdy.ai/api/search-image?query=sign%20language%20certificate%20communication%20training%20elegant%20frame%20professional%20document%20photography%20high%20quality%20clean%20background&width=400&height=300&seq=cert-sign-language-v2&orientation=landscape',
    },
  ];

  const faqData = [
    {
      question: 'Online danışmanlık hizmeti veriyor musunuz?',
      answer: 'Evet, online görüşme seçeneği sunuyorum. Video konferans üzerinden detaylı görüşme yaparak kişiye özel beslenme programı hazırlıyorum.',
    },
    {
      question: 'Bir danışmanlık süreci ne kadar sürer?',
      answer: 'İlk görüşme yaklaşık 60 dakika sürer. Takip görüşmeleri 30-45 dakika arasında değişir. Süreç, hedeflerinize göre 3-6 ay arasında planlanır.',
    },
    {
      question: 'Hangi yaş gruplarına hizmet veriyorsunuz?',
      answer: 'Çocuklardan yetişkinlere, gebelerden sporculara kadar her yaş grubuna hizmet veriyorum. Her bireyin ihtiyacına özel programlar hazırlıyorum.',
    },
    {
      question: 'Beslenme programları nasıl hazırlanıyor?',
      answer: 'Detaylı anamnez, antropometrik ölçümler ve yaşam tarzı analizi sonrası kişiye özel, sürdürülebilir ve lezzetli programlar hazırlıyorum.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-emerald-50/30">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold font-serif text-gray-900 mb-6">
              Dyt. Ayşenur Korkmaz <span className="text-emerald-600">Kimdir?</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Sağlıklı yaşam yolculuğunuzda profesyonel rehberiniz
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="/images/about-dietitian.png"
                alt="Diyetisyen Ayşenur Korkmaz"
                className="w-full h-auto object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Benimle tanıştığınızda sizi karşılayan yalnızca bir uzman değildir. Aynı zamanda <strong className="text-emerald-600">dinleyen, anlayan, güven veren</strong> ve süreci her adımında yanında olan bir yol arkadaşıyla tanışırsınız.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Daha ilk görüşmeden bu yolculuğun yalnızca kilo odaklı değil; içinde zihni ve yaşam tarzını kapsayan <strong>bütüncül bir değişim süreci</strong> olduğunu görüyorsunuz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-serif text-gray-900 mb-12 text-center">
            Eğitim Hayatı ve <span className="text-emerald-600">Akademik Altyapı</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-emerald-600 rounded-2xl mb-6">
                <i className="ri-graduation-cap-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Üniversite Eğitimi</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>İstanbul Arel Üniversitesi Beslenme ve Diyetetik Bölümü</strong>'nü tam burslu olarak kazandım ve <strong>3.40 ortalamayla</strong> başarıyla tamamladım.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Üniversitede eğitim alırken yalnızca teorik bilgiyle yetinmedim; aşçılık eğitimi alarak beslenmenin yalnızca kalori ve makro besin dengelerinden ibaret olmadığını, aynı zamanda lezzet, kültür ve sürdürülebilirlikle şekillendiğini öğrendim.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 flex items-center justify-center bg-teal-600 rounded-2xl mb-6">
                <i className="ri-school-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lise Eğitimi</h3>
              <p className="text-gray-700 leading-relaxed">
                Antalya doğumluyum ve lise eğitimimi <strong>Antalya Gazi Anadolu Lisesi</strong>'nde tamamladım. Bu dönemde edindiğim disiplin ve çalışma alışkanlıkları, akademik kariyerimin temelini oluşturdu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4 text-center">
            Diploma ve <span className="text-emerald-600">Sertifikalar</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Sürekli eğitim ve mesleki gelişim ilkesiyle edindiğim sertifikalar
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white text-sm font-medium">{cert.year}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-serif text-gray-900 mb-12 text-center">
            Klinik Deneyimi ve <span className="text-emerald-600">Danışan Tecrübesi</span>
          </h2>
          
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-12 hover:shadow-2xl transition-shadow">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Mesleki yolculuğum boyunca <strong>özel klinikler, spor salonları, özel ve devlet hastaneleri</strong> ile <strong>aile sağlığı merkezleri</strong> gibi birçok farklı alanda aktif olarak görev aldım.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Çocuklardan yetişkinlere, gebelerden sporculara, kronik hastalığı olan bireylerden kilo kontrolüne başvuranlara kadar geniş bir danışan profiliyle bire bir çalıştım.
            </p>
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <i className="ri-user-heart-fill text-5xl"></i>
                <div>
                  <div className="text-4xl font-bold">5.000+</div>
                  <div className="text-emerald-100">Danışan Deneyimi</div>
                </div>
              </div>
              <p className="text-emerald-50">
                Bugüne kadar edindiğim deneyim, her danışanın farklı olduğunu ve benzersiz bir yaklaşım gerektirdiğini kanıtlamıştır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Education */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-serif text-gray-900 mb-12 text-center">
            Sürekli Eğitim ve <span className="text-emerald-600">Mesleki Gelişim</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <i className="ri-hospital-line text-4xl text-emerald-600 mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Diyabet Eğitimi</h3>
              <p className="text-sm text-gray-600">Esenyurt Belediyesi bünyesinde diyabet eğitimi vererek toplumsal farkındalığa katkı sağladım.</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <i className="ri-presentation-line text-4xl text-teal-600 mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Sempozyumlar</h3>
              <p className="text-sm text-gray-600">Diyabet sempozyumları, sporcu beslenmesi eğitimleri ve Nutrigüncel dijital buluşmalarına katıldım.</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <i className="ri-hand-heart-line text-4xl text-cyan-600 mb-4"></i>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Türk İşaret Dili</h3>
              <p className="text-sm text-gray-600">İletişimin herkes için erişilebilir olması inancıyla Türk İşaret Dili eğitimi aldım.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Functional Nutrition */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-serif mb-6">
              Fonksiyonel ve Bütüncül Beslenme Yaklaşımı
            </h2>
            <p className="text-xl text-emerald-50 leading-relaxed mb-8">
              <strong>Acıbadem Üniversitesi ASAGEM</strong>'den aldığım fonksiyonel beslenme eğitimi ile besinlerin vücuttaki etkilerini bütüncül bir bakış açısıyla değerlendiriyorum.
            </p>
            <p className="text-lg text-emerald-100 leading-relaxed">
              Sağlıklı beslenme; yasaklarla dolu listelerden ziyade, kişinin yaşam tarzına uyum sağlayan, öğretilen, sürdürülebilir ve keyifli bir sistemdir. Bu nedenle danışanlarıma kendi hazırladığım tariflerle kişiye özel beslenme planları sunuyorum.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

export default AboutPage;