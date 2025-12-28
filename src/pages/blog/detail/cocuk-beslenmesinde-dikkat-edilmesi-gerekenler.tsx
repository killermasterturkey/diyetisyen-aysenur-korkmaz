import { Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

export default function CocukBeslenmesiDetail() {
  const relatedPosts = [
    {
      title: 'Bağışıklık Sistemini Güçlendiren Besinler',
      image: 'https://readdy.ai/api/search-image?query=immune%20boosting%20foods%20vitamin%20rich%20citrus%20berries%20vegetables%20on%20white%20surface%20bright%20natural%20lighting%20health%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-immune-v5&orientation=landscape',
      slug: 'bagisiklik-sistemini-guclendiren-besinler',
      category: 'Sağlık',
      excerpt: 'Güçlü bir bağışıklık sistemi için doğru beslenme',
      readTime: '6 dk',
    },
    {
      title: 'Sporcu Beslenmesinde Protein Zamanlaması',
      image: 'https://readdy.ai/api/search-image?query=sports%20nutrition%20protein%20timing%20concept%20fitness%20foods%20supplements%20on%20clean%20surface%20bright%20natural%20lighting%20athletic%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-protein-v5&orientation=landscape',
      slug: 'sporcu-beslenmesinde-protein-zamanlamasi',
      category: 'Spor',
      excerpt: 'Protein alımını optimize ederek performansınızı artırın',
      readTime: '7 dk',
    },
    {
      title: 'Hidrasyon ve Sağlık',
      image: 'https://readdy.ai/api/search-image?query=hydration%20concept%20fresh%20water%20glass%20fruits%20vegetables%20on%20clean%20surface%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=400&height=300&seq=blog-related-hydration-v5&orientation=landscape',
      slug: 'hidrasyon-ve-saglik',
      category: 'Sağlık',
      excerpt: 'Yeterli sıvı tüketiminin önemi ve faydaları',
      readTime: '5 dk',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=happy%20healthy%20children%20eating%20nutritious%20colorful%20meal%20together%20at%20table%20with%20fresh%20fruits%20vegetables%20whole%20grains%20family%20nutrition%20lifestyle%20photography%20warm%20natural%20lighting&width=1920&height=800&seq=hero1&orientation=landscape"
            alt="Çocuk Beslenmesi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative h-full max-w-4xl mx-auto px-4 flex flex-col justify-end pb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-white/90">
              <span className="flex items-center gap-2">
                <i className="ri-calendar-line"></i>
                20 Mart 2024
              </span>
              <span className="flex items-center gap-2">
                <i className="ri-time-line"></i>
                8 dk okuma
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                Çocuk Sağlığı
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Çocuk Beslenmesinde Dikkat Edilmesi Gerekenler
            </h1>
            <p className="text-xl text-white/90">
              Çocukluk döneminde sağlıklı beslenme alışkanlıkları kazandırmanın önemi
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <article className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Çocukluk Dönemi Beslenmesinin Önemi</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Çocukluk dönemi, büyüme ve gelişmenin en hızlı olduğu dönemdir. Bu dönemde alınan besinler, sadece fiziksel gelişimi değil, zihinsel ve duygusal gelişimi de doğrudan etkiler. Sağlıklı beslenme alışkanlıkları çocukluk döneminde kazanılır ve yaşam boyu sürer.
            </p>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-heart-pulse-line text-emerald-600"></i>
                Temel Besin Grupları
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-emerald-600 mt-1"></i>
                  <span><strong>Süt ve Süt Ürünleri:</strong> Kemik gelişimi için günde 2-3 porsiyon</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-emerald-600 mt-1"></i>
                  <span><strong>Protein Kaynakları:</strong> Et, tavuk, balık, yumurta, baklagiller</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-emerald-600 mt-1"></i>
                  <span><strong>Sebze ve Meyveler:</strong> Her öğünde farklı renklerde</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-checkbox-circle-fill text-emerald-600 mt-1"></i>
                  <span><strong>Tahıllar:</strong> Tam tahıllı ekmek, makarna, pirinç</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Yaş Gruplarına Göre Beslenme</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">0-2 Yaş (Bebeklik)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• İlk 6 ay sadece anne sütü</li>
                  <li>• 6. aydan itibaren ek gıdalara başlama</li>
                  <li>• Demir takviyesi önemli</li>
                  <li>• Yavaş yavaş aile sofrasına geçiş</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2-6 Yaş (Okul Öncesi)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Düzenli öğün saatleri</li>
                  <li>• Ara öğünlerin önemi</li>
                  <li>• Yeni tatlar deneme cesareti</li>
                  <li>• Sofra adabı öğrenme</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">6-12 Yaş (Okul Çağı)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Kahvaltının önemi</li>
                  <li>• Okul kantini seçimleri</li>
                  <li>• Beslenme çantası hazırlama</li>
                  <li>• Fiziksel aktivite dengesi</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">12-18 Yaş (Ergenlik)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Artan enerji ihtiyacı</li>
                  <li>• Demir ve kalsiyum önemi</li>
                  <li>• Vücut imajı farkındalığı</li>
                  <li>• Sağlıklı atıştırmalıklar</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Sık Karşılaşılan Sorunlar ve Çözümleri</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-emerald-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Seçici Yeme (Picky Eating)</h3>
                <p className="text-gray-700 mb-3">
                  Çocukların belirli yiyecekleri reddetmesi normal bir gelişim aşamasıdır.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Yeni besinleri 10-15 kez sunun</li>
                  <li>• Zorlamadan, oyun havasında tanıştırın</li>
                  <li>• Çocuğu mutfak aktivitelerine dahil edin</li>
                  <li>• Rol model olun</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">İştahsızlık</h3>
                <p className="text-gray-700 mb-3">
                  Çocuklarda iştahsızlık birçok nedenden kaynaklanabilir.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Öğün aralarını düzenleyin</li>
                  <li>• Porsiyonları küçük tutun</li>
                  <li>• Sunum şeklini değiştirin</li>
                  <li>• Fiziksel aktiviteyi artırın</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aşırı Kilo</h3>
                <p className="text-gray-700 mb-3">
                  Çocukluk çağı obezitesi ciddi bir sağlık sorunudur.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tüm aileyi sürece dahil edin</li>
                  <li>• Kısıtlayıcı diyetlerden kaçının</li>
                  <li>• Hareket etmeyi eğlenceli hale getirin</li>
                  <li>• Ekran süresini sınırlayın</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-lightbulb-line text-amber-600"></i>
                Pratik Öneriler
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <i className="ri-star-fill text-amber-500 mt-1"></i>
                    <span className="text-gray-700">Renkli tabaklar hazırlayın</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-star-fill text-amber-500 mt-1"></i>
                    <span className="text-gray-700">Çocukla birlikte alışveriş yapın</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-star-fill text-amber-500 mt-1"></i>
                    <span className="text-gray-700">Yemek hazırlığına dahil edin</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <i className="ri-star-fill text-amber-500 mt-1"></i>
                    <span className="text-gray-700">Düzenli aile yemekleri</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-star-fill text-amber-500 mt-1"></i>
                    <span className="text-gray-700">Sağlıklı atıştırmalıklar hazır bulundurun</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="ri-star-fill text-amber-500 mt-1"></i>
                    <span className="text-gray-700">Yemek zamanını keyifli hale getirin</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Kaçınılması Gereken Besinler</h2>
            <div className="bg-red-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <i className="ri-close-circle-fill text-red-500 mt-1"></i>
                  <span><strong>Şekerli içecekler:</strong> Gazoz, meyve suları, enerji içecekleri</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-close-circle-fill text-red-500 mt-1"></i>
                  <span><strong>İşlenmiş gıdalar:</strong> Cips, bisküvi, hazır atıştırmalıklar</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-close-circle-fill text-red-500 mt-1"></i>
                  <span><strong>Fast food:</strong> Hamburger, pizza, kızartmalar</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="ri-close-circle-fill text-red-500 mt-1"></i>
                  <span><strong>Aşırı tuzlu yiyecekler:</strong> Turşu, salamura, hazır çorbalar</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white mt-12">
              <h3 className="text-2xl font-bold mb-4">Sonuç</h3>
              <p className="text-white/90 leading-relaxed">
                Çocukluk döneminde kazanılan sağlıklı beslenme alışkanlıkları, yaşam boyu sürecek bir hazinedir. Sabırlı, tutarlı ve sevgi dolu bir yaklaşımla, çocuklarınıza en değerli hediyelerden birini verebilirsiniz: sağlıklı bir yaşam.
              </p>
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-6">
            <img
              src="https://readdy.ai/api/search-image?query=professional%20female%20nutritionist%20dietitian%20in%20white%20coat%20smiling%20warmly%20professional%20headshot%20portrait%20clean%20white%20background%20medical%20photography&width=120&height=120&seq=author1&orientation=squarish"
              alt="Dyt. Ayşenur Korkmaz"
              className="w-24 h-24 rounded-full object-cover shadow-lg"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dyt. Ayşenur Korkmaz</h3>
              <p className="text-gray-700 mb-4">
                Beslenme ve Diyetetik alanında uzman. Çocuk beslenmesi, kilo yönetimi ve sağlıklı yaşam konularında danışmanlık hizmeti vermektedir.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                  <i className="ri-instagram-line text-2xl"></i>
                </a>
                <a href="#" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                  <i className="ri-linkedin-box-line text-2xl"></i>
                </a>
                <a href="#" className="text-emerald-600 hover:text-emerald-700 transition-colors">
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
              İlgili <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">Yazılar</span>
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                  <div className="relative">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-pink-600 text-xs font-bold rounded-full shadow-lg">
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
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300 mb-3 line-clamp-2 leading-tight">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-2 text-pink-600 font-semibold text-sm group-hover:gap-3 transition-all">
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
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Çocuğunuz İçin Özel Beslenme Planı</h2>
          <p className="text-xl text-white/90 mb-8">
            Çocuğunuzun sağlıklı büyümesi için profesyonel destek alın
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Randevu Al
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
