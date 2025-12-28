import { Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

export default function HormonDengesiDetail() {
  const relatedPosts = [
    {
      title: 'Sağlıklı Kilo Vermenin Altın Kuralları',
      image: 'https://readdy.ai/api/search-image?query=healthy%20weight%20loss%20concept%20measuring%20tape%20fresh%20foods%20fitness%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-weight-v8&orientation=landscape',
      slug: 'saglikli-kilo-vermenin-altin-kurallari',
      category: 'Beslenme',
      excerpt: 'Kalıcı kilo verme için bilimsel yaklaşımlar',
      readTime: '9 dk',
    },
    {
      title: 'Stres ve Beslenme İlişkisi',
      image: 'https://readdy.ai/api/search-image?query=stress%20management%20calming%20foods%20herbal%20tea%20relaxation%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-stress-v8&orientation=landscape',
      slug: 'stres-ve-beslenme-iliskisi',
      category: 'Yaşam Tarzı',
      excerpt: 'Stresi beslenmeyle yönetme yöntemleri',
      readTime: '6 dk',
    },
    {
      title: 'Hidrasyon ve Sağlık',
      image: 'https://readdy.ai/api/search-image?query=hydration%20concept%20fresh%20water%20glass%20fruits%20vegetables%20on%20clean%20surface%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-hydration-v8&orientation=landscape',
      slug: 'hidrasyon-ve-saglik',
      category: 'Sağlık',
      excerpt: 'Yeterli sıvı tüketiminin önemi ve faydaları',
      readTime: '5 dk',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=hormone%20balance%20concept%20with%20healthy%20foods%20supplements%20natural%20ingredients%20on%20white%20background%20women%20health%20wellness%20photography%20soft%20natural%20lighting&width=1920&height=800&seq=hero1&orientation=landscape"
            alt="Hormon Dengesi ve Beslenme"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative h-full max-w-4xl mx-auto px-4 flex flex-col justify-end pb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-white/90">
              <span className="flex items-center gap-2">
                <i className="ri-calendar-line"></i>
                8 Mart 2024
              </span>
              <span className="flex items-center gap-2">
                <i className="ri-time-line"></i>
                9 dk okuma
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                Kadın Sağlığı
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Hormon Dengesi ve Beslenme
            </h1>
            <p className="text-xl text-white/90">
              Hormonlarınızı beslenmeyle nasıl dengeleyebilirsiniz?
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hormonlar ve Sağlık</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hormonlar, vücudumuzun kimyasal habercileridir. Metabolizmadan ruh haline, uykudan üreme sağlığına kadar birçok yaşamsal fonksiyonu düzenlerler. Beslenme, hormon dengesini etkileyen en önemli faktörlerden biridir ve doğru besinlerle hormonlarınızı optimize edebilirsiniz.
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-heart-pulse-line text-purple-600"></i>
                Temel Hormonlar ve Fonksiyonları
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                  <span><strong>İnsülin:</strong> Kan şekeri düzenleme ve enerji metabolizması</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                  <span><strong>Kortizol:</strong> Stres yanıtı ve metabolizma</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                  <span><strong>Östrojen ve Progesteron:</strong> Üreme sağlığı ve kadın döngüsü</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                  <span><strong>Tiroid Hormonları:</strong> Metabolizma hızı ve enerji</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-purple-600 mt-1"></i>
                  <span><strong>Leptin ve Grelin:</strong> Açlık ve tokluk sinyalleri</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Hormon Dengesizliğinin Belirtileri</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fiziksel Belirtiler</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ani kilo değişimleri</li>
                  <li>• Yorgunluk ve enerji düşüklüğü</li>
                  <li>• Uyku problemleri</li>
                  <li>• Cilt problemleri (akne, kuruluk)</li>
                  <li>• Saç dökülmesi</li>
                  <li>• Düzensiz adet döngüsü</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Duygusal Belirtiler</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ruh hali değişimleri</li>
                  <li>• Anksiyete ve depresyon</li>
                  <li>• İrritabilite</li>
                  <li>• Konsantrasyon güçlüğü</li>
                  <li>• Libido azalması</li>
                  <li>• Motivasyon kaybı</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Hormon Dengesini Destekleyen Besinler</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-green-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-leaf-line text-green-600"></i>
                  Sağlıklı Yağlar
                </h3>
                <p className="text-gray-700 mb-3">
                  Hormon üretimi için esansiyel yağ asitleri kritik öneme sahiptir.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Avokado: Omega-9 yağ asitleri</li>
                  <li>• Yağlı balıklar: Omega-3 (somon, uskumru, sardalya)</li>
                  <li>• Fındık ve ceviz: Vitamin E ve omega-3</li>
                  <li>• Zeytinyağı: Antioksidanlar ve sağlıklı yağlar</li>
                  <li>• Chia ve keten tohumu: ALA omega-3</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-plant-line text-purple-600"></i>
                  Cruciferous Sebzeler
                </h3>
                <p className="text-gray-700 mb-3">
                  Östrojen metabolizmasını destekler ve hormon dengesine yardımcı olur.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Brokoli: İndol-3-karbinol içerir</li>
                  <li>• Karnabahar: Detoksifikasyonu destekler</li>
                  <li>• Brüksel lahanası: Antioksidan zengin</li>
                  <li>• Lahana: Vitamin C ve K kaynağı</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-seedling-line text-orange-600"></i>
                  Protein Kaynakları
                </h3>
                <p className="text-gray-700 mb-3">
                  Hormon yapı taşları olan amino asitleri sağlar.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Yumurta: Kolesterol ve kolin</li>
                  <li>• Organik tavuk ve hindi: Temiz protein</li>
                  <li>• Baklagiller: Bitkisel protein ve lif</li>
                  <li>• Kinoa: Tam protein kaynağı</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-flask-line text-blue-600"></i>
                  Probiyotik ve Prebiyotik Gıdalar
                </h3>
                <p className="text-gray-700 mb-3">
                  Bağırsak sağlığı hormon dengesini doğrudan etkiler.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Kefir ve yoğurt: Canlı kültürler</li>
                  <li>• Fermente sebzeler: Turşu, kimchi</li>
                  <li>• Sarımsak ve soğan: Prebiyotik lifler</li>
                  <li>• Kombucha: Probiyotik içecek</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Özel Durumlar İçin Beslenme</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-women-line text-pink-600"></i>
                  PCOS (Polikistik Over Sendromu)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Düşük glisemik indeksli karbonhidratlar</li>
                  <li>• Antiinflamatuar besinler</li>
                  <li>• İnositol takviyesi</li>
                  <li>• Omega-3 yağ asitleri</li>
                  <li>• Şeker ve işlenmiş gıdalardan kaçının</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-heart-line text-purple-600"></i>
                  Menopoz
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fitoöstrojen içeren besinler (soya, keten)</li>
                  <li>• Kalsiyum ve D vitamini</li>
                  <li>• Omega-3 yağ asitleri</li>
                  <li>• Bol sebze ve meyve</li>
                  <li>• Kafein ve alkol sınırlaması</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-shield-line text-blue-600"></i>
                  Tiroid Problemleri
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• İyot kaynakları (deniz ürünleri)</li>
                  <li>• Selenyum (Brezilya cevizi)</li>
                  <li>• Çinko (kabuklu deniz ürünleri)</li>
                  <li>• Gluten duyarlılığı kontrolü</li>
                  <li>• Goitrojen içeren besinlere dikkat</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-pulse-line text-green-600"></i>
                  İnsülin Direnci
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Düşük karbonhidrat diyeti</li>
                  <li>• Yüksek lif tüketimi</li>
                  <li>• Aralıklı oruç</li>
                  <li>• Kromat ve magnezyum</li>
                  <li>• Düzenli egzersiz</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-lightbulb-line text-amber-600"></i>
                Yaşam Tarzı Önerileri
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <i className="ri-moon-line text-amber-600 mt-1"></i>
                    <span className="text-gray-700"><strong>Kaliteli Uyku:</strong> 7-9 saat düzenli uyku</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-run-line text-amber-600 mt-1"></i>
                    <span className="text-gray-700"><strong>Düzenli Egzersiz:</strong> Haftada 150 dakika</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-mental-health-line text-amber-600 mt-1"></i>
                    <span className="text-gray-700"><strong>Stres Yönetimi:</strong> Meditasyon, yoga</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <i className="ri-drop-line text-amber-600 mt-1"></i>
                    <span className="text-gray-700"><strong>Hidrasyon:</strong> Günde 2-3 litre su</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-sun-line text-amber-600 mt-1"></i>
                    <span className="text-gray-700"><strong>D Vitamini:</strong> Güneş ışığı ve takviye</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-forbid-line text-amber-600 mt-1"></i>
                    <span className="text-gray-700"><strong>Toksinlerden Kaçının:</strong> Plastik, kimyasallar</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <i className="ri-alert-line text-red-600"></i>
                Kaçınılması Gereken Besinler
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="ri-close-circle-fill text-red-500 mt-1"></i>
                  <span>Rafine şeker ve işlenmiş karbonhidratlar</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-close-circle-fill text-red-500 mt-1"></i>
                  <span>Trans yağlar ve aşırı işlenmiş yağlar</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-close-circle-fill text-red-500 mt-1"></i>
                  <span>Aşırı kafein tüketimi</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-close-circle-fill text-red-500 mt-1"></i>
                  <span>Alkol</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-close-circle-fill text-red-500 mt-1"></i>
                  <span>Hormon içeren et ve süt ürünleri</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 text-white mt-12">
              <h3 className="text-2xl font-bold mb-4">Sonuç</h3>
              <p className="text-white/90 leading-relaxed">
                Hormon dengesi, genel sağlığınızın temel taşlarından biridir. Doğru beslenme, düzenli egzersiz, kaliteli uyku ve stres yönetimi ile hormonlarınızı optimize edebilir ve yaşam kalitenizi önemli ölçüde artırabilirsiniz. Unutmayın, her vücut farklıdır ve kişiselleştirilmiş bir yaklaşım en iyi sonuçları verir.
              </p>
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-6">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20female%20nutritionist%20dietitian%20in%20white%20coat%20smiling%20warmly%20professional%20headshot%20portrait%20clean%20white%20background%20medical%20photography&width=120&height=120&seq=author1&orientation=squarish"
              alt="Dyt. Ayşenur Korkmaz"
              className="w-24 h-24 rounded-full object-cover shadow-lg"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dyt. Ayşenur Korkmaz</h3>
              <p className="text-gray-700 mb-4">
                Beslenme ve Diyetetik alanında uzman. Kadın sağlığı, hormon dengesi ve fonksiyonel beslenme konularında danışmanlık hizmeti vermektedir.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
                  <i className="ri-instagram-line text-2xl"></i>
                </a>
                <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
                  <i className="ri-linkedin-box-line text-2xl"></i>
                </a>
                <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
                  <i className="ri-twitter-x-line text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold font-serif text-gray-900 mb-4">
              İlgili <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Yazılar</span>
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                  <div className="relative">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-rose-600 text-xs font-bold rounded-full shadow-lg">
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
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors duration-300 mb-3 line-clamp-2 leading-tight">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-2 text-rose-600 font-semibold text-sm group-hover:gap-3 transition-all">
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

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Hormon Dengenizi Optimize Edin</h2>
          <p className="text-xl text-white/90 mb-8">
            Kişiye özel beslenme programı ile hormonlarınızı dengeye getirin
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Randevu Al
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
