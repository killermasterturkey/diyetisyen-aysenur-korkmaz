import { Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

export default function HidrasyonDetail() {
  const relatedPosts = [
    {
      title: 'Çocuk Beslenmesinde Dikkat Edilmesi Gerekenler',
      image: 'https://readdy.ai/api/search-image?query=children%20nutrition%20healthy%20foods%20colorful%20fruits%20vegetables%20on%20clean%20surface%20bright%20natural%20lighting%20family%20health%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-children-v7&orientation=landscape',
      slug: 'cocuk-beslenmesinde-dikkat-edilmesi-gerekenler',
      category: 'Beslenme',
      excerpt: 'Çocukluk döneminde sağlıklı beslenme alışkanlıkları',
      readTime: '6 dk',
    },
    {
      title: 'Metabolizma Hızlandırmanın Bilimsel Yolları',
      image: 'https://readdy.ai/api/search-image?query=metabolism%20boost%20concept%20healthy%20foods%20fitness%20equipment%20on%20marble%20surface%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-metabolism-v7&orientation=landscape',
      slug: 'metabolizma-hizlandirmanin-bilimsel-yollari',
      category: 'Beslenme',
      excerpt: 'Metabolizmanızı doğal yollarla hızlandırın',
      readTime: '8 dk',
    },
    {
      title: 'Vejetaryen ve Vegan Beslenme Rehberi',
      image: 'https://readdy.ai/api/search-image?query=plant%20based%20diet%20colorful%20vegetables%20legumes%20grains%20nuts%20on%20wooden%20table%20bright%20natural%20lighting%20vegan%20nutrition%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-vegan-v7&orientation=landscape',
      slug: 'vejetaryen-ve-vegan-beslenme-rehberi',
      category: 'Beslenme',
      excerpt: 'Bitkisel beslenme ile sağlıklı yaşam',
      readTime: '8 dk',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=crystal%20clear%20water%20being%20poured%20into%20glass%20with%20fresh%20fruits%20and%20vegetables%20in%20background%20hydration%20health%20concept%20bright%20natural%20lighting%20clean%20composition&width=1920&height=800&seq=hero1&orientation=landscape"
            alt="Hidrasyon ve Sağlık"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative h-full max-w-4xl mx-auto px-4 flex flex-col justify-end pb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-white/90">
              <span className="flex items-center gap-2">
                <i className="ri-calendar-line"></i>
                12 Mart 2024
              </span>
              <span className="flex items-center gap-2">
                <i className="ri-time-line"></i>
                7 dk okuma
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                Sağlıklı Yaşam
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Hidrasyon ve Sağlık: Su İçmenin Önemi
            </h1>
            <p className="text-xl text-white/90">
              Vücudunuzun en temel ihtiyacı: Yeterli ve doğru su tüketimi
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Su: Yaşamın Kaynağı</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Vücudumuzun yaklaşık %60'ı sudan oluşur. Su, hücre fonksiyonlarından beyin aktivitesine, sindirimden vücut ısısı düzenlemesine kadar sayısız yaşamsal işlevde kritik rol oynar. Yeterli su tüketimi, sağlıklı yaşamın temel taşlarından biridir.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-drop-line text-blue-600"></i>
                Suyun Vücuttaki Fonksiyonları
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-blue-600 mt-1"></i>
                  <span><strong>Hücre Fonksiyonları:</strong> Besin taşınması ve atık uzaklaştırma</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-blue-600 mt-1"></i>
                  <span><strong>Vücut Isısı:</strong> Terleme yoluyla ısı düzenleme</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-blue-600 mt-1"></i>
                  <span><strong>Sindirim:</strong> Besinlerin parçalanması ve emilimi</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-blue-600 mt-1"></i>
                  <span><strong>Eklem Sağlığı:</strong> Eklemlerin yağlanması ve korunması</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-blue-600 mt-1"></i>
                  <span><strong>Beyin Fonksiyonu:</strong> Konsantrasyon ve bilişsel performans</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Günlük Su İhtiyacı</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-women-line text-blue-600"></i>
                  Kadınlar
                </h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">2.7 Litre</p>
                <p className="text-gray-700">Günlük önerilen toplam sıvı alımı (yaklaşık 11 bardak)</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-men-line text-cyan-600"></i>
                  Erkekler
                </h3>
                <p className="text-3xl font-bold text-cyan-600 mb-2">3.7 Litre</p>
                <p className="text-gray-700">Günlük önerilen toplam sıvı alımı (yaklaşık 15 bardak)</p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-8">
              <p className="text-gray-700">
                <strong>Not:</strong> Bu miktarlar, yiyeceklerden alınan sıvıları da içerir. Günlük sıvı alımının yaklaşık %20'si yiyeceklerden gelir.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Su İhtiyacını Artıran Durumlar</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-run-line text-blue-600"></i>
                  Fiziksel Aktivite
                </h3>
                <p className="text-gray-700 mb-3">
                  Egzersiz sırasında ve sonrasında ekstra su tüketimi gerekir.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Egzersizden 2-3 saat önce: 400-600 ml</li>
                  <li>• Egzersiz sırasında: Her 15-20 dakikada 150-250 ml</li>
                  <li>• Egzersiz sonrası: Kaybedilen her 0.5 kg için 500-750 ml</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-sun-line text-orange-600"></i>
                  Sıcak Hava ve Yüksek Nem
                </h3>
                <p className="text-gray-700">
                  Sıcak havalarda terleme artar ve su kaybı hızlanır. Susuzluk hissetmeden önce düzenli aralıklarla su içmeye özen gösterin.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-thermometer-line text-red-600"></i>
                  Hastalık Durumları
                </h3>
                <p className="text-gray-700">
                  Ateş, ishal, kusma gibi durumlarda vücut daha fazla sıvı kaybeder. Bu dönemlerde sıvı alımını artırmak kritik önem taşır.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <i className="ri-parent-line text-purple-600"></i>
                  Gebelik ve Emzirme
                </h3>
                <p className="text-gray-700">
                  Hamile kadınlar günde yaklaşık 3 litre, emziren anneler ise 3.8 litre sıvı tüketmelidir.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Dehidrasyonun Belirtileri</h2>
            
            <div className="bg-red-50 rounded-xl p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Hafif Dehidrasyon:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <i className="ri-alert-line text-red-500 mt-1"></i>
                      <span>Susuzluk hissi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-alert-line text-red-500 mt-1"></i>
                      <span>Koyu renkli idrar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-alert-line text-red-500 mt-1"></i>
                      <span>Kuru ağız ve dudaklar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-alert-line text-red-500 mt-1"></i>
                      <span>Yorgunluk</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Ciddi Dehidrasyon:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <i className="ri-error-warning-line text-red-600 mt-1"></i>
                      <span>Baş dönmesi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-error-warning-line text-red-600 mt-1"></i>
                      <span>Hızlı kalp atışı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-error-warning-line text-red-600 mt-1"></i>
                      <span>Konfüzyon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="ri-error-warning-line text-red-600 mt-1"></i>
                      <span>Çok az veya hiç idrar çıkmaması</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Yeterli Su İçmenin Faydaları</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <i className="ri-brain-line text-4xl text-green-600 mb-3"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Beyin Fonksiyonu</h3>
                <p className="text-gray-700">Konsantrasyon, hafıza ve ruh hali üzerinde olumlu etki</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <i className="ri-heart-pulse-line text-4xl text-blue-600 mb-3"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kalp Sağlığı</h3>
                <p className="text-gray-700">Kan dolaşımını iyileştirir ve kalp yükünü azaltır</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <i className="ri-scales-3-line text-4xl text-purple-600 mb-3"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kilo Kontrolü</h3>
                <p className="text-gray-700">Tokluk hissi verir ve metabolizmayı destekler</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <i className="ri-skin-line text-4xl text-orange-600 mb-3"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cilt Sağlığı</h3>
                <p className="text-gray-700">Cildi nemlendirir ve parlak görünüm sağlar</p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <i className="ri-lungs-line text-4xl text-teal-600 mb-3"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Böbrek Sağlığı</h3>
                <p className="text-gray-700">Toksinlerin atılmasını kolaylaştırır</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <i className="ri-restaurant-line text-4xl text-red-600 mb-3"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sindirim</h3>
                <p className="text-gray-700">Kabızlığı önler ve sindirim sistemini destekler</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-lightbulb-line text-cyan-600"></i>
                Su İçme Alışkanlığı Kazanma İpuçları
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <i className="ri-time-line text-cyan-600 mt-1"></i>
                    <span className="text-gray-700">Güne bir bardak suyla başlayın</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-bottle-line text-cyan-600 mt-1"></i>
                    <span className="text-gray-700">Yanınızda su şişesi taşıyın</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-alarm-line text-cyan-600 mt-1"></i>
                    <span className="text-gray-700">Hatırlatıcı alarm kurun</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-restaurant-2-line text-cyan-600 mt-1"></i>
                    <span className="text-gray-700">Her öğünden önce su için</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <i className="ri-apple-line text-cyan-600 mt-1"></i>
                    <span className="text-gray-700">Su içeriği yüksek meyveler tüketin</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-leaf-line text-cyan-600 mt-1"></i>
                    <span className="text-gray-700">Bitki çayları içebilirsiniz</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-temp-cold-line text-cyan-600 mt-1"></i>
                    <span className="text-gray-700">Suya meyve dilimleri ekleyin</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-smartphone-line text-cyan-600 mt-1"></i>
                    <span className="text-gray-700">Su takip uygulaması kullanın</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-8 text-white mt-12">
              <h3 className="text-2xl font-bold mb-4">Sonuç</h3>
              <p className="text-white/90 leading-relaxed">
                Su, sağlıklı yaşamın en temel gereksinimlerinden biridir. Yeterli su tüketimi, fiziksel ve zihinsel performansınızı artırır, hastalıklardan korunmanıza yardımcı olur ve genel yaşam kalitenizi iyileştirir. Bugün, su içme alışkanlığınızı gözden geçirin ve gerekirse değiştirin. Vücudunuz size teşekkür edecektir!
              </p>
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-6">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20female%20nutritionist%20dietitian%20in%20white%20coat%20smiling%20warmly%20professional%20headshot%20portrait%20clean%20white%20background%20medical%20photography&width=120&height=120&seq=author1&orientation=squarish"
              alt="Dyt. Ayşenur Korkmaz"
              className="w-24 h-24 rounded-full object-cover shadow-lg"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dyt. Ayşenur Korkmaz</h3>
              <p className="text-gray-700 mb-4">
                Beslenme ve Diyetetik alanında uzman. Sağlıklı yaşam, kilo yönetimi ve fonksiyonel beslenme konularında danışmanlık hizmeti vermektedir.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <i className="ri-instagram-line text-2xl"></i>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <i className="ri-linkedin-box-line text-2xl"></i>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
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
              İlgili <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">Yazılar</span>
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                  <div className="relative">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-cyan-600 text-xs font-bold rounded-full shadow-lg">
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
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300 mb-3 line-clamp-2 leading-tight">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-2 text-cyan-600 font-semibold text-sm group-hover:gap-3 transition-all">
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
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Kişiye Özel Beslenme Programı</h2>
          <p className="text-xl text-white/90 mb-8">
            Sağlıklı yaşam hedeflerinize ulaşmak için profesyonel destek alın
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Randevu Al
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
