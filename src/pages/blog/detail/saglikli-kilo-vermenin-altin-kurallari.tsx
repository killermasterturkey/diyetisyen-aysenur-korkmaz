import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const SaglikliKiloVermeDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedPosts = [
    {
      title: 'Metabolizma Hızlandırmanın Bilimsel Yolları',
      image: 'https://readdy.ai/api/search-image?query=metabolism%20boost%20concept%20healthy%20foods%20fitness%20equipment%20on%20marble%20surface%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-metabolism-v10&orientation=landscape',
      slug: 'metabolizma-hizlandirmanin-bilimsel-yollari',
      category: 'Beslenme',
      excerpt: 'Metabolizmanızı doğal yollarla hızlandırın',
      readTime: '8 dk',
    },
    {
      title: 'Antioksidanlar ve Yaşlanma Karşıtı Beslenme',
      image: 'https://readdy.ai/api/search-image?query=antioxidant%20rich%20foods%20colorful%20berries%20nuts%20vegetables%20on%20marble%20surface%20bright%20natural%20lighting%20nutrition%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-antioxidant-v10&orientation=landscape',
      slug: 'antioksidanlar-ve-yaslanma-karsiti-beslenme',
      category: 'Beslenme',
      excerpt: 'Yaşlanmayı yavaşlatan antioksidan besinler',
      readTime: '7 dk',
    },
    {
      title: 'Sporcu Beslenmesinde Protein Zamanlaması',
      image: 'https://readdy.ai/api/search-image?query=sports%20nutrition%20protein%20timing%20concept%20fitness%20foods%20supplements%20on%20clean%20surface%20bright%20natural%20lighting%20athletic%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-protein-v10&orientation=landscape',
      slug: 'sporcu-beslenmesinde-protein-zamanlamasi',
      category: 'Spor',
      excerpt: 'Protein alımını optimize ederek performansınızı artırın',
      readTime: '7 dk',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=healthy%20weight%20loss%20concept%20with%20fresh%20vegetables%20fruits%20measuring%20tape%20fitness%20journal%20water%20bottle%20on%20clean%20white%20surface%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=1920&height=1080&seq=blog-weight-loss-hero-v1&orientation=landscape"
            alt="Sağlıklı Kilo Verme"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-teal-500 text-white rounded-full text-sm font-medium mb-4">
              Kilo Yönetimi
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Sağlıklı Kilo Vermenin Altın Kuralları
            </h1>
            <div className="flex flex-wrap gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <i className="ri-calendar-line"></i>
                <span>1 Ocak 2025</span>
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
            Sağlıklı ve kalıcı kilo kaybı, hızlı çözümler yerine sürdürülebilir yaşam tarzı değişiklikleri gerektirir. 
            Bu yazıda, bilimsel araştırmalara dayalı, uzun vadede başarılı olmanızı sağlayacak temel prensipleri paylaşıyorum.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-xl flex items-center justify-center text-xl">1</span>
              Kalori Açığı Oluşturun, Ama Aşırıya Kaçmayın
            </h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=calorie%20deficit%20concept%20with%20healthy%20balanced%20meal%20portions%20measuring%20tools%20nutrition%20tracking%20journal%20on%20clean%20surface%20professional%20food%20photography%20bright%20natural%20lighting%20high%20resolution&width=800&height=500&seq=weight-loss-section1-v1&orientation=landscape"
                alt="Kalori Açığı"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kilo vermek için harcadığınız kaloriden daha az kalori almanız gerekir. Ancak bu açık çok büyük olmamalı. 
              Günlük 500-750 kalorilik bir açık, haftada 0.5-1 kg gibi sağlıklı bir kilo kaybı sağlar.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Aşırı kalori kısıtlaması metabolizmanızı yavaşlatır, kas kaybına neden olur ve uzun vadede sürdürülemez. 
              Hedef, vücudunuzun ihtiyaç duyduğu besinleri alırken yavaş ve istikrarlı bir şekilde kilo vermektir.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-xl flex items-center justify-center text-xl">2</span>
              Protein Alımınızı Artırın
            </h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=high%20protein%20foods%20collection%20lean%20meats%20fish%20eggs%20legumes%20nuts%20dairy%20products%20arranged%20beautifully%20on%20wooden%20table%20professional%20food%20photography%20bright%20natural%20lighting%20high%20resolution&width=800&height=500&seq=weight-loss-section2-v1&orientation=landscape"
                alt="Protein Kaynakları"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Protein, kilo verme sürecinde en önemli makro besindir. Tokluk hissi sağlar, metabolizmayı hızlandırır 
              ve kas kütlesini korur. Günlük kalori alımınızın %25-30'unun proteinden gelmesi idealdir.
            </p>
            <div className="bg-white rounded-xl p-6 mt-4">
              <h3 className="font-bold text-gray-900 mb-3">Kaliteli Protein Kaynakları:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-teal-600 mt-1"></i>
                  <span>Tavuk göğsü, hindi</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-teal-600 mt-1"></i>
                  <span>Balık (somon, ton balığı)</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-teal-600 mt-1"></i>
                  <span>Yumurta</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-teal-600 mt-1"></i>
                  <span>Baklagiller (mercimek, nohut)</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-teal-600 mt-1"></i>
                  <span>Yoğurt, süt, peynir</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-xl flex items-center justify-center text-xl">3</span>
              Düzenli Egzersiz Yapın
            </h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=fitness%20exercise%20workout%20concept%20with%20yoga%20mat%20dumbbells%20running%20shoes%20water%20bottle%20healthy%20lifestyle%20bright%20gym%20setting%20professional%20photography%20high%20resolution&width=800&height=500&seq=weight-loss-section3-v1&orientation=landscape"
                alt="Egzersiz"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Egzersiz, kalori yakımını artırır, kas kütlesini korur ve metabolizmayı hızlandırır. Hem kardiyovasküler 
              egzersizler hem de direnç antrenmanları önemlidir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Haftada en az 150 dakika orta şiddette kardiyovasküler egzersiz ve haftada 2-3 gün direnç antrenmanı 
              yapmanız önerilir. Ancak en önemli nokta, keyif aldığınız ve sürdürebileceğiniz bir egzersiz rutini oluşturmaktır.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-xl flex items-center justify-center text-xl">4</span>
              Uyku ve Stres Yönetimi
            </h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=peaceful%20sleep%20wellness%20concept%20with%20comfortable%20bedroom%20setting%20meditation%20relaxation%20stress%20management%20bright%20natural%20lighting%20lifestyle%20photography%20high%20resolution&width=800&height=500&seq=weight-loss-section4-v1&orientation=landscape"
                alt="Uyku ve Stres"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Yetersiz uyku ve yüksek stres seviyeleri, kilo vermeyi zorlaştırır. Uyku eksikliği açlık hormonlarını 
              artırır ve tokluk hormonlarını azaltır. Stres ise kortizol seviyesini yükselterek özellikle karın 
              bölgesinde yağ depolanmasına neden olur.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Günde 7-9 saat kaliteli uyku ve stres yönetimi teknikleri (meditasyon, yoga, nefes egzersizleri) 
              kilo verme sürecinizi destekler.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-xl flex items-center justify-center text-xl">5</span>
              Su Tüketimini Artırın
            </h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=hydration%20water%20drinking%20concept%20with%20glass%20bottles%20fresh%20water%20lemon%20cucumber%20mint%20on%20clean%20surface%20bright%20natural%20lighting%20wellness%20photography%20high%20resolution&width=800&height=500&seq=weight-loss-section5-v1&orientation=landscape"
                alt="Su Tüketimi"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Yeterli su tüketimi, metabolizmayı hızlandırır, tokluk hissi sağlar ve vücudun toksinlerden arınmasına 
              yardımcı olur. Öğünlerden önce su içmek, daha az kalori almanızı sağlayabilir.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Günde en az 2-3 litre su içmeyi hedefleyin. Egzersiz yaptığınız günlerde bu miktarı artırın.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-xl flex items-center justify-center text-xl">6</span>
              İşlenmiş Gıdalardan Kaçının
            </h2>
            <div className="mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=whole%20foods%20vs%20processed%20foods%20comparison%20fresh%20vegetables%20fruits%20whole%20grains%20on%20one%20side%20professional%20food%20photography%20bright%20natural%20lighting%20high%20resolution&width=800&height=500&seq=weight-loss-section6-v1&orientation=landscape"
                alt="Doğal Gıdalar"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              İşlenmiş gıdalar genellikle yüksek kalori, düşük besin değeri içerir ve tokluk hissi sağlamaz. 
              Bunun yerine tam, doğal gıdalara odaklanın.
            </p>
            <div className="bg-white rounded-xl p-6 mt-4">
              <h3 className="font-bold text-gray-900 mb-3">Tercih Edilmesi Gerekenler:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-teal-600 mt-1"></i>
                  <span>Taze sebze ve meyveler</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-teal-600 mt-1"></i>
                  <span>Tam tahıllar (esmer pirinç, kinoa, yulaf)</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-teal-600 mt-1"></i>
                  <span>Yağsız protein kaynakları</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-fill text-teal-600 mt-1"></i>
                  <span>Sağlıklı yağlar (avokado, zeytinyağı, fındık)</span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Conclusion */}
        <div className="mt-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Sonuç</h2>
          <p className="leading-relaxed mb-4">
            Sağlıklı kilo verme, hızlı çözümler yerine sürdürülebilir yaşam tarzı değişiklikleri gerektirir. 
            Bu altın kuralları uygulayarak, yalnızca kilo vermekle kalmaz, aynı zamanda genel sağlığınızı da 
            iyileştirirsiniz.
          </p>
          <p className="leading-relaxed">
            Unutmayın, herkesin vücudu farklıdır. Kişiye özel bir beslenme planı için profesyonel destek almak, 
            başarı şansınızı artırır ve süreci kolaylaştırır.
          </p>
        </div>

        {/* Author Bio */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
              AK
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dyt. Ayşenur Korkmaz</h3>
            <p className="text-gray-600 leading-relaxed">
              İstanbul Arel Üniversitesi Beslenme ve Diyetetik Bölümü mezunu. 5000'den fazla danışanla çalışmış, 
              fonksiyonel beslenme alanında uzmanlaşmış bir diyetisyen. Kişiye özel, sürdürülebilir beslenme 
              planları ile danışanlarına sağlıklı yaşam yolculuklarında rehberlik ediyor.
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

export default SaglikliKiloVermeDetail;
