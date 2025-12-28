import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const AntioksidanlarDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedPosts = [
    {
      title: 'Bağışıklık Sistemini Güçlendiren Besinler',
      image: 'https://readdy.ai/api/search-image?query=immune%20boosting%20foods%20colorful%20fruits%20vegetables%20citrus%20berries%20on%20wooden%20table%20bright%20natural%20lighting%20nutrition%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-immune-related-v2&orientation=landscape',
      slug: 'bagisiklik-sistemini-guclendiren-besinler',
      category: 'Sağlık',
      excerpt: 'Güçlü bir bağışıklık sistemi için doğru beslenme stratejileri',
      readTime: '6 dk',
    },
    {
      title: 'Gut Sağlığı ve Probiyotikler',
      image: 'https://readdy.ai/api/search-image?query=gut%20health%20concept%20with%20probiotic%20foods%20yogurt%20kefir%20fermented%20vegetables%20on%20clean%20surface%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-gut-related-v2&orientation=landscape',
      slug: 'gut-sagligi-ve-probiyotikler',
      category: 'Beslenme',
      excerpt: 'Bağırsak sağlığını destekleyen probiyotik besinler',
      readTime: '7 dk',
    },
    {
      title: 'Metabolizma Hızlandırmanın Bilimsel Yolları',
      image: 'https://readdy.ai/api/search-image?query=metabolism%20concept%20with%20healthy%20foods%20measuring%20tape%20fitness%20equipment%20on%20marble%20surface%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-metabolism-related-v2&orientation=landscape',
      slug: 'metabolizma-hizlandirmanin-bilimsel-yollari',
      category: 'Beslenme',
      excerpt: 'Metabolizmanızı doğal yollarla hızlandırın',
      readTime: '8 dk',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=antioxidant%20rich%20foods%20colorful%20berries%20dark%20chocolate%20green%20tea%20nuts%20seeds%20arranged%20beautifully%20on%20elegant%20table%20bright%20natural%20lighting%20food%20photography%20professional%20high%20resolution%20clean%20minimalist%20background&width=1920&height=1080&seq=blog-antioxidants-hero-v3&orientation=landscape"
            alt="Antioksidanlar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-medium mb-4">
              Sağlık
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Antioksidanlar ve Yaşlanma Karşıtı Beslenme
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <i className="ri-calendar-line"></i>
                <span>18 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-time-line"></i>
                <span>9 dakika okuma</span>
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
            Antioksidanlar, vücudumuzda oluşan serbest radikalleri nötralize ederek hücre hasarını önleyen 
            güçlü moleküllerdir. Yaşlanma sürecini yavaşlatmak ve kronik hastalıklardan korunmak için 
            antioksidan açısından zengin beslenme şarttır.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Antioksidanlar Nedir?</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=antioxidant%20molecules%20scientific%20illustration%20with%20colorful%20fruits%20vegetables%20on%20modern%20background%20educational%20health%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=antioxidants-section1-v1&orientation=landscape"
                alt="Antioksidanlar"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Antioksidanlar, serbest radikallerin neden olduğu oksidatif stresi azaltan bileşiklerdir. 
              Serbest radikaller, hücre zarlarına, DNA'ya ve proteinlere zarar vererek yaşlanmayı hızlandırır 
              ve hastalık riskini artırır.
            </p>
            <div className="bg-purple-50 rounded-xl p-6 mt-4">
              <h3 className="font-bold text-gray-900 mb-3">Başlıca Antioksidanlar:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                  <span><strong>Vitamin C:</strong> Bağışıklık sistemi ve cilt sağlığı</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                  <span><strong>Vitamin E:</strong> Hücre zarı koruyucusu</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                  <span><strong>Beta-karoten:</strong> Göz sağlığı ve bağışıklık</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                  <span><strong>Selenyum:</strong> Tiroid fonksiyonu ve DNA onarımı</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                  <span><strong>Polifenoller:</strong> Kalp sağlığı ve anti-inflamatuar</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">En Güçlü Antioksidan Kaynakları</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=superfood%20collection%20blueberries%20strawberries%20dark%20chocolate%20green%20tea%20spinach%20nuts%20arranged%20artistically%20on%20elegant%20surface%20bright%20natural%20lighting%20food%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=antioxidants-section2-v1&orientation=landscape"
                alt="Antioksidan Kaynakları"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🫐</span> Meyveler
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Yaban mersini (blueberry)</li>
                  <li>• Çilek, ahududu, böğürtlen</li>
                  <li>• Nar</li>
                  <li>• Üzüm (özellikle kırmızı)</li>
                  <li>• Portakal, greyfurt</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🥬</span> Sebzeler
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Ispanak, lahana</li>
                  <li>• Brokoli, karnabahar</li>
                  <li>• Havuç, tatlı patates</li>
                  <li>• Domates</li>
                  <li>• Kırmızı biber</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🍫</span> Diğer Kaynaklar
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Bitter çikolata (%70+)</li>
                  <li>• Yeşil çay</li>
                  <li>• Ceviz, badem</li>
                  <li>• Kırmızı fasulye</li>
                  <li>• Kakao</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🌿</span> Baharatlar
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Zerdeçal (kurkumin)</li>
                  <li>• Tarçın</li>
                  <li>• Zencefil</li>
                  <li>• Kekik, biberiye</li>
                  <li>• Karanfil</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Yaşlanma Karşıtı Beslenme İpuçları</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=anti%20aging%20nutrition%20concept%20with%20fresh%20organic%20vegetables%20fruits%20salmon%20avocado%20nuts%20on%20elegant%20table%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=antioxidants-section3-v1&orientation=landscape"
                alt="Yaşlanma Karşıtı Beslenme"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Renkli Beslenin</h3>
                  <p className="text-gray-700 text-sm">
                    Her renk farklı antioksidan içerir. Tabağınızı gökkuşağı gibi renklendir: kırmızı, 
                    turuncu, sarı, yeşil, mor besinler tüketin.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Omega-3 Yağ Asitleri</h3>
                  <p className="text-gray-700 text-sm">
                    Somon, uskumru, ceviz ve keten tohumu gibi omega-3 kaynakları, inflamasyonu azaltır 
                    ve cilt sağlığını destekler.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Şeker Tüketimini Azaltın</h3>
                  <p className="text-gray-700 text-sm">
                    Aşırı şeker, glikasyon sürecini hızlandırarak ciltte kırışıklık oluşumuna neden olur. 
                    İşlenmiş şekerlerden kaçının.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Bol Su İçin</h3>
                  <p className="text-gray-700 text-sm">
                    Hidrasyon, cilt elastikiyeti için kritiktir. Günde en az 2-3 litre su için. 
                    Yeşil çay ve bitki çayları da faydalıdır.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Kolajen Destekleyici Besinler</h3>
                  <p className="text-gray-700 text-sm">
                    C vitamini, kemik suyu, protein açısından zengin besinler kolajen üretimini destekler. 
                    Turunçgiller, kırmızı biber, kemik suyu tüketin.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Günlük Antioksidan Menü Örneği</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-sun-line text-yellow-500"></i> Kahvaltı
                </h3>
                <p className="text-gray-700">
                  Yaban mersinli yulaf lapası + ceviz + yeşil çay + portakal
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-restaurant-line text-orange-500"></i> Öğle Yemeği
                </h3>
                <p className="text-gray-700">
                  Izgara somon + bol yeşillikli salata (ıspanak, roka) + zeytinyağı + quinoa + domates
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-cake-line text-pink-500"></i> Ara Öğün
                </h3>
                <p className="text-gray-700">
                  Bitter çikolata (2-3 kare) + badem + yeşil çay
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-moon-line text-purple-500"></i> Akşam Yemeği
                </h3>
                <p className="text-gray-700">
                  Zerdeçallı tavuk + brokoli + tatlı patates + kırmızı lahana salatası
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Antioksidanların Faydaları</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="ri-heart-pulse-line text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Kalp Sağlığı</h3>
                  <p className="text-gray-700 text-sm">
                    Damar sağlığını korur, kolesterol oksidasyonunu önler
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="ri-brain-line text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Beyin Fonksiyonu</h3>
                  <p className="text-gray-700 text-sm">
                    Bilişsel fonksiyonları destekler, Alzheimer riskini azaltır
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="ri-eye-line text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Göz Sağlığı</h3>
                  <p className="text-gray-700 text-sm">
                    Makula dejenerasyonunu ve katarakt oluşumunu önler
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="ri-shield-line text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Bağışıklık</h3>
                  <p className="text-gray-700 text-sm">
                    Bağışıklık sistemini güçlendirir, enfeksiyonlara karşı korur
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="ri-user-smile-line text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Cilt Sağlığı</h3>
                  <p className="text-gray-700 text-sm">
                    Kırışıklıkları azaltır, cilt elastikiyetini artırır
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="ri-dna-line text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Kanser Koruması</h3>
                  <p className="text-gray-700 text-sm">
                    DNA hasarını önler, kanser riskini azaltabilir
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Conclusion */}
        <div className="mt-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Sonuç</h2>
          <p className="leading-relaxed mb-4">
            Antioksidan açısından zengin beslenme, yaşlanma sürecini yavaşlatmanın ve sağlıklı bir yaşam 
            sürmenin anahtarıdır. Renkli meyve ve sebzeler, kaliteli protein kaynakları, sağlıklı yağlar 
            ve bol su tüketimi, vücudunuzu serbest radikallere karşı korur.
          </p>
          <p className="leading-relaxed">
            Unutmayın, antioksidanlar tek başına mucize yaratmaz. Dengeli beslenme, düzenli egzersiz, 
            kaliteli uyku ve stres yönetimi ile birleştiğinde en etkili sonuçları verir.
          </p>
        </div>

        {/* Author Bio */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              AK
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dyt. Ayşenur Korkmaz</h3>
            <p className="text-gray-600 leading-relaxed">
              İstanbul Arel Üniversitesi Beslenme ve Diyetetik Bölümü mezunu. Fonksiyonel beslenme 
              eğitimi almış, yaşlanma karşıtı beslenme ve antioksidan terapisi konusunda uzmanlaşmıştır.
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
      <div className="max-w-7xl mx-auto px-4 py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">
            İlgili <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Yazılar</span>
          </h2>
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
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                <div className="relative">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-purple-600 text-xs font-bold rounded-full shadow-lg">
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
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 mb-3 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm group-hover:gap-3 transition-all">
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

export default AntioksidanlarDetail;