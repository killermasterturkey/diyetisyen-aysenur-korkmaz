import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const ProteinZamanlamasiDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedPosts = [
    {
      title: 'Gut Sağlığı ve Probiyotikler',
      image: 'https://readdy.ai/api/search-image?query=probiotic%20foods%20yogurt%20kefir%20fermented%20vegetables%20kimchi%20on%20clean%20white%20surface%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-gut-v11&orientation=landscape',
      slug: 'gut-sagligi-ve-probiyotikler',
      category: 'Sağlık',
      excerpt: 'Bağırsak sağlığını destekleyen probiyotik besinler',
      readTime: '7 dk',
    },
    {
      title: 'Aralıklı Oruç ve Metabolik Sağlık',
      image: 'https://readdy.ai/api/search-image?query=intermittent%20fasting%20concept%20clock%20healthy%20foods%20time%20restricted%20eating%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-fasting-v11&orientation=landscape',
      slug: 'aralikli-oruc-ve-metabolik-saglik',
      category: 'Beslenme',
      excerpt: 'Aralıklı oruç ile metabolik sağlığınızı optimize edin',
      readTime: '7 dk',
    },
    {
      title: 'Çocuk Beslenmesinde Dikkat Edilmesi Gerekenler',
      image: 'https://readdy.ai/api/search-image?query=children%20nutrition%20healthy%20foods%20colorful%20fruits%20vegetables%20on%20clean%20surface%20bright%20natural%20lighting%20family%20health%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-children-v11&orientation=landscape',
      slug: 'cocuk-beslenmesinde-dikkat-edilmesi-gerekenler',
      category: 'Beslenme',
      excerpt: 'Çocukluk döneminde sağlıklı beslenme alışkanlıkları',
      readTime: '6 dk',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=athletic%20nutrition%20concept%20with%20protein%20shake%20bottle%20gym%20equipment%20dumbbells%20fitness%20accessories%20fresh%20fruits%20on%20wooden%20table%20bright%20natural%20lighting%20sports%20lifestyle%20photography%20professional%20high%20resolution%20clean%20background&width=1920&height=1080&seq=blog-protein-timing-hero-v3&orientation=landscape"
            alt="Sporcu Beslenmesi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-emerald-500 text-white rounded-full text-sm font-medium mb-4">
              Spor
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Sporcu Beslenmesinde Protein Zamanlaması
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <i className="ri-calendar-line"></i>
                <span>12 Ocak 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-time-line"></i>
                <span>5 dakika okuma</span>
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
            Spor performansını maksimize etmek için protein alımının zamanlaması kritik öneme sahiptir. 
            Doğru zamanda doğru miktarda protein, kas gelişimi ve toparlanmayı optimize eder.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Antrenman Öncesi Protein</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=pre%20workout%20protein%20meal%20with%20chicken%20breast%20brown%20rice%20vegetables%20on%20plate%20fitness%20nutrition%20bright%20natural%20lighting%20sports%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=protein-section1-v1&orientation=landscape"
                alt="Antrenman Öncesi Beslenme"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Antrenman öncesi 1-2 saat içinde 20-30g protein almak, kas protein sentezini artırır ve 
              antrenman sırasında kas yıkımını azaltır. Hızlı sindirilen proteinler tercih edilmelidir.
            </p>
            <div className="bg-emerald-50 rounded-xl p-6 mt-4">
              <h3 className="font-bold text-gray-900 mb-3">Antrenman Öncesi Protein Kaynakları:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-emerald-600 mt-1"></i>
                  <span>Whey protein shake</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-emerald-600 mt-1"></i>
                  <span>Yumurta akı</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-emerald-600 mt-1"></i>
                  <span>Tavuk göğsü</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-emerald-600 mt-1"></i>
                  <span>Yoğurt</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Antrenman Sonrası Protein</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=post%20workout%20protein%20shake%20with%20banana%20gym%20equipment%20on%20wooden%20table%20bright%20natural%20lighting%20fitness%20nutrition%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=protein-section2-v1&orientation=landscape"
                alt="Antrenman Sonrası Beslenme"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Antrenman sonrası 30-60 dakika içinde protein almak, "anabolik pencere" olarak bilinir. 
              Bu dönemde 20-40g protein, kas toparlanmasını hızlandırır.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 mt-4">
              <p className="text-gray-700 font-medium">
                💪 Antrenman sonrası protein alımı, kas protein sentezini %50'ye kadar artırabilir. 
                Karbonhidrat ile birlikte tüketmek, glikojen depolarını yeniler.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Günlük Protein Dağılımı</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=daily%20protein%20distribution%20meal%20prep%20containers%20with%20chicken%20fish%20eggs%20legumes%20on%20clean%20surface%20bright%20natural%20lighting%20nutrition%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=protein-section3-v1&orientation=landscape"
                alt="Günlük Protein Dağılımı"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Günlük protein ihtiyacınızı 4-5 öğüne eşit dağıtmak, kas protein sentezini optimize eder. 
              Her öğünde 20-30g protein hedefleyin.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sporcular için önerilen günlük protein miktarı: Vücut ağırlığının kg başına 1.6-2.2g
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gece Öncesi Protein</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=bedtime%20protein%20casein%20shake%20with%20cottage%20cheese%20on%20nightstand%20peaceful%20bedroom%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=protein-section4-v1&orientation=landscape"
                alt="Gece Öncesi Protein"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed">
              Uyumadan önce yavaş sindirilen protein (kazein) almak, gece boyunca kas toparlanmasını destekler. 
              30-40g kazein protein veya süzme peynir tüketebilirsiniz.
            </p>
          </section>

          {/* Additional Tips */}
          <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Önemli İpuçları</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Protein Kalitesi</h3>
                  <p className="text-gray-700 text-sm">
                    Tam protein kaynakları (hayvansal proteinler) tüm esansiyel amino asitleri içerir.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Hidrasyon</h3>
                  <p className="text-gray-700 text-sm">
                    Protein metabolizması için bol su içmek önemlidir. Günde en az 3 litre su hedefleyin.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Bireysel Farklılıklar</h3>
                  <p className="text-gray-700 text-sm">
                    Protein ihtiyacı, antrenman yoğunluğu, yaş ve hedeflere göre değişir.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Conclusion */}
        <div className="mt-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Sonuç</h2>
          <p className="leading-relaxed mb-4">
            Protein zamanlaması önemlidir, ancak günlük toplam protein alımı daha kritiktir. 
            Vücut ağırlığınızın kg başına 1.6-2.2g protein hedefleyin ve bunu gün içinde dengeli dağıtın.
          </p>
          <p className="leading-relaxed">
            Kişiye özel sporcu beslenmesi programı için mutlaka bir diyetisyene danışın.
          </p>
        </div>

        {/* Author Bio */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              AK
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dyt. Ayşenur Korkmaz</h3>
            <p className="text-gray-600 leading-relaxed">
              İstanbul Arel Üniversitesi Beslenme ve Diyetetik Bölümü mezunu. Sporcu beslenmesi ve 
              performans optimizasyonu konusunda uzman. 5000+ danışan deneyimi.
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
            İlgili <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Yazılar</span>
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
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                <div className="relative">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-red-600 text-xs font-bold rounded-full shadow-lg">
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
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-3 line-clamp-2 leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-red-600 font-semibold text-sm group-hover:gap-3 transition-all">
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

export default ProteinZamanlamasiDetail;
