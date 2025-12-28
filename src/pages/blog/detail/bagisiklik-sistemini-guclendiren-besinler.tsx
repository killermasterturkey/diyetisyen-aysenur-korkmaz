import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const BagisiklikDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedPosts = [
    {
      title: 'Antioksidanlar ve Yaşlanma Karşıtı Beslenme',
      image: 'https://readdy.ai/api/search-image?query=antioxidant%20rich%20foods%20colorful%20berries%20vegetables%20nuts%20on%20marble%20surface%20bright%20natural%20lighting%20nutrition%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-antioxidant-v4&orientation=landscape',
      slug: 'antioksidanlar-ve-yaslanma-karsiti-beslenme',
      category: 'Beslenme',
      excerpt: 'Yaşlanmayı yavaşlatan antioksidan besinler',
      readTime: '7 dk',
    },
    {
      title: 'Gut Sağlığı ve Probiyotikler',
      image: 'https://readdy.ai/api/search-image?query=probiotic%20foods%20yogurt%20kefir%20fermented%20vegetables%20kimchi%20on%20clean%20white%20surface%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-gut-v4&orientation=landscape',
      slug: 'gut-sagligi-ve-probiyotikler',
      category: 'Sağlık',
      excerpt: 'Bağırsak sağlığını destekleyen probiyotik besinler',
      readTime: '7 dk',
    },
    {
      title: 'Vejetaryen ve Vegan Beslenme Rehberi',
      image: 'https://readdy.ai/api/search-image?query=plant%20based%20diet%20colorful%20vegetables%20legumes%20grains%20on%20wooden%20table%20bright%20natural%20lighting%20vegan%20nutrition%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-vegan-v4&orientation=landscape',
      slug: 'vejetaryen-ve-vegan-beslenme-rehberi',
      category: 'Beslenme',
      excerpt: 'Bitkisel beslenme ile sağlıklı yaşam',
      readTime: '8 dk',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=immune%20system%20boost%20concept%20with%20vitamin%20C%20rich%20foods%20citrus%20fruits%20oranges%20lemons%20colorful%20vegetables%20broccoli%20peppers%20garlic%20ginger%20on%20white%20marble%20surface%20bright%20natural%20lighting%20health%20wellness%20photography%20professional%20high%20resolution%20clean%20minimalist%20background&width=1920&height=1080&seq=blog-immune-hero-v3&orientation=landscape"
            alt="Bağışıklık Sistemi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium mb-4">
              Sağlık
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Bağışıklık Sistemini Güçlendiren Besinler
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <i className="ri-calendar-line"></i>
                <span>16 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-time-line"></i>
                <span>8 dakika okuma</span>
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
            Güçlü bir bağışıklık sistemi, hastalıklardan korunmanın ve sağlıklı bir yaşam sürmenin temelidir. 
            Doğru beslenme, bağışıklık sistemimizi destekleyen en önemli faktörlerden biridir. Peki hangi 
            besinler bağışıklığımızı güçlendirir?
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">C Vitamini Kaynakları</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=vitamin%20C%20rich%20foods%20citrus%20fruits%20oranges%20lemons%20grapefruits%20kiwi%20strawberries%20red%20peppers%20on%20white%20marble%20surface%20bright%20natural%20lighting%20food%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=immune-section1-v1&orientation=landscape"
                alt="C Vitamini Kaynakları"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              C vitamini, bağışıklık hücrelerinin üretimini ve fonksiyonunu destekleyen en önemli vitaminlerden 
              biridir. Aynı zamanda güçlü bir antioksidan olarak hücreleri hasardan korur.
            </p>
            <div className="bg-orange-50 rounded-xl p-6 mt-4">
              <h3 className="font-bold text-gray-900 mb-3">En İyi C Vitamini Kaynakları:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-orange-600 mt-1"></i>
                  <span><strong>Turunçgiller:</strong> Portakal, limon, greyfurt, mandalina</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-orange-600 mt-1"></i>
                  <span><strong>Kırmızı Biber:</strong> C vitamini açısından portakaldan daha zengin</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-orange-600 mt-1"></i>
                  <span><strong>Kivi:</strong> Günlük ihtiyacın %230'unu karşılar</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-orange-600 mt-1"></i>
                  <span><strong>Çilek:</strong> Antioksidan ve C vitamini deposu</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-orange-600 mt-1"></i>
                  <span><strong>Brokoli:</strong> C vitamini ve diğer besin öğeleri</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">D Vitamini ve Bağışıklık</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=vitamin%20D%20sources%20fatty%20fish%20salmon%20mackerel%20egg%20yolks%20mushrooms%20fortified%20milk%20on%20elegant%20table%20bright%20natural%20lighting%20food%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=immune-section2-v1&orientation=landscape"
                alt="D Vitamini Kaynakları"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              D vitamini eksikliği, enfeksiyonlara karşı direnci azaltır ve otoimmün hastalık riskini artırır. 
              Özellikle kış aylarında D vitamini takviyesi önemlidir.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-sun-line text-yellow-500 text-2xl"></i>
                  Güneş Işığı
                </h3>
                <p className="text-gray-700 text-sm">
                  Günde 15-20 dakika güneş ışığı, D vitamini üretimi için yeterlidir. Öğle saatlerinde 
                  kollar ve bacaklar açık olmalı.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-restaurant-line text-orange-500 text-2xl"></i>
                  Besin Kaynakları
                </h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Yağlı balıklar (somon, uskumru)</li>
                  <li>• Yumurta sarısı</li>
                  <li>• Mantarlar</li>
                  <li>• Takviye edilmiş süt ve tahıllar</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Çinko ve Bağışıklık Hücreleri</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=zinc%20rich%20foods%20red%20meat%20shellfish%20oysters%20legumes%20nuts%20seeds%20pumpkin%20seeds%20on%20wooden%20table%20bright%20natural%20lighting%20food%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=immune-section3-v1&orientation=landscape"
                alt="Çinko Kaynakları"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Çinko, bağışıklık hücrelerinin gelişimi ve fonksiyonu için gereklidir. Çinko eksikliği, 
              enfeksiyonlara karşı hassasiyeti artırır.
            </p>
            <div className="bg-orange-50 rounded-xl p-6 mt-4">
              <h3 className="font-bold text-gray-900 mb-3">Çinko Açısından Zengin Besinler:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Kırmızı et</li>
                  <li>• Kabuklu deniz ürünleri (istiridye)</li>
                  <li>• Tavuk</li>
                  <li>• Baklagiller (nohut, mercimek)</li>
                </ul>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Kuruyemişler (kabak çekirdeği)</li>
                  <li>• Tam tahıllar</li>
                  <li>• Süt ürünleri</li>
                  <li>• Yumurta</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Probiyotikler ve Bağırsak Sağlığı</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=probiotic%20foods%20yogurt%20kefir%20fermented%20vegetables%20kimchi%20sauerkraut%20kombucha%20on%20clean%20white%20surface%20bright%20natural%20lighting%20food%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=immune-section4-v1&orientation=landscape"
                alt="Probiyotik Kaynakları"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bağırsak mikrobiyomu, bağışıklık sisteminin %70'ini oluşturur. Probiyotikler, bağırsak 
              sağlığını destekleyerek bağışıklığı güçlendirir.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🥛</div>
                <h3 className="font-bold text-gray-900 mb-2">Yoğurt</h3>
                <p className="text-gray-700 text-sm">Canlı kültür içeren doğal yoğurt</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🥤</div>
                <h3 className="font-bold text-gray-900 mb-2">Kefir</h3>
                <p className="text-gray-700 text-sm">Probiyotik açısından zengin içecek</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🥬</div>
                <h3 className="font-bold text-gray-900 mb-2">Fermente Sebzeler</h3>
                <p className="text-gray-700 text-sm">Turşu, kimchi, lahana turşusu</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Antioksidanlar ve Bağışıklık</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=antioxidant%20rich%20foods%20colorful%20berries%20blueberries%20strawberries%20dark%20leafy%20greens%20nuts%20seeds%20on%20elegant%20surface%20bright%20natural%20lighting%20food%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=immune-section5-v1&orientation=landscape"
                alt="Antioksidan Kaynakları"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Antioksidanlar, hücreleri oksidatif stres ve hasardan korur. Renkli sebze ve meyveler, 
              antioksidan açısından zengindir.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Renkli Meyveler</h3>
                  <p className="text-gray-700 text-sm">
                    Yaban mersini, çilek, ahududu, böğürtlen gibi koyu renkli meyveler antioksidan deposudur.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Yeşil Yapraklı Sebzeler</h3>
                  <p className="text-gray-700 text-sm">
                    Ispanak, lahana, roka gibi sebzeler vitamin ve mineral açısından zengindir.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Kuruyemişler</h3>
                  <p className="text-gray-700 text-sm">
                    Ceviz, badem, fındık E vitamini ve sağlıklı yağlar içerir.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bağışıklığı Güçlendiren Diğer Besinler</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🧄</span> Sarımsak
                </h3>
                <p className="text-gray-700 text-sm">
                  Allicin içeriği sayesinde antibakteriyel ve antiviral özelliklere sahiptir. 
                  Günde 1-2 diş sarımsak tüketmek bağışıklığı destekler.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🫚</span> Zencefil
                </h3>
                <p className="text-gray-700 text-sm">
                  Anti-inflamatuar özellikleri ile bağışıklık sistemini destekler. 
                  Çay olarak tüketilebilir.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🍯</span> Bal
                </h3>
                <p className="text-gray-700 text-sm">
                  Doğal antibakteriyel özelliklere sahiptir. Özellikle çam balı ve 
                  manuka balı bağışıklık için faydalıdır.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🍵</span> Yeşil Çay
                </h3>
                <p className="text-gray-700 text-sm">
                  EGCG adlı güçlü antioksidan içerir. Günde 2-3 fincan yeşil çay 
                  bağışıklığı destekler.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Conclusion */}
        <div className="mt-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Sonuç</h2>
          <p className="leading-relaxed mb-4">
            Güçlü bir bağışıklık sistemi için dengeli ve çeşitli beslenme şarttır. C vitamini, D vitamini, 
            çinko, probiyotikler ve antioksidanlar açısından zengin besinler tüketmek, bağışıklığınızı 
            destekler.
          </p>
          <p className="leading-relaxed">
            Unutmayın, sağlıklı beslenmenin yanı sıra düzenli uyku, stres yönetimi, düzenli egzersiz ve 
            bol su tüketimi de bağışıklık sistemi için önemlidir.
          </p>
        </div>

        {/* Author Bio */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              AK
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dyt. Ayşenur Korkmaz</h3>
            <p className="text-gray-600 leading-relaxed">
              İstanbul Arel Üniversitesi Beslenme ve Diyetetik Bölümü mezunu. Bağışıklık sistemini 
              destekleyen beslenme programları ve fonksiyonel beslenme konusunda uzmanlaşmıştır.
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
            İlgili <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Yazılar</span>
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
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                <div className="relative">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-emerald-600 text-xs font-bold rounded-full shadow-lg">
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
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 mb-3 line-clamp-2 leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all">
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

export default BagisiklikDetail;
