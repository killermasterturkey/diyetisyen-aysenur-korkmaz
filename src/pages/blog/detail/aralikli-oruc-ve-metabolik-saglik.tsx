import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const AralikliOrucDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedPosts = [
    {
      title: 'Metabolizma Hızlandırmanın Bilimsel Yolları',
      image: 'https://readdy.ai/api/search-image?query=healthy%20metabolism%20concept%20fresh%20vegetables%20fruits%20fitness%20bright%20lighting%20health%20photography%20clean%20background&width=400&height=300&seq=blog-related-metabolism-v3&orientation=landscape',
      slug: 'metabolizma-hizlandirmanin-bilimsel-yollari',
      category: 'Beslenme',
      excerpt: 'Metabolizmanızı doğal yollarla hızlandırın',
      readTime: '8 dk',
    },
    {
      title: 'Sağlıklı Kilo Vermenin Altın Kuralları',
      image: 'https://readdy.ai/api/search-image?query=healthy%20weight%20loss%20concept%20measuring%20tape%20fresh%20foods%20fitness%20bright%20lighting%20wellness%20photography%20clean%20background&width=400&height=300&seq=blog-related-weight-v3&orientation=landscape',
      slug: 'saglikli-kilo-vermenin-altin-kurallari',
      category: 'Beslenme',
      excerpt: 'Kalıcı kilo verme için bilimsel yaklaşımlar',
      readTime: '9 dk',
    },
    {
      title: 'Hormon Dengesi ve Beslenme',
      image: 'https://readdy.ai/api/search-image?query=hormone%20balance%20nutrition%20concept%20healthy%20foods%20wellness%20bright%20lighting%20health%20photography%20clean%20background&width=400&height=300&seq=blog-related-hormone-v3&orientation=landscape',
      slug: 'hormon-dengesi-ve-beslenme',
      category: 'Sağlık',
      excerpt: 'Hormonlarınızı beslenmeyle dengeleme yöntemleri',
      readTime: '7 dk',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-emerald-50/30">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-transparent"></div>
        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-semibold shadow-lg mb-8">
            <i className="ri-bookmark-line"></i>
            Beslenme
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold font-serif text-gray-900 mb-8 leading-tight">
            Aralıklı Oruç ve Metabolik Sağlık
          </h1>

          <div className="flex items-center gap-8 text-gray-600 mb-12 flex-wrap">
            <div className="flex items-center gap-3">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20female%20nutritionist%20dietitian%20portrait%20smiling%20warmly%20natural%20lighting%20high%20quality%20clean%20background&width=100&height=100&seq=author-avatar-v3&orientation=squarish"
                alt="Dyt. Ayşenur Korkmaz"
                className="w-14 h-14 rounded-full object-cover object-top ring-2 ring-white shadow-lg"
              />
              <span className="font-semibold text-gray-900 text-lg">Dyt. Ayşenur Korkmaz</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <i className="ri-calendar-line text-emerald-600"></i>
              <span>8 Ocak 2025</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <i className="ri-time-line text-emerald-600"></i>
              <span>7 dk okuma</span>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16">
            <img
              src="https://readdy.ai/api/search-image?query=intermittent%20fasting%20concept%20with%20elegant%20clock%20healthy%20nutritious%20foods%20time%20restricted%20eating%20window%20on%20minimalist%20table%20bright%20natural%20lighting%20wellness%20lifestyle%20photography%20professional%20high%20resolution%20clean%20background&width=1200&height=600&seq=blog-intermittent-fasting-hero-v3&orientation=landscape"
              alt="Aralıklı Oruç"
              className="w-full h-auto object-cover"
            />
          </div>

          <article className="prose prose-xl max-w-none mb-16">
            <div className="text-gray-700 leading-relaxed space-y-8" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
              <p>Aralıklı oruç, belirli saatlerde yemek yeme ve oruç tutma döngüsüdür. Metabolik sağlık, kilo kontrolü ve hücresel yenilenme üzerinde olumlu etkileri vardır.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">16/8 Yöntemi</h2>
              <p>En popüler yöntemdir. 16 saat oruç, 8 saat yeme penceresi. Örneğin, 12:00-20:00 arası yemek yiyebilirsiniz.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Metabolik Faydalar</h2>
              <p>İnsülin duyarlılığını artırır, yağ yakımını hızlandırır ve hücresel otofajiyi tetikler. Otofaji, hücrelerin kendini temizleme sürecidir.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kilo Yönetimi</h2>
              <p>Kalori kısıtlaması olmadan kilo vermeyi destekler. Yeme penceresinde dengeli beslenme önemlidir.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kimler Yapmamalı?</h2>
              <p>Gebeler, emziren anneler, diyabet hastaları ve yeme bozukluğu geçmişi olanlar aralıklı oruç yapmamalıdır.</p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Sonuç</h2>
              <p>Aralıklı oruç, doğru uygulandığında metabolik sağlığı destekler. Ancak herkes için uygun değildir, diyetisyene danışmak önemlidir.</p>
            </div>
          </article>

          <div className="mb-16 pt-12 border-t-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Yazıyı Paylaş</h3>
            <div className="flex items-center gap-4 flex-wrap">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:shadow-2xl transition-all flex items-center gap-3">
                <i className="ri-facebook-fill text-xl"></i>
                <span className="font-semibold">Facebook</span>
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-2xl hover:shadow-2xl transition-all flex items-center gap-3">
                <i className="ri-twitter-fill text-xl"></i>
                <span className="font-semibold">Twitter</span>
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl hover:shadow-2xl transition-all flex items-center gap-3">
                <i className="ri-whatsapp-fill text-xl"></i>
                <span className="font-semibold">WhatsApp</span>
              </button>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold font-serif text-gray-900 mb-4">
                İlgili <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Yazılar</span>
              </h3>
              <p className="text-lg text-gray-600">Sizi ilgilendirebilecek diğer içerikler</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((post, index) => (
                <Link key={index} to={`/blog/${post.slug}`} className="group relative">
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AralikliOrucDetail;
