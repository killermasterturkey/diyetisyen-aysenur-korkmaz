import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function StresVeBeslenmeIliskisi() {
  const relatedPosts = [
    {
      title: 'Hormon Dengesi ve Beslenme',
      image: 'https://readdy.ai/api/search-image?query=hormone%20balance%20nutrition%20concept%20healthy%20foods%20wellness%20bright%20natural%20lighting%20health%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-hormone-v12&orientation=landscape',
      slug: 'hormon-dengesi-ve-beslenme',
      category: 'Sağlık',
      excerpt: 'Hormonlarınızı beslenmeyle dengeleme yöntemleri',
      readTime: '7 dk',
    },
    {
      title: 'Hidrasyon ve Sağlık',
      image: 'https://readdy.ai/api/search-image?query=hydration%20concept%20fresh%20water%20glass%20fruits%20vegetables%20on%20clean%20surface%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-hydration-v12&orientation=landscape',
      slug: 'hidrasyon-ve-saglik',
      category: 'Sağlık',
      excerpt: 'Yeterli sıvı tüketiminin önemi ve faydaları',
      readTime: '5 dk',
    },
    {
      title: 'Bağışıklık Sistemini Güçlendiren Besinler',
      image: 'https://readdy.ai/api/search-image?query=immune%20boosting%20foods%20vitamin%20rich%20citrus%20berries%20vegetables%20on%20white%20surface%20bright%20natural%20lighting%20health%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-immune-v12&orientation=landscape',
      slug: 'bagisiklik-sistemini-guclendiren-besinler',
      category: 'Sağlık',
      excerpt: 'Güçlü bir bağışıklık sistemi için doğru beslenme',
      readTime: '6 dk',
    },
  ];

  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <Navbar />
        
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=stress%20eating%20emotional%20wellness%20mindfulness%20meditation%20healthy%20lifestyle%20mental%20health%20nutrition%20connection%20peaceful%20serene%20atmosphere%20soft%20natural%20lighting%20calming%20colors&width=1920&height=800&seq=stress-nutrition-hero&orientation=landscape"
              alt="Stres ve Beslenme İlişkisi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          </div>
          
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-16">
            <div className="text-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-2 bg-emerald-500/90 backdrop-blur-sm rounded-full text-sm font-medium">
                  Psikolojik Beslenme
                </span>
                <span className="text-emerald-200">15 Ocak 2024</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Stres ve Beslenme İlişkisi
              </h1>
              <p className="text-xl text-emerald-100 max-w-3xl">
                Stres yönetiminde beslenmenin rolü ve duygusal yeme davranışlarıyla başa çıkma stratejileri
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
                    Stres ve Beslenme Arasındaki Bağlantı
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Stres, vücudumuzda kortizol ve adrenalin gibi hormonların salgılanmasına neden olur. Bu hormonlar, iştah düzenleme mekanizmalarımızı doğrudan etkiler ve beslenme alışkanlıklarımızı değiştirebilir. Kronik stres altında, vücudumuz enerji depolamaya yönelir ve genellikle yüksek kalorili, şekerli ve yağlı yiyeceklere karşı artan bir istek oluşur.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Duygusal yeme, stresle başa çıkmanın sağlıksız bir yolu olarak ortaya çıkar. Ancak doğru beslenme stratejileriyle hem stres seviyemizi düşürebilir hem de duygusal yeme döngüsünü kırabiliriz.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
                    Stresi Azaltan Besinler
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                        <i className="ri-leaf-line text-2xl text-emerald-600"></i>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Omega-3 Yağ Asitleri</h3>
                      <p className="text-gray-600">Somon, ceviz, keten tohumu gibi besinler kortizol seviyesini düşürür ve beyin sağlığını destekler.</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                        <i className="ri-heart-pulse-line text-2xl text-teal-600"></i>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Magnezyum</h3>
                      <p className="text-gray-600">Koyu yeşil yapraklılar, badem, avokado kas gevşemesini sağlar ve uyku kalitesini artırır.</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                        <i className="ri-sun-line text-2xl text-emerald-600"></i>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">B Vitaminleri</h3>
                      <p className="text-gray-600">Tam tahıllar, yumurta, baklagiller sinir sistemi sağlığını destekler ve enerji metabolizmasını düzenler.</p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                      <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                        <i className="ri-flask-line text-2xl text-teal-600"></i>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Probiyotikler</h3>
                      <p className="text-gray-600">Yoğurt, kefir, fermente gıdalar bağırsak-beyin eksenini destekleyerek ruh halini iyileştirir.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6">
                    <img
                      src="https://readdy.ai/api/search-image?query=healthy%20stress%20relief%20foods%20omega3%20salmon%20nuts%20leafy%20greens%20yogurt%20colorful%20nutritious%20ingredients%20fresh%20natural%20lighting%20food%20photography&width=800&height=500&seq=stress-foods&orientation=landscape"
                      alt="Stresi Azaltan Besinler"
                      className="w-full h-64 object-cover rounded-xl mb-4"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 hover:shadow-2xl transition-all duration-300">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
                    Duygusal Yeme ile Başa Çıkma Stratejileri
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4 p-6 bg-gradient-to-r from-emerald-50 to-transparent rounded-2xl hover:from-emerald-100 transition-colors duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Farkındalık Geliştirin</h3>
                        <p className="text-gray-700">Yemek yeme isteğinizin fiziksel açlıktan mı yoksa duygusal bir ihtiyaçtan mı kaynaklandığını ayırt etmeyi öğrenin. Yemek öncesi kendinize "Gerçekten aç mıyım?" diye sorun.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-gradient-to-r from-teal-50 to-transparent rounded-2xl hover:from-teal-100 transition-colors duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Düzenli Öğün Saatleri</h3>
                        <p className="text-gray-700">Kan şekeri dengesini korumak için düzenli aralıklarla beslenin. Açlık hissi stres seviyesini artırır ve duygusal yemeye yol açabilir.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-gradient-to-r from-emerald-50 to-transparent rounded-2xl hover:from-emerald-100 transition-colors duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Alternatif Başa Çıkma Yöntemleri</h3>
                        <p className="text-gray-700">Stresli anlarınızda yemek yerine yürüyüş, nefes egzersizleri, meditasyon veya bir hobiye yönelin. Duygularınızı ifade etmek için günlük tutabilirsiniz.</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-gradient-to-r from-teal-50 to-transparent rounded-2xl hover:from-teal-100 transition-colors duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Sağlıklı Atıştırmalıklar Hazırlayın</h3>
                        <p className="text-gray-700">Evde sağlıklı atıştırmalıklar bulundurun. Taze meyve, çiğ fındık, yoğurt gibi besinler hem besleyici hem de tatmin edicidir.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl shadow-xl p-8 md:p-12 text-white">
                  <h2 className="text-3xl font-bold mb-6">Uzman Önerisi</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Stres yönetimi ve sağlıklı beslenme alışkanlıkları geliştirmek zaman ve sabır gerektirir. Kendinize karşı nazik olun ve küçük adımlarla ilerlemeyi hedefleyin. Duygusal yeme konusunda zorlanıyorsanız, profesyonel destek almaktan çekinmeyin.
                  </p>
                  <p className="text-emerald-100 italic">
                    "Beslenme sadece bedenimizi değil, zihnimizi ve duygularımızı da besler. Stresle sağlıklı bir ilişki kurmak, yaşam kalitenizi önemli ölçüde artırabilir."
                  </p>
                </div>
              </article>

              {/* Author Bio */}
              <div className="mt-12 bg-gradient-to-br from-white to-emerald-50 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20female%20nutritionist%20dietitian%20white%20coat%20friendly%20smile%20modern%20clinic%20portrait%20natural%20lighting&width=150&height=150&seq=author-aysenur&orientation=squarish"
                    alt="Dyt. Ayşenur Korkmaz"
                    className="w-24 h-24 rounded-2xl object-cover ring-4 ring-emerald-100"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Dyt. Ayşenur Korkmaz</h3>
                    <p className="text-emerald-600 font-medium mb-3">Beslenme ve Diyet Uzmanı</p>
                    <p className="text-gray-600 leading-relaxed">
                      5000+ danışan deneyimi ile kişiye özel beslenme programları hazırlıyor. Fonksiyonel beslenme ve bütüncül sağlık yaklaşımı konusunda uzman.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Share */}
                <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Paylaş</h3>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-xl transition-colors duration-300">
                      <i className="ri-facebook-fill text-xl"></i>
                    </button>
                    <button className="flex-1 bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-xl transition-colors duration-300">
                      <i className="ri-twitter-fill text-xl"></i>
                    </button>
                    <button className="flex-1 bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl transition-colors duration-300">
                      <i className="ri-whatsapp-fill text-xl"></i>
                    </button>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl shadow-xl p-8 text-white hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">Kişiye Özel Beslenme Programı</h3>
                  <p className="text-emerald-50 mb-6">
                    Stres yönetimi ve sağlıklı beslenme konusunda profesyonel destek alın.
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full bg-white text-emerald-600 text-center py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors duration-300"
                  >
                    Randevu Al
                  </Link>
                </div>

                {/* Related Posts */}
                <div className="mb-20">
                  <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold font-serif text-gray-900 mb-4">
                      İlgili <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Yazılar</span>
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
                          <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                          <div className="relative">
                            <div className="relative h-56 overflow-hidden">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                              <div className="absolute top-4 left-4">
                                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-amber-600 text-xs font-bold rounded-full shadow-lg">
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
                              <h4 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300 mb-3 line-clamp-2 leading-tight">
                                {post.title}
                              </h4>
                              <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                              <div className="flex items-center gap-2 text-amber-600 font-semibold text-sm group-hover:gap-3 transition-all">
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
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Suspense>
  );
}