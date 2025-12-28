import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const MetabolizmaDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedPosts = [
    {
      title: 'Aralıklı Oruç ve Metabolik Sağlık',
      image: 'https://readdy.ai/api/search-image?query=intermittent%20fasting%20concept%20clock%20healthy%20foods%20time%20restricted%20eating%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-fasting-v9&orientation=landscape',
      slug: 'aralikli-oruc-ve-metabolik-saglik',
      category: 'Beslenme',
      excerpt: 'Aralıklı oruç ile metabolik sağlığınızı optimize edin',
      readTime: '7 dk',
    },
    {
      title: 'Sağlıklı Kilo Vermenin Altın Kuralları',
      image: 'https://readdy.ai/api/search-image?query=healthy%20weight%20loss%20concept%20measuring%20tape%20fresh%20foods%20fitness%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-weight-v9&orientation=landscape',
      slug: 'saglikli-kilo-vermenin-altin-kurallari',
      category: 'Beslenme',
      excerpt: 'Kalıcı kilo verme için bilimsel yaklaşımlar',
      readTime: '9 dk',
    },
    {
      title: 'Hormon Dengesi ve Beslenme',
      image: 'https://readdy.ai/api/search-image?query=hormone%20balance%20nutrition%20concept%20healthy%20foods%20wellness%20bright%20natural%20lighting%20health%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-hormone-v9&orientation=landscape',
      slug: 'hormon-dengesi-ve-beslenme',
      category: 'Sağlık',
      excerpt: 'Hormonlarınızı beslenmeyle dengeleme yöntemleri',
      readTime: '7 dk',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=healthy%20metabolism%20concept%20with%20fresh%20organic%20vegetables%20colorful%20fruits%20measuring%20tape%20fitness%20dumbbells%20water%20bottle%20on%20marble%20countertop%20bright%20natural%20morning%20sunlight%20modern%20kitchen%20lifestyle%20photography%20professional%20high%20resolution%20clean%20minimalist%20background&width=1920&height=1080&seq=blog-metabolism-hero-v3&orientation=landscape"
            alt="Metabolizma Hızlandırma"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-emerald-500 text-white rounded-full text-sm font-medium mb-4">
              Beslenme
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Metabolizma Hızlandırmanın Bilimsel Yolları
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <i className="ri-calendar-line"></i>
                <span>15 Ocak 2025</span>
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
            Metabolizma, vücudumuzun enerji harcama hızıdır ve kilo yönetiminde kritik bir rol oynar. 
            Peki metabolizmayı doğal yollarla hızlandırmak mümkün mü? Bilimsel araştırmalar, evet diyor!
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Protein Alımını Artırın</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=high%20protein%20foods%20collection%20lean%20meats%20fish%20eggs%20legumes%20nuts%20arranged%20beautifully%20on%20wooden%20table%20professional%20food%20photography%20bright%20natural%20lighting%20high%20resolution%20clean%20background&width=800&height=500&seq=metabolism-section1-v1&orientation=landscape"
                alt="Protein Kaynakları"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Protein, termik etkisi en yüksek makro besindir. Yani vücudunuz proteini sindirmek için daha fazla 
              enerji harcar. Her öğünde yeterli protein tüketmek, metabolizmanızı %15-30 oranında hızlandırabilir.
            </p>
            <div className="bg-emerald-50 rounded-xl p-6 mt-4">
              <h3 className="font-bold text-gray-900 mb-3">En İyi Protein Kaynakları:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-emerald-600 mt-1"></i>
                  <span>Tavuk göğsü, hindi</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-emerald-600 mt-1"></i>
                  <span>Yumurta</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-emerald-600 mt-1"></i>
                  <span>Balık (somon, ton balığı)</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-emerald-600 mt-1"></i>
                  <span>Baklagiller (mercimek, nohut)</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-emerald-600 mt-1"></i>
                  <span>Yoğurt, süt ürünleri</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Düzenli Egzersiz Yapın</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=fitness%20exercise%20workout%20concept%20with%20dumbbells%20yoga%20mat%20running%20shoes%20water%20bottle%20on%20gym%20floor%20bright%20natural%20lighting%20sports%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=metabolism-section2-v1&orientation=landscape"
                alt="Egzersiz"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Özellikle yüksek yoğunluklu interval antrenmanlar (HIIT) ve direnç egzersizleri, metabolizmayı 
              saatlerce hızlı tutar. Kas kütlesi arttıkça, dinlenme metabolizmanız da yükselir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Haftada en az 150 dakika orta şiddette veya 75 dakika yüksek şiddette egzersiz yapmanız önerilir.
            </p>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Bol Su İçin</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=hydration%20concept%20with%20glass%20water%20bottles%20fresh%20lemon%20cucumber%20mint%20on%20clean%20white%20surface%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=metabolism-section3-v1&orientation=landscape"
                alt="Su İçmek"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Araştırmalar, 500 ml su içmenin metabolizmayı 1 saat boyunca %10-30 artırdığını gösteriyor. 
              Özellikle soğuk su, vücudun ısınmak için daha fazla enerji harcamasını sağlar.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 mt-4">
              <p className="text-gray-700 font-medium">
                💧 Günde en az 2-3 litre su içmeyi hedefleyin. Öğünlerden 30 dakika önce su içmek, 
                tokluk hissini artırır ve kalori alımını azaltabilir.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Yeşil Çay Tüketin</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=green%20tea%20concept%20with%20elegant%20teacup%20fresh%20tea%20leaves%20on%20minimalist%20table%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=metabolism-section4-v1&orientation=landscape"
                alt="Yeşil Çay"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed">
              Yeşil çay ve oolong çayı, metabolizmayı %4-5 artırabilir. İçerdikleri kateşinler ve kafein, 
              yağ yakımını destekler. Günde 2-3 fincan yeşil çay tüketmek faydalı olabilir.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Yeterli Uyuyun</h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=quality%20sleep%20concept%20with%20comfortable%20bed%20soft%20pillows%20peaceful%20bedroom%20bright%20morning%20light%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=500&seq=metabolism-section5-v1&orientation=landscape"
                alt="Kaliteli Uyku"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Uyku eksikliği, metabolizmayı yavaşlatır ve açlık hormonlarını dengesizleştirir. 
              Günde 7-9 saat kaliteli uyku, metabolik sağlık için şarttır.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Düzensiz uyku, insülin direncini artırır ve kilo alımına neden olabilir.
            </p>
          </section>

          {/* Additional Tips */}
          <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Diğer Önemli İpuçları</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Baharatlı Yiyecekler Ekleyin</h3>
                  <p className="text-gray-700 text-sm">
                    Acı biber içindeki kapsaisin, metabolizmayı geçici olarak hızlandırır ve yağ yakımını artırır.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                  7
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Kahve İçin (Ölçülü)</h3>
                  <p className="text-gray-700 text-sm">
                    Kafein, metabolizmayı %3-11 artırabilir. Ancak aşırı tüketim, tolerans gelişimine neden olur.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                  8
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Stres Yönetimi</h3>
                  <p className="text-gray-700 text-sm">
                    Kronik stres, kortizol seviyesini artırır ve metabolizmayı yavaşlatır. Meditasyon ve yoga faydalıdır.
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
            Metabolizmayı hızlandırmak, tek bir yöntemle değil, yaşam tarzı değişiklikleriyle mümkündür. 
            Dengeli beslenme, düzenli egzersiz, kaliteli uyku ve stres yönetimi, metabolik sağlığınızı optimize eder.
          </p>
          <p className="leading-relaxed">
            Unutmayın, herkesin metabolizması farklıdır. Kişiye özel bir beslenme planı için mutlaka 
            bir diyetisyene danışın.
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
              İstanbul Arel Üniversitesi Beslenme ve Diyetetik Bölümü mezunu. 5000+ danışan deneyimi ile 
              kişiye özel beslenme programları hazırlıyor. Metabolizma ve kilo yönetimi konusunda uzman.
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
            İlgili <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Yazılar</span>
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
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                <div className="relative">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-orange-600 text-xs font-bold rounded-full shadow-lg">
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
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-3 line-clamp-2 leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-orange-600 font-semibold text-sm group-hover:gap-3 transition-all">
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

export default MetabolizmaDetail;
