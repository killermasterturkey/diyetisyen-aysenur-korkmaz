import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const VejetaryenDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedPosts = [
    {
      title: 'Antioksidanlar ve Yaşlanma Karşıtı Beslenme',
      image: 'https://readdy.ai/api/search-image?query=antioxidant%20rich%20foods%20colorful%20berries%20nuts%20vegetables%20on%20marble%20surface%20bright%20natural%20lighting%20nutrition%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-antioxidant-v13&orientation=landscape',
      slug: 'antioksidanlar-ve-yaslanma-karsiti-beslenme',
      category: 'Beslenme',
      excerpt: 'Yaşlanmayı yavaşlatan antioksidan besinler',
      readTime: '7 dk',
    },
    {
      title: 'Sağlıklı Kilo Vermenin Altın Kuralları',
      image: 'https://readdy.ai/api/search-image?query=healthy%20weight%20loss%20concept%20measuring%20tape%20fresh%20foods%20fitness%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-weight-v13&orientation=landscape',
      slug: 'saglikli-kilo-vermenin-altin-kurallari',
      category: 'Beslenme',
      excerpt: 'Kalıcı kilo verme için bilimsel yaklaşımlar',
      readTime: '9 dk',
    },
    {
      title: 'Metabolizma Hızlandırmanın Bilimsel Yolları',
      image: 'https://readdy.ai/api/search-image?query=metabolism%20boost%20concept%20healthy%20foods%20fitness%20equipment%20on%20marble%20surface%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-metabolism-v13&orientation=landscape',
      slug: 'metabolizma-hizlandirmanin-bilimsel-yollari',
      category: 'Beslenme',
      excerpt: 'Metabolizmanızı doğal yollarla hızlandırın',
      readTime: '8 dk',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=vegan%20vegetarian%20food%20concept%20colorful%20fresh%20vegetables%20fruits%20legumes%20tofu%20nuts%20seeds%20arranged%20beautifully%20on%20rustic%20wooden%20table%20bright%20natural%20lighting%20food%20photography%20professional%20high%20resolution%20clean%20minimalist%20background&width=1920&height=1080&seq=blog-vegan-hero-v3&orientation=landscape"
            alt="Vejetaryen Beslenme"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium mb-4">
              Beslenme
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Vejetaryen ve Vegan Beslenme Rehberi
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <i className="ri-calendar-line"></i>
                <span>20 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-time-line"></i>
                <span>10 dakika okuma</span>
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
            Bitkisel beslenme, doğru planlandığında sağlıklı ve sürdürülebilir bir yaşam tarzıdır. 
            Ancak besin eksikliklerinden kaçınmak için dikkatli olunması gereken noktalar vardır. 
            İşte vejetaryen ve vegan beslenmenin tüm detayları!
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vejetaryen vs Vegan: Farklar Nelerdir?</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=vegetarian%20vegan%20diet%20comparison%20chart%20with%20plant%20foods%20dairy%20eggs%20on%20modern%20background%20educational%20nutrition%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=vegan-section1-v1&orientation=landscape"
                alt="Vejetaryen ve Vegan Farkları"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🥚</span> Vejetaryen
                </h3>
                <p className="text-gray-700 mb-3">
                  Et, tavuk, balık tüketmez ancak hayvansal ürünler tüketebilir:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Süt ve süt ürünleri</li>
                  <li>✓ Yumurta</li>
                  <li>✓ Bal</li>
                  <li>✓ Tüm bitkisel besinler</li>
                </ul>
              </div>
              <div className="bg-lime-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🌱</span> Vegan
                </h3>
                <p className="text-gray-700 mb-3">
                  Hiçbir hayvansal ürün tüketmez:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✗ Et, tavuk, balık</li>
                  <li>✗ Süt ve süt ürünleri</li>
                  <li>✗ Yumurta</li>
                  <li>✗ Bal</li>
                  <li>✓ Sadece bitkisel besinler</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Protein Kaynakları</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=plant%20protein%20sources%20collection%20tofu%20tempeh%20legumes%20chickpeas%20lentils%20quinoa%20nuts%20seeds%20arranged%20artistically%20on%20wooden%20surface%20bright%20natural%20lighting%20food%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=vegan-section2-v1&orientation=landscape"
                alt="Bitkisel Protein Kaynakları"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bitkisel beslenenlerin en çok merak ettiği konu protein alımıdır. İşte en iyi bitkisel protein kaynakları:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  🫘
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Baklagiller</h3>
                  <p className="text-sm text-gray-600">Mercimek, nohut, fasulye, bezelye</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  🧊
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Soya Ürünleri</h3>
                  <p className="text-sm text-gray-600">Tofu, tempeh, edamame, soya sütü</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  🌾
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Tahıllar</h3>
                  <p className="text-sm text-gray-600">Quinoa, amarant, bulgur, yulaf</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  🥜
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Kuruyemişler</h3>
                  <p className="text-sm text-gray-600">Badem, ceviz, fıstık, yer fıstığı</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  🌰
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Tohumlar</h3>
                  <p className="text-sm text-gray-600">Chia, keten, kabak çekirdeği, susam</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  🥬
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Yeşil Yapraklılar</h3>
                  <p className="text-sm text-gray-600">Ispanak, brokoli, kereviz</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dikkat Edilmesi Gereken Besin Öğeleri</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=vitamin%20supplements%20nutritional%20concept%20with%20pills%20capsules%20fresh%20vegetables%20on%20clean%20surface%20bright%20natural%20lighting%20health%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=vegan-section3-v1&orientation=landscape"
                alt="Besin Öğeleri"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-alert-line text-red-600"></i>
                  B12 Vitamini (Kritik!)
                </h3>
                <p className="text-gray-700 mb-2">
                  Sadece hayvansal kaynaklarda bulunur. Vegan ve vejetaryenler mutlaka takviye almalıdır.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Çözüm:</strong> B12 takviyesi, zenginleştirilmiş bitkisel sütler, besin mayası
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-alert-line text-orange-600"></i>
                  Demir
                </h3>
                <p className="text-gray-700 mb-2">
                  Bitkisel demir (non-heme) daha az emilir. C vitamini ile birlikte tüketilmelidir.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Kaynaklar:</strong> Mercimek, ıspanak, kuru kayısı, kabak çekirdeği, tahıllar
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-alert-line text-yellow-600"></i>
                  Kalsiyum
                </h3>
                <p className="text-gray-700 mb-2">
                  Süt ürünü tüketmeyenler için önemli. Kemik sağlığı için kritiktir.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Kaynaklar:</strong> Zenginleştirilmiş bitkisel sütler, tahini, koyu yeşil yapraklılar, tofu
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-alert-line text-blue-600"></i>
                  Omega-3 Yağ Asitleri
                </h3>
                <p className="text-gray-700 mb-2">
                  EPA ve DHA, beyin ve kalp sağlığı için önemlidir.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Kaynaklar:</strong> Keten tohumu, chia tohumu, ceviz, alg bazlı takviyeler
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-alert-line text-purple-600"></i>
                  D Vitamini
                </h3>
                <p className="text-gray-700 mb-2">
                  Güneş ışığı ana kaynaktır. Kış aylarında takviye gerekebilir.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Çözüm:</strong> Güneşlenme, D vitamini takviyesi, zenginleştirilmiş besinler
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-alert-line text-green-600"></i>
                  Çinko
                </h3>
                <p className="text-gray-700 mb-2">
                  Bağışıklık sistemi ve yara iyileşmesi için önemlidir.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Kaynaklar:</strong> Baklagiller, kuruyemişler, tohumlar, tam tahıllar
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Günlük Vegan Menü Örneği</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-sun-line text-yellow-500"></i> Kahvaltı
                </h3>
                <p className="text-gray-700">
                  Yulaf lapası + chia tohumu + muz + ceviz + badem sütü + B12 takviyesi
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-apple-line text-green-500"></i> Ara Öğün
                </h3>
                <p className="text-gray-700">
                  Elma + fıstık ezmesi + keten tohumu
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-restaurant-line text-orange-500"></i> Öğle Yemeği
                </h3>
                <p className="text-gray-700">
                  Mercimek köftesi + bulgur pilavı + bol yeşillikli salata + zeytinyağı + portakal (C vitamini için)
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-cake-line text-pink-500"></i> Ara Öğün
                </h3>
                <p className="text-gray-700">
                  Hummus + havuç çubukları + tam tahıllı kraker
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-moon-line text-purple-500"></i> Akşam Yemeği
                </h3>
                <p className="text-gray-700">
                  Tofu sote + quinoa + brokoli + tatlı patates + tahini sosu
                </p>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Başarılı Olmanın İpuçları</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-lime-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Çeşitlilik Sağlayın</h3>
                  <p className="text-gray-700 text-sm">
                    Her gün farklı renklerde meyve ve sebze tüketin. Çeşitlilik, besin eksikliğini önler.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-lime-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Protein Kombinasyonu</h3>
                  <p className="text-gray-700 text-sm">
                    Tahıl + baklagil kombinasyonu (örn: pirinç + fasulye) tam protein sağlar.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-lime-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Takviye Kullanın</h3>
                  <p className="text-gray-700 text-sm">
                    B12, D vitamini ve omega-3 takviyeleri düzenli kullanın. Kan değerlerinizi kontrol ettirin.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-lime-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Yemek Planlaması</h3>
                  <p className="text-gray-700 text-sm">
                    Haftalık menü planlayın. Hazır atıştırmalıklar bulundurun (kuruyemiş, meyve, hummus).
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-lime-50 rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Profesyonel Destek</h3>
                  <p className="text-gray-700 text-sm">
                    Bir diyetisyenle çalışın. Kişiye özel plan, besin eksikliklerini önler.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Conclusion */}
        <div className="mt-12 bg-gradient-to-br from-green-500 to-lime-600 rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Sonuç</h2>
          <p className="leading-relaxed mb-4">
            Vejetaryen ve vegan beslenme, doğru planlandığında son derece sağlıklı ve sürdürülebilir bir 
            yaşam tarzıdır. Protein çeşitliliği, kritik besin öğelerinin takviyeleri ve düzenli kan 
            kontrolü ile besin eksikliklerinden kaçınabilirsiniz.
          </p>
          <p className="leading-relaxed">
            Unutmayın, her bireyin ihtiyaçları farklıdır. Bitkisel beslenmeye geçiş yaparken mutlaka 
            bir diyetisyenle çalışın ve düzenli sağlık kontrollerinizi yaptırın.
          </p>
        </div>

        {/* Author Bio */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-lime-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              AK
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dyt. Ayşenur Korkmaz</h3>
            <p className="text-gray-600 leading-relaxed">
              İstanbul Arel Üniversitesi Beslenme ve Diyetetik Bölümü mezunu. Vejetaryen ve vegan 
              beslenme konusunda uzmanlaşmış, bitkisel beslenenlere kişiye özel programlar hazırlıyor.
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
            İlgili <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Yazılar</span>
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
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                <div className="relative">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-green-600 text-xs font-bold rounded-full shadow-lg">
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
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300 mb-3 line-clamp-2 leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-green-600 font-semibold text-sm group-hover:gap-3 transition-all">
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

export default VejetaryenDetail;