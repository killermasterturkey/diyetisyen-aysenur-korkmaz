import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts = [
    {
      title: 'Metabolizma Hızlandırmanın Bilimsel Yolları',
      excerpt: 'Metabolizmanızı doğal yollarla hızlandırmak için bilimsel araştırmalara dayalı 10 etkili yöntem.',
      category: 'Beslenme',
      date: '15 Ocak 2025',
      readTime: '8 dk',
      image: 'https://readdy.ai/api/search-image?query=healthy%20metabolism%20boost%20concept%20with%20fresh%20organic%20vegetables%20colorful%20fruits%20measuring%20tape%20fitness%20equipment%20water%20bottle%20on%20marble%20countertop%20bright%20natural%20morning%20sunlight%20modern%20kitchen%20lifestyle%20photography%20professional%20high%20resolution%20clean%20minimalist%20background&width=800&height=600&seq=blog-metabolism-main-v3&orientation=landscape',
      slug: 'metabolizma-hizlandirmanin-bilimsel-yollari',
    },
    {
      title: 'Sporcu Beslenmesinde Protein Zamanlaması',
      excerpt: 'Spor performansını maksimize etmek için protein alımının doğru zamanlaması ve stratejileri.',
      category: 'Spor',
      date: '12 Ocak 2025',
      readTime: '5 dk',
      image: 'https://readdy.ai/api/search-image?query=athletic%20nutrition%20concept%20with%20protein%20shake%20bottle%20gym%20equipment%20dumbbells%20fitness%20accessories%20fresh%20fruits%20on%20wooden%20table%20bright%20natural%20lighting%20sports%20lifestyle%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=600&seq=blog-protein-main-v3&orientation=landscape',
      slug: 'sporcu-beslenmesinde-protein-zamanlamasi',
    },
    {
      title: 'Bağışıklık Sistemini Güçlendiren Besinler',
      excerpt: 'Bağışıklık sisteminizi doğal yollarla güçlendiren besinler ve beslenme önerileri.',
      category: 'Sağlık',
      date: '10 Ocak 2025',
      readTime: '6 dk',
      image: 'https://readdy.ai/api/search-image?query=immune%20system%20boost%20concept%20with%20vitamin%20C%20rich%20foods%20citrus%20fruits%20oranges%20lemons%20colorful%20vegetables%20broccoli%20peppers%20on%20white%20marble%20surface%20bright%20natural%20lighting%20health%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=600&seq=blog-immune-main-v3&orientation=landscape',
      slug: 'bagisiklik-sistemini-guclendiren-besinler',
    },
    {
      title: 'Aralıklı Oruç ve Metabolik Sağlık',
      excerpt: 'Aralıklı oruç yöntemleri, metabolik faydaları ve doğru uygulama prensipleri.',
      category: 'Beslenme',
      date: '8 Ocak 2025',
      readTime: '7 dk',
      image: 'https://readdy.ai/api/search-image?query=intermittent%20fasting%20concept%20with%20elegant%20clock%20healthy%20nutritious%20foods%20time%20restricted%20eating%20window%20on%20minimalist%20table%20bright%20natural%20lighting%20wellness%20lifestyle%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=600&seq=blog-fasting-main-v3&orientation=landscape',
      slug: 'aralikli-oruc-ve-metabolik-saglik',
    },
    {
      title: 'Stres ve Beslenme İlişkisi',
      excerpt: 'Stresin beslenme alışkanlıklarına etkisi ve stres yönetiminde beslenmenin rolü.',
      category: 'Yaşam Tarzı',
      date: '5 Ocak 2025',
      readTime: '6 dk',
      image: 'https://readdy.ai/api/search-image?query=stress%20management%20nutrition%20concept%20with%20calming%20herbal%20tea%20relaxation%20foods%20dark%20chocolate%20nuts%20avocado%20on%20peaceful%20zen%20table%20setting%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=600&seq=blog-stress-main-v3&orientation=landscape',
      slug: 'stres-ve-beslenme-iliskisi',
    },
    {
      title: 'Çocuk Beslenmesinde Dikkat Edilmesi Gerekenler',
      excerpt: 'Çocukluk döneminde sağlıklı beslenme alışkanlıkları kazandırmanın yolları.',
      category: 'Çocuk Sağlığı',
      date: '3 Ocak 2025',
      readTime: '8 dk',
      image: 'https://readdy.ai/api/search-image?query=healthy%20children%20nutrition%20concept%20with%20colorful%20nutritious%20foods%20fruits%20vegetables%20whole%20grains%20dairy%20products%20on%20cheerful%20table%20setting%20bright%20natural%20lighting%20family%20lifestyle%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=600&seq=blog-child-main-v3&orientation=landscape',
      slug: 'cocuk-beslenmesinde-dikkat-edilmesi-gerekenler',
    },
    {
      title: 'Sağlıklı Kilo Vermenin Altın Kuralları',
      excerpt: 'Kalıcı ve sağlıklı kilo kaybı için bilmeniz gereken temel prensipler ve stratejiler.',
      category: 'Kilo Yönetimi',
      date: '1 Ocak 2025',
      readTime: '9 dk',
      image: 'https://readdy.ai/api/search-image?query=healthy%20weight%20loss%20concept%20with%20fresh%20vegetables%20fruits%20measuring%20tape%20fitness%20journal%20water%20bottle%20on%20clean%20white%20surface%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=600&seq=blog-weight-loss-v1&orientation=landscape',
      slug: 'saglikli-kilo-vermenin-altin-kurallari',
    },
    {
      title: 'Gut Sağlığı ve Probiyotikler',
      excerpt: 'Bağırsak sağlığının genel sağlığa etkisi ve probiyotik besinlerin önemi.',
      category: 'Sağlık',
      date: '28 Aralık 2024',
      readTime: '7 dk',
      image: 'https://readdy.ai/api/search-image?query=gut%20health%20concept%20with%20probiotic%20foods%20yogurt%20kefir%20fermented%20vegetables%20kimchi%20sauerkraut%20on%20wooden%20table%20bright%20natural%20lighting%20health%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=600&seq=blog-gut-health-v1&orientation=landscape',
      slug: 'gut-sagligi-ve-probiyotikler',
    },
    {
      title: 'Antioksidanlar ve Yaşlanma Karşıtı Beslenme',
      excerpt: 'Antioksidan açısından zengin besinler ve yaşlanmayı yavaşlatan beslenme stratejileri.',
      category: 'Anti-Aging',
      date: '25 Aralık 2024',
      readTime: '6 dk',
      image: 'https://readdy.ai/api/search-image?query=anti-aging%20nutrition%20concept%20with%20antioxidant%20rich%20foods%20berries%20dark%20chocolate%20green%20tea%20nuts%20on%20elegant%20surface%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=600&seq=blog-antioxidants-v1&orientation=landscape',
      slug: 'antioksidanlar-ve-yaslanma-karsiti-beslenme',
    },
    {
      title: 'Vejetaryen ve Vegan Beslenme Rehberi',
      excerpt: 'Bitkisel beslenme ile dengeli ve sağlıklı bir yaşam için pratik öneriler.',
      category: 'Yaşam Tarzı',
      date: '22 Aralık 2024',
      readTime: '10 dk',
      image: 'https://readdy.ai/api/search-image?query=vegetarian%20vegan%20nutrition%20concept%20with%20colorful%20plant%20based%20foods%20legumes%20nuts%20seeds%20vegetables%20fruits%20on%20wooden%20table%20bright%20natural%20lighting%20lifestyle%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=600&seq=blog-vegan-guide-v1&orientation=landscape',
      slug: 'vejetaryen-ve-vegan-beslenme-rehberi',
    },
    {
      title: 'Hidrasyon ve Sağlık',
      excerpt: 'Su tüketiminin önemi, doğru hidrasyon stratejileri ve sağlığa etkileri.',
      category: 'Sağlık',
      date: '20 Aralık 2024',
      readTime: '5 dk',
      image: 'https://readdy.ai/api/search-image?query=hydration%20health%20concept%20with%20glass%20water%20bottles%20fresh%20fruits%20cucumber%20lemon%20mint%20on%20clean%20white%20surface%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=600&seq=blog-hydration-v1&orientation=landscape',
      slug: 'hidrasyon-ve-saglik',
    },
    {
      title: 'Hormon Dengesi ve Beslenme',
      excerpt: 'Hormonal dengeyi destekleyen besinler ve beslenme alışkanlıkları.',
      category: 'Kadın Sağlığı',
      date: '18 Aralık 2024',
      readTime: '8 dk',
      image: 'https://readdy.ai/api/search-image?query=hormonal%20balance%20nutrition%20concept%20with%20healthy%20foods%20avocado%20salmon%20nuts%20seeds%20leafy%20greens%20on%20elegant%20surface%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=600&seq=blog-hormones-v1&orientation=landscape',
      slug: 'hormon-dengesi-ve-beslenme',
    },
    {
      title: 'Omega-3 Yağ Asitlerinin Önemi',
      excerpt: 'Kalp sağlığı, beyin fonksiyonları ve genel sağlık için omega-3 kaynaklarının rolü.',
      category: 'Beslenme',
      date: '15 Aralık 2024',
      readTime: '7 dk',
      image: 'https://readdy.ai/api/search-image?query=omega-3%20rich%20foods%20salmon%20fish%20oil%20capsules%20walnuts%20chia%20seeds%20flaxseeds%20on%20marble%20surface%20bright%20natural%20lighting%20health%20nutrition%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=600&seq=blog-omega3-v2&orientation=landscape',
      slug: 'omega-3-yag-asitlerinin-onemi',
    },
    {
      title: 'Gluten İntoleransı ve Çölyak Hastalığı',
      excerpt: 'Gluten hassasiyeti, çölyak hastalığı ve glutensiz beslenme stratejileri.',
      category: 'Sağlık',
      date: '12 Aralık 2024',
      readTime: '9 dk',
      image: 'https://readdy.ai/api/search-image?query=gluten%20free%20diet%20concept%20with%20quinoa%20rice%20buckwheat%20gluten%20free%20grains%20fresh%20vegetables%20on%20wooden%20table%20bright%20natural%20lighting%20health%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=600&seq=blog-gluten-free-v2&orientation=landscape',
      slug: 'gluten-intoleransi-ve-colyak-hastaligi',
    },
    {
      title: 'Menopoz Döneminde Beslenme',
      excerpt: 'Menopoz döneminde hormonal değişikliklere uygun beslenme önerileri ve yaşam tarzı değişiklikleri.',
      category: 'Kadın Sağlığı',
      date: '10 Aralık 2024',
      readTime: '8 dk',
      image: 'https://readdy.ai/api/search-image?query=menopause%20nutrition%20concept%20with%20calcium%20rich%20foods%20soy%20products%20leafy%20greens%20whole%20grains%20on%20elegant%20table%20bright%20natural%20lighting%20women%20health%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=600&seq=blog-menopause-v2&orientation=landscape',
      slug: 'menopoz-doneminde-beslenme',
    },
    {
      title: 'Spor Öncesi ve Sonrası Beslenme',
      excerpt: 'Egzersiz performansını artırmak ve toparlanmayı hızlandırmak için beslenme stratejileri.',
      category: 'Spor',
      date: '8 Aralık 2024',
      readTime: '6 dk',
      image: 'https://readdy.ai/api/search-image?query=pre%20post%20workout%20nutrition%20with%20protein%20shake%20banana%20energy%20bars%20sports%20drink%20gym%20equipment%20on%20wooden%20surface%20bright%20natural%20lighting%20fitness%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=600&seq=blog-workout-nutrition-v2&orientation=landscape',
      slug: 'spor-oncesi-ve-sonrasi-beslenme',
    },
    {
      title: 'Şeker Bağımlılığından Kurtulma',
      excerpt: 'Şeker tüketimini azaltmak ve sağlıklı alternatifler bulmak için pratik yöntemler.',
      category: 'Yaşam Tarzı',
      date: '5 Aralık 2024',
      readTime: '7 dk',
      image: 'https://readdy.ai/api/search-image?query=sugar%20addiction%20concept%20with%20refined%20sugar%20cubes%20healthy%20alternatives%20fruits%20dates%20honey%20on%20contrasting%20surfaces%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=600&seq=blog-sugar-addiction-v2&orientation=landscape',
      slug: 'seker-bagimliligidan-kurtulma',
    },
    {
      title: 'Kolesterol Yönetimi ve Beslenme',
      excerpt: 'Kolesterol seviyelerini doğal yollarla dengelemek için beslenme önerileri.',
      category: 'Sağlık',
      date: '3 Aralık 2024',
      readTime: '8 dk',
      image: 'https://readdy.ai/api/search-image?query=cholesterol%20management%20concept%20with%20heart%20healthy%20foods%20oats%20nuts%20avocado%20olive%20oil%20salmon%20on%20white%20surface%20bright%20natural%20lighting%20health%20photography%20professional%20high%20resolution%20clean%20background&width=800&height=600&seq=blog-cholesterol-v2&orientation=landscape',
      slug: 'kolesterol-yonetimi-ve-beslenme',
    },
  ];

  const faqData = [
    {
      question: 'Blog yazılarınız bilimsel kaynaklara dayanıyor mu?',
      answer: 'Evet, tüm blog içeriklerimiz güncel bilimsel araştırmalar, peer-reviewed makaleler ve kanıta dayalı beslenme prensipleri doğrultusunda hazırlanmaktadır.',
    },
    {
      question: 'Ne sıklıkla yeni içerik yayınlıyorsunuz?',
      answer: 'Haftada 2-3 yeni makale yayınlıyoruz. Güncel beslenme bilgilerini ve sağlıklı yaşam önerileri takip etmek için düzenli olarak blog sayfamızı ziyaret edebilirsiniz.',
    },
    {
      question: 'Blog yazılarındaki önerileri doğrudan uygulayabilir miyim?',
      answer: 'Genel sağlık önerileri sunuyoruz, ancak kişiye özel beslenme planı ve sağlık durumunuza uygun öneriler için mutlaka bir diyetisyene danışmanız önemlidir.',
    },
    {
      question: 'Özel bir konu hakkında makale talep edebilir miyim?',
      answer: 'Elbette! Merak ettiğiniz konuları iletişim sayfamızdan bize iletebilirsiniz. Talepleri değerlendirerek içerik planımıza dahil ediyoruz.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-emerald-50/30">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold font-serif text-gray-900 mb-6">
            Blog <span className="text-emerald-600">Haberleri</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sağlıklı yaşam, beslenme ve wellness konularında güncel bilgiler ve uzman önerileri
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-emerald-600 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <i className="ri-calendar-line"></i>
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <i className="ri-time-line"></i>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-emerald-600 font-medium group-hover:gap-4 transition-all">
                      Devamını Oku
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-serif text-gray-900 mb-12 text-center">
            Sıkça Sorulan <span className="text-emerald-600">Sorular</span>
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details key={index} className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                  <i className="ri-arrow-down-s-line text-2xl text-emerald-600 group-open:rotate-180 transition-transform flex-shrink-0"></i>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;