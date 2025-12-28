import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const GutSagligiDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedPosts = [
    {
      title: 'Antioksidanlar ve Yaşlanma Karşıtı Beslenme',
      image: 'https://readdy.ai/api/search-image?query=antioxidant%20foods%20colorful%20berries%20nuts%20vegetables%20on%20marble%20surface%20bright%20natural%20lighting%20nutrition%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-antioxidant-v6&orientation=landscape',
      slug: 'antioksidanlar-ve-yaslanma-karsiti-beslenme',
      category: 'Beslenme',
      excerpt: 'Yaşlanmayı yavaşlatan antioksidan besinler',
      readTime: '7 dk',
    },
    {
      title: 'Aralıklı Oruç ve Metabolik Sağlık',
      image: 'https://readdy.ai/api/search-image?query=intermittent%20fasting%20concept%20clock%20healthy%20foods%20time%20restricted%20eating%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-fasting-v6&orientation=landscape',
      slug: 'aralikli-oruc-ve-metabolik-saglik',
      category: 'Beslenme',
      excerpt: 'Aralıklı oruç ile metabolik sağlığınızı optimize edin',
      readTime: '7 dk',
    },
    {
      title: 'Stres ve Beslenme İlişkisi',
      image: 'https://readdy.ai/api/search-image?query=stress%20relief%20foods%20calming%20herbal%20tea%20relaxation%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-stress-v6&orientation=landscape',
      slug: 'stres-ve-beslenme-iliskisi',
      category: 'Yaşam Tarzı',
      excerpt: 'Stresi beslenmeyle yönetme yöntemleri',
      readTime: '6 dk',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=gut%20health%20concept%20with%20probiotic%20foods%20yogurt%20kefir%20fermented%20vegetables%20kimchi%20sauerkraut%20on%20wooden%20table%20bright%20natural%20lighting%20health%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=1920&height=1080&seq=blog-gut-health-hero-v1&orientation=landscape"
            alt="Gut Sağlığı"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium mb-4">
              Sağlık
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Gut Sağlığı ve Probiyotikler
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <i className="ri-calendar-line"></i>
                <span>28 Aralık 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-time-line"></i>
                <span>7 dakika okuma</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-user-line"></i>
                <span>Dyt. Ayşenur Korkmaz</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Bağırsak sağlığı, genel sağlığımızın temel taşlarından biridir. Son yıllarda yapılan araştırmalar, 
            bağırsak mikrobiyotasının bağışıklık sisteminden ruh haline, kilo yönetiminden kronik hastalıklara 
            kadar birçok alanda kritik rol oynadığını gösteriyor.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gut Mikrobiyotası Nedir?</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=gut%20microbiome%20illustration%20concept%20with%20digestive%20system%20healthy%20bacteria%20probiotic%20organisms%20scientific%20visualization%20bright%20colors%20professional%20medical%20photography%20high%20resolution&width=800&height=500&seq=gut-section1-v1&orientation=landscape"
                alt="Gut Mikrobiyotası"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bağırsak mikrobiyotası, sindirim sistemimizde yaşayan trilyonlarca mikroorganizmadan oluşur. 
              Bu mikroorganizmalar arasında bakteriler, virüsler, mantarlar ve diğer mikropler bulunur. 
              Sağlıklı bir mikrobiyota, çeşitli ve dengeli bir mikroorganizma topluluğuna sahiptir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bu mikroorganizmalar, besinlerin sindirilmesine yardımcı olur, vitaminler üretir, bağışıklık 
              sistemini düzenler ve zararlı mikroorganizmalara karşı koruma sağlar.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Probiyotikler Nedir ve Neden Önemlidir?</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=probiotic%20supplements%20capsules%20with%20yogurt%20kefir%20fermented%20foods%20arranged%20beautifully%20on%20clean%20surface%20professional%20product%20photography%20bright%20natural%20lighting%20high%20resolution&width=800&height=500&seq=gut-section2-v1&orientation=landscape"
                alt="Probiyotikler"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Probiyotikler, yeterli miktarda tüketildiğinde sağlık faydaları sağlayan canlı mikroorganizmalardır. 
              En yaygın probiyotikler Lactobacillus ve Bifidobacterium türleridir.
            </p>
            <div className="bg-white rounded-xl p-6 mt-4">
              <h3 className="font-bold text-gray-900 mb-3">Probiyotiklerin Faydaları:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-green-600 mt-1"></i>
                  <span>Sindirim sistemini düzenler</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-green-600 mt-1"></i>
                  <span>Bağışıklık sistemini güçlendirir</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-green-600 mt-1"></i>
                  <span>Kabızlık ve ishali önler</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-green-600 mt-1"></i>
                  <span>Besin emilimini artırır</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-green-600 mt-1"></i>
                  <span>Ruh halini iyileştirebilir</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Probiyotik Açısından Zengin Besinler</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=probiotic%20rich%20foods%20collection%20yogurt%20kefir%20kombucha%20kimchi%20sauerkraut%20miso%20tempeh%20arranged%20beautifully%20on%20wooden%20table%20professional%20food%20photography%20bright%20natural%20lighting%20high%20resolution&width=800&height=500&seq=gut-section3-v1&orientation=landscape"
                alt="Probiyotik Besinler"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-heart-pulse-line text-green-600"></i>
                  Yoğurt
                </h3>
                <p className="text-gray-700 text-sm">
                  En yaygın probiyotik kaynağı. Canlı kültür içeren yoğurtları tercih edin.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-heart-pulse-line text-green-600"></i>
                  Kefir
                </h3>
                <p className="text-gray-700 text-sm">
                  Yoğurttan daha fazla probiyotik türü içerir. Güçlü bir probiyotik kaynağıdır.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-heart-pulse-line text-green-600"></i>
                  Turşu
                </h3>
                <p className="text-gray-700 text-sm">
                  Doğal fermantasyon ile yapılan turşular probiyotik açısından zengindir.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-heart-pulse-line text-green-600"></i>
                  Kombucha
                </h3>
                <p className="text-gray-700 text-sm">
                  Fermente çay içeceği. Probiyotik ve antioksidan açısından zengindir.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-heart-pulse-line text-green-600"></i>
                  Kimchi
                </h3>
                <p className="text-gray-700 text-sm">
                  Kore mutfağından fermente lahana. Probiyotik ve vitamin açısından zengindir.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-heart-pulse-line text-green-600"></i>
                  Tempeh
                </h3>
                <p className="text-gray-700 text-sm">
                  Fermente soya ürünü. Protein ve probiyotik açısından zengindir.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Prebiyotikler: Probiyotiklerin Besini</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=prebiotic%20foods%20collection%20bananas%20garlic%20onions%20asparagus%20oats%20whole%20grains%20arranged%20beautifully%20on%20wooden%20table%20professional%20food%20photography%20bright%20natural%20lighting%20high%20resolution&width=800&height=500&seq=gut-section4-v1&orientation=landscape"
                alt="Prebiyotik Besinler"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prebiyotikler, probiyotik bakterilerin beslenmesini sağlayan sindirilemeyen lif türleridir. 
              Bağırsak mikrobiyotasının sağlıklı kalması için prebiyotik tüketimi de önemlidir.
            </p>
            <div className="bg-white rounded-xl p-6 mt-4">
              <h3 className="font-bold text-gray-900 mb-3">Prebiyotik Kaynakları:</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="ri-arrow-right-circle-fill text-amber-600 mt-1"></i>
                  <span>Sarımsak ve soğan</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-arrow-right-circle-fill text-amber-600 mt-1"></i>
                  <span>Pırasa</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-arrow-right-circle-fill text-amber-600 mt-1"></i>
                  <span>Yulaf</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-arrow-right-circle-fill text-amber-600 mt-1"></i>
                  <span>Muz</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-arrow-right-circle-fill text-amber-600 mt-1"></i>
                  <span>Kuşkonmaz</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-arrow-right-circle-fill text-amber-600 mt-1"></i>
                  <span>Elma</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gut Sağlığını Korumanın Yolları</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Çeşitli Beslenin</h3>
                  <p className="text-gray-700 text-sm">
                    Farklı besin gruplarından çeşitli yiyecekler tüketmek, mikrobiyota çeşitliliğini artırır.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Lif Tüketimini Artırın</h3>
                  <p className="text-gray-700 text-sm">
                    Sebze, meyve, tam tahıllar ve baklagiller bağırsak sağlığını destekler.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Gereksiz Antibiyotik Kullanımından Kaçının</h3>
                  <p className="text-gray-700 text-sm">
                    Antibiyotikler yararlı bakterileri de öldürebilir. Sadece gerektiğinde kullanın.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Stresi Yönetin</h3>
                  <p className="text-gray-700 text-sm">
                    Kronik stres bağırsak mikrobiyotasını olumsuz etkiler. Meditasyon ve yoga faydalıdır.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Düzenli Uyuyun</h3>
                  <p className="text-gray-700 text-sm">
                    Kaliteli uyku, bağırsak sağlığı için kritik öneme sahiptir.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Conclusion */}
        <div className="mt-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Sonuç</h2>
          <p className="leading-relaxed mb-4">
            Bağırsak sağlığı, genel sağlığımızın temel taşlarından biridir. Probiyotik ve prebiyotik açısından 
            zengin bir beslenme, çeşitli gıda tüketimi ve sağlıklı yaşam tarzı alışkanlıkları ile bağırsak 
            mikrobiyotanızı destekleyebilirsiniz.
          </p>
          <p className="leading-relaxed">
            Sindirim sistemi sorunlarınız varsa veya probiyotik takviyesi almayı düşünüyorsanız, mutlaka 
            bir sağlık profesyoneline danışın.
          </p>
        </div>

        {/* Author Bio */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              AK
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dyt. Ayşenur Korkmaz</h3>
            <p className="text-gray-600 leading-relaxed">
              İstanbul Arel Üniversitesi Beslenme ve Diyetetik Bölümü mezunu. Fonksiyonel beslenme alanında 
              uzmanlaşmış, bağırsak sağlığı ve mikrobiyota konularında danışanlarına rehberlik eden bir diyetisyen.
            </p>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="mt-8 flex items-center gap-4">
          <span className="text-gray-600 font-medium">Paylaş:</span>
          <div className="flex gap-3">
            <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <i className="ri-facebook-fill"></i>
            </button>
            <button className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
              <i className="ri-twitter-fill"></i>
            </button>
            <button className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
              <i className="ri-instagram-fill"></i>
            </button>
            <button className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
              <i className="ri-whatsapp-fill"></i>
            </button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold font-serif text-gray-900 mb-4">
            İlgili <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Yazılar</span>
          </h3>
          <p className="text-lg text-gray-600">Sizi ilgilendirebilecek diğer içerikler</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map((post, index) => (
            <Link
              key={index}
              to={`/blog/${post.slug}`}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                <div className="relative">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-teal-600 text-xs font-bold rounded-full shadow-lg">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white/90 text-sm">
                        <i className="ri-time-line"></i>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300 mb-3 line-clamp-2 leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>Devamını Oku</span>
                      <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GutSagligiDetail;
