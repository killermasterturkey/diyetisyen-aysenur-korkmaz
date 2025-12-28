import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const BlogDetailPage = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const postsData: any = {
    'metabolizma-hizlandirmanin-bilimsel-yollari': {
      title: 'Metabolizma Hızlandırmanın Bilimsel Yolları',
      category: 'Beslenme',
      date: '15 Ocak 2025',
      readTime: '8 dk',
      author: 'Dyt. Ayşenur Korkmaz',
      image: 'https://readdy.ai/api/search-image?query=healthy%20metabolism%20concept%20with%20fresh%20organic%20vegetables%20colorful%20fruits%20measuring%20tape%20fitness%20dumbbells%20water%20bottle%20on%20marble%20countertop%20bright%20natural%20morning%20sunlight%20modern%20kitchen%20lifestyle%20photography%20professional%20high%20resolution%20clean%20minimalist%20background&width=1200&height=600&seq=blog-metabolism-hero-v2&orientation=landscape',
      content: `
        <p>Metabolizma, vücudumuzun enerji harcama hızıdır ve kilo yönetiminde kritik bir rol oynar. Peki metabolizmayı doğal yollarla hızlandırmak mümkün mü? Bilimsel araştırmalar, evet diyor!</p>

        <h2>1. Protein Alımını Artırın</h2>
        <p>Protein, termik etkisi en yüksek makro besindir. Yani vücudunuz proteini sindirmek için daha fazla enerji harcar. Her öğünde yeterli protein tüketmek, metabolizmanızı %15-30 oranında hızlandırabilir.</p>

        <h2>2. Düzenli Egzersiz Yapın</h2>
        <p>Özellikle yüksek yoğunluklu interval antrenmanlar (HIIT) ve direnç egzersizleri, metabolizmayı saatlerce hızlı tutar. Kas kütlesi arttıkça, dinlenme metabolizmanız da yükselir.</p>

        <h2>3. Bol Su İçin</h2>
        <p>Araştırmalar, 500 ml su içmenin metabolizmayı 1 saat boyunca %10-30 artırdığını gösteriyor. Özellikle soğuk su, vücudun ısınmak için daha fazla enerji harcamasını sağlar.</p>

        <h2>4. Yeşil Çay Tüketin</h2>
        <p>Yeşil çay ve oolong çayı, metabolizmayı %4-5 artırabilir. İçerdikleri kateşinler ve kafein, yağ yakımını destekler.</p>

        <h2>5. Yeterli Uyuyun</h2>
        <p>Uyku eksikliği, metabolizmayı yavaşlatır ve açlık hormonlarını dengesizleştirir. Günde 7-9 saat kaliteli uyku, metabolik sağlık için şarttır.</p>

        <h2>6. Baharatlı Yiyecekler Ekleyin</h2>
        <p>Acı biber içindeki kapsaisin, metabolizmayı geçici olarak hızlandırır ve yağ yakımını artırır.</p>

        <h2>7. Küçük Öğünler Yerine Dengeli Beslenin</h2>
        <p>Eskiden "sık sık yemek metabolizmayı hızlandırır" denirdi. Ancak güncel araştırmalar, önemli olanın toplam kalori ve besin kalitesi olduğunu gösteriyor.</p>

        <h2>8. Kahve İçin (Ölçülü)</h2>
        <p>Kafein, metabolizmayı %3-11 artırabilir. Ancak aşırı tüketim, tolerans gelişimine neden olur.</p>

        <h2>9. Stres Yönetimi</h2>
        <p>Kronik stres, kortizol seviyesini artırır ve metabolizmayı yavaşlatır. Meditasyon, yoga ve nefes egzersizleri faydalıdır.</p>

        <h2>10. Omega-3 Tüketin</h2>
        <p>Balık yağı ve omega-3 yağ asitleri, yağ yakımını artırır ve metabolik sağlığı destekler.</p>

        <h2>Sonuç</h2>
        <p>Metabolizmayı hızlandırmak, tek bir yöntemle değil, yaşam tarzı değişiklikleriyle mümkündür. Dengeli beslenme, düzenli egzersiz, kaliteli uyku ve stres yönetimi, metabolik sağlığınızı optimize eder.</p>
      `,
    },
    'sporcu-beslenmesinde-protein-zamanlamasi': {
      title: 'Sporcu Beslenmesinde Protein Zamanlaması',
      category: 'Spor',
      date: '12 Ocak 2025',
      readTime: '5 dk',
      author: 'Dyt. Ayşenur Korkmaz',
      image: 'https://readdy.ai/api/search-image?query=athletic%20nutrition%20concept%20with%20protein%20shake%20bottle%20gym%20equipment%20dumbbells%20fitness%20accessories%20fresh%20fruits%20on%20wooden%20table%20bright%20natural%20lighting%20sports%20lifestyle%20photography%20professional%20high%20resolution%20clean%20background&width=1200&height=600&seq=blog-protein-timing-v2&orientation=landscape',
      content: `
        <p>Spor performansını maksimize etmek için protein alımının zamanlaması kritik öneme sahiptir. Doğru zamanda doğru miktarda protein, kas gelişimi ve toparlanmayı optimize eder.</p>

        <h2>Antrenman Öncesi Protein</h2>
        <p>Antrenman öncesi 1-2 saat içinde 20-30g protein almak, kas protein sentezini artırır ve antrenman sırasında kas yıkımını azaltır. Hızlı sindirilen proteinler tercih edilmelidir.</p>

        <h2>Antrenman Sonrası Protein</h2>
        <p>Antrenman sonrası 30-60 dakika içinde protein almak, "anabolik pencere" olarak bilinir. Bu dönemde 20-40g protein, kas toparlanmasını hızlandırır.</p>

        <h2>Günlük Protein Dağılımı</h2>
        <p>Günlük protein ihtiyacınızı 4-5 öğüne eşit dağıtmak, kas protein sentezini optimize eder. Her öğünde 20-30g protein hedefleyin.</p>

        <h2>Gece Öncesi Protein</h2>
        <p>Uyumadan önce yavaş sindirilen protein (kazein) almak, gece boyunca kas toparlanmasını destekler.</p>

        <h2>Sonuç</h2>
        <p>Protein zamanlaması önemlidir, ancak günlük toplam protein alımı daha kritiktir. Vücut ağırlığınızın kg başına 1.6-2.2g protein hedefleyin.</p>
      `,
    },
    'bagisiklik-sistemini-guclendiren-besinler': {
      title: 'Bağışıklık Sistemini Güçlendiren Besinler',
      category: 'Sağlık',
      date: '10 Ocak 2025',
      readTime: '6 dk',
      author: 'Dyt. Ayşenur Korkmaz',
      image: 'https://readdy.ai/api/search-image?query=immune%20system%20boost%20concept%20with%20vitamin%20C%20rich%20foods%20citrus%20fruits%20oranges%20lemons%20colorful%20vegetables%20broccoli%20peppers%20on%20white%20marble%20surface%20bright%20natural%20lighting%20health%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=1200&height=600&seq=blog-immune-system-v2&orientation=landscape',
      content: `
        <p>Güçlü bir bağışıklık sistemi, hastalıklardan korunmanın anahtarıdır. Doğru beslenme, bağışıklık sistemimizi destekleyen en önemli faktörlerden biridir.</p>

        <h2>C Vitamini Kaynakları</h2>
        <p>Portakal, limon, greyfurt, kivi, çilek ve kırmızı biber gibi C vitamini açısından zengin besinler, bağışıklık hücrelerinin üretimini artırır.</p>

        <h2>D Vitamini</h2>
        <p>Güneş ışığı, yağlı balıklar ve takviye edici gıdalar D vitamini sağlar. D vitamini eksikliği, enfeksiyonlara karşı direnci azaltır.</p>

        <h2>Çinko Kaynakları</h2>
        <p>Kırmızı et, kabuklu deniz ürünleri, baklagiller ve kuruyemişler çinko açısından zengindir. Çinko, bağışıklık hücrelerinin gelişimi için gereklidir.</p>

        <h2>Probiyotikler</h2>
        <p>Yoğurt, kefir ve fermente gıdalar bağırsak sağlığını destekler. Bağırsak mikrobiyomu, bağışıklık sisteminin %70'ini oluşturur.</p>

        <h2>Antioksidanlar</h2>
        <p>Renkli sebze ve meyveler, antioksidan açısından zengindir. Antioksidanlar, hücreleri hasardan korur ve bağışıklığı güçlendirir.</p>

        <h2>Sonuç</h2>
        <p>Dengeli ve çeşitli beslenme, güçlü bir bağışıklık sistemi için temeldir. Bol su içmek, düzenli uyumak ve stres yönetimi de önemlidir.</p>
      `,
    },
    'aralikli-oruc-ve-metabolik-saglik': {
      title: 'Aralıklı Oruç ve Metabolik Sağlık',
      category: 'Beslenme',
      date: '8 Ocak 2025',
      readTime: '7 dk',
      author: 'Dyt. Ayşenur Korkmaz',
      image: 'https://readdy.ai/api/search-image?query=intermittent%20fasting%20concept%20with%20elegant%20clock%20healthy%20nutritious%20foods%20time%20restricted%20eating%20window%20on%20minimalist%20table%20bright%20natural%20lighting%20wellness%20lifestyle%20photography%20professional%20high%20resolution%20clean%20background&width=1200&height=600&seq=blog-intermittent-fasting-v2&orientation=landscape',
      content: `
        <p>Aralıklı oruç, belirli saatlerde yemek yeme ve oruç tutma döngüsüdür. Metabolik sağlık, kilo kontrolü ve hücresel yenilenme üzerinde olumlu etkileri vardır.</p>

        <h2>16/8 Yöntemi</h2>
        <p>En popüler yöntemdir. 16 saat oruç, 8 saat yeme penceresi. Örneğin, 12:00-20:00 arası yemek yiyebilirsiniz.</p>

        <h2>Metabolik Faydalar</h2>
        <p>İnsülin duyarlılığını artırır, yağ yakımını hızlandırır ve hücresel otofajiyi tetikler. Otofaji, hücrelerin kendini temizleme sürecidir.</p>

        <h2>Kilo Yönetimi</h2>
        <p>Kalori kısıtlaması olmadan kilo vermeyi destekler. Yeme penceresinde dengeli beslenme önemlidir.</p>

        <h2>Kimler Yapmamalı?</h2>
        <p>Gebeler, emziren anneler, diyabet hastaları ve yeme bozukluğu geçmişi olanlar aralıklı oruç yapmamalıdır.</p>

        <h2>Sonuç</h2>
        <p>Aralıklı oruç, doğru uygulandığında metabolik sağlığı destekler. Ancak herkes için uygun değildir, diyetisyene danışmak önemlidir.</p>
      `,
    },
    'stres-ve-beslenme-iliskisi': {
      title: 'Stres ve Beslenme İlişkisi',
      category: 'Yaşam Tarzı',
      date: '5 Ocak 2025',
      readTime: '6 dk',
      author: 'Dyt. Ayşenur Korkmaz',
      image: 'https://readdy.ai/api/search-image?query=stress%20management%20nutrition%20concept%20with%20calming%20herbal%20tea%20relaxation%20foods%20dark%20chocolate%20nuts%20avocado%20on%20peaceful%20zen%20table%20setting%20bright%20natural%20lighting%20wellness%20photography%20professional%20high%20resolution%20clean%20background&width=1200&height=600&seq=blog-stress-nutrition-v2&orientation=landscape',
      content: `
        <p>Stres, beslenme alışkanlıklarımızı ve metabolizmamızı doğrudan etkiler. Kronik stres, kilo alımına ve sağlık sorunlarına yol açabilir.</p>

        <h2>Stres ve Kortizol</h2>
        <p>Stres hormonu kortizol, iştahı artırır ve özellikle şekerli, yağlı yiyeceklere karşı isteği tetikler. Bu durum kilo alımına neden olur.</p>

        <h2>Stresi Azaltan Besinler</h2>
        <p>Omega-3 yağ asitleri, magnezyum, B vitaminleri ve probiyotikler stresi azaltmaya yardımcı olur. Somon, ceviz, yeşil yapraklı sebzeler ve yoğurt tüketin.</p>

        <h2>Duygusal Yeme</h2>
        <p>Stres anında yemek yeme isteği, duygusal yeme olarak bilinir. Farkındalık egzersizleri ve alternatif başa çıkma yöntemleri geliştirmek önemlidir.</p>

        <h2>Düzenli Öğünler</h2>
        <p>Düzenli ve dengeli öğünler, kan şekerini stabil tutar ve stres hormonlarını dengelemeye yardımcı olur.</p>

        <h2>Sonuç</h2>
        <p>Stres yönetimi ve sağlıklı beslenme, birbirini destekler. Meditasyon, yoga ve düzenli egzersiz de stresi azaltır.</p>
      `,
    },
    'cocuk-beslenmesinde-dikkat-edilmesi-gerekenler': {
      title: 'Çocuk Beslenmesinde Dikkat Edilmesi Gerekenler',
      category: 'Çocuk Sağlığı',
      date: '3 Ocak 2025',
      readTime: '8 dk',
      author: 'Dyt. Ayşenur Korkmaz',
      image: 'https://readdy.ai/api/search-image?query=healthy%20children%20nutrition%20concept%20with%20colorful%20nutritious%20foods%20fruits%20vegetables%20whole%20grains%20dairy%20products%20on%20cheerful%20table%20setting%20bright%20natural%20lighting%20family%20lifestyle%20photography%20professional%20high%20resolution%20clean%20background&width=1200&height=600&seq=blog-child-nutrition-v2&orientation=landscape',
      content: `
        <p>Çocukluk dönemi, büyüme ve gelişme için kritik öneme sahiptir. Doğru beslenme alışkanlıkları, çocuğun fiziksel ve zihinsel gelişimini destekler.</p>

        <h2>Dengeli Beslenme</h2>
        <p>Her öğünde protein, karbonhidrat, sağlıklı yağ, vitamin ve mineral bulunmalıdır. Renkli sebze ve meyveler tüketimi önemlidir.</p>

        <h2>Kahvaltının Önemi</h2>
        <p>Kahvaltı, çocukların günlük enerji ihtiyacının %25'ini karşılamalıdır. Protein, tam tahıl ve meyve içeren kahvaltılar idealdir.</p>

        <h2>Şeker Tüketimi</h2>
        <p>Aşırı şeker tüketimi, obezite ve diş çürüklerine neden olur. Doğal şeker kaynakları tercih edilmelidir.</p>

        <h2>Su Tüketimi</h2>
        <p>Çocuklar günde en az 6-8 bardak su içmelidir. Şekerli içecekler yerine su ve süt tercih edilmelidir.</p>

        <h2>Örnek Rol Model</h2>
        <p>Ebeveynler, sağlıklı beslenme konusunda rol model olmalıdır. Çocuklar, gördüklerini taklit eder.</p>

        <h2>Sonuç</h2>
        <p>Çocukluk döneminde kazanılan sağlıklı beslenme alışkanlıkları, yaşam boyu sürer. Sabırlı ve tutarlı olmak önemlidir.</p>
      `,
    },
  };

  const post = postsData[slug || ''] || postsData['metabolizma-hizlandirmanin-bilimsel-yollari'];

  const relatedPosts = [
    {
      title: 'Bağışıklık Sistemini Güçlendiren Besinler',
      image: 'https://readdy.ai/api/search-image?query=immune%20boost%20foods%20vitamin%20C%20rich%20citrus%20fruits%20colorful%20vegetables%20on%20white%20surface%20bright%20lighting%20health%20photography%20clean%20background&width=400&height=300&seq=blog-related-immune-v2&orientation=landscape',
      slug: 'bagisiklik-sistemini-guclendiren-besinler',
      category: 'Sağlık',
      excerpt: 'Güçlü bir bağışıklık sistemi için doğru beslenme stratejileri',
      readTime: '6 dk',
    },
    {
      title: 'Aralıklı Oruç ve Metabolik Sağlık',
      image: 'https://readdy.ai/api/search-image?query=intermittent%20fasting%20clock%20healthy%20foods%20time%20restricted%20eating%20bright%20lighting%20wellness%20photography%20clean%20background&width=400&height=300&seq=blog-related-fasting-v2&orientation=landscape',
      slug: 'aralikli-oruc-ve-metabolik-saglik',
      category: 'Beslenme',
      excerpt: 'Aralıklı oruç ile metabolik sağlığınızı optimize edin',
      readTime: '7 dk',
    },
    {
      title: 'Stres ve Beslenme İlişkisi',
      image: 'https://readdy.ai/api/search-image?query=stress%20management%20calming%20foods%20herbal%20tea%20relaxation%20bright%20lighting%20wellness%20photography%20clean%20background&width=400&height=300&seq=blog-related-stress-v2&orientation=landscape',
      slug: 'stres-ve-beslenme-iliskisi',
      category: 'Yaşam Tarzı',
      excerpt: 'Stresi beslenmeyle yönetme yöntemleri',
      readTime: '6 dk',
    },
  ];

  const faqData = [
    {
      question: 'Bu bilgiler bilimsel araştırmalara dayanıyor mu?',
      answer: 'Evet, tüm içeriklerimiz güncel bilimsel araştırmalar ve kanıta dayalı beslenme prensipleri doğrultusunda hazırlanmaktadır.',
    },
    {
      question: 'Yazıdaki önerileri herkese uygulanabilir mi?',
      answer: 'Genel öneriler sunuyoruz, ancak kişiye özel beslenme planı için mutlaka bir diyetisyene danışmanız önemlidir.',
    },
    {
      question: 'Ne sıklıkla yeni içerik yayınlıyorsunuz?',
      answer: 'Haftada 2-3 yeni makale yayınlıyoruz. Güncel beslenme bilgilerini takip etmek için blog sayfamızı düzenli ziyaret edebilirsiniz.',
    },
    {
      question: 'Özel bir konu hakkında makale talep edebilir miyim?',
      answer: 'Elbette! İletişim sayfamızdan bize ulaşarak merak ettiğiniz konuları iletebilirsiniz.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-emerald-50/30">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-transparent"></div>
        <div className="max-w-5xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-semibold shadow-lg mb-8 hover:shadow-xl transition-shadow">
            <i className="ri-bookmark-line"></i>
            {post.category}
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold font-serif text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-8 text-gray-600 mb-12 flex-wrap">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full opacity-20 blur group-hover:opacity-40 transition-opacity"></div>
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20female%20nutritionist%20dietitian%20portrait%20smiling%20warmly%20natural%20lighting%20high%20quality%20clean%20background&width=100&height=100&seq=author-avatar-v2&orientation=squarish"
                  alt={post.author}
                  className="relative w-14 h-14 rounded-full object-cover object-top ring-2 ring-white shadow-lg"
                />
              </div>
              <span className="font-semibold text-gray-900 text-lg">{post.author}</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <i className="ri-calendar-line text-emerald-600"></i>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <i className="ri-time-line text-emerald-600"></i>
              <span>{post.readTime} okuma</span>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 group">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-xl max-w-none mb-16">
            <div 
              className="text-gray-700 leading-relaxed space-y-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontSize: '1.25rem',
                lineHeight: '1.8',
              }}
            />
          </article>

          {/* Share */}
          <div className="mb-16 pt-12 border-t-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Yazıyı Paylaş</h3>
            <div className="flex items-center gap-4 flex-wrap">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:shadow-2xl transition-all flex items-center gap-3 whitespace-nowrap hover:scale-105">
                <i className="ri-facebook-fill text-xl group-hover:scale-110 transition-transform"></i>
                <span className="font-semibold">Facebook</span>
              </button>
              <button className="group px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-2xl hover:shadow-2xl transition-all flex items-center gap-3 whitespace-nowrap hover:scale-105">
                <i className="ri-twitter-fill text-xl group-hover:scale-110 transition-transform"></i>
                <span className="font-semibold">Twitter</span>
              </button>
              <button className="group px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl hover:shadow-2xl transition-all flex items-center gap-3 whitespace-nowrap hover:scale-105">
                <i className="ri-whatsapp-fill text-xl group-hover:scale-110 transition-transform"></i>
                <span className="font-semibold">WhatsApp</span>
              </button>
              <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl hover:shadow-2xl transition-all flex items-center gap-3 whitespace-nowrap hover:scale-105">
                <i className="ri-pinterest-fill text-xl group-hover:scale-110 transition-transform"></i>
                <span className="font-semibold">Pinterest</span>
              </button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="relative group mb-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-start gap-8">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full opacity-20 blur group-hover:opacity-40 transition-opacity"></div>
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20female%20nutritionist%20dietitian%20portrait%20smiling%20warmly%20wearing%20white%20coat%20natural%20lighting%20high%20quality%20clean%20background&width=150&height=150&seq=author-bio-v2&orientation=squarish"
                  alt={post.author}
                  className="relative w-32 h-32 rounded-full object-cover object-top ring-4 ring-white shadow-xl"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{post.author}</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  İstanbul Arel Üniversitesi Beslenme ve Diyetetik Bölümü mezunu. 5000+ danışan deneyimi ile kişiye özel beslenme programları hazırlıyor. Fonksiyonel beslenme ve bütüncül yaklaşım konusunda uzman.
                </p>
                <Link
                  to="/hakkimda"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl hover:shadow-xl hover:scale-105 transition-all"
                >
                  Daha Fazla Bilgi
                  <i className="ri-arrow-right-line text-xl"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold font-serif text-gray-900 mb-4">
                İlgili <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Yazılar</span>
              </h3>
              <p className="text-lg text-gray-600">Sizi ilgilendirebilecek diğer içerikler</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <Link
                  key={index}
                  to={`/blog/${relatedPost.slug}`}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                    <div className="relative">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-emerald-600 text-xs font-bold rounded-full shadow-lg">
                            {relatedPost.category}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 text-white/90 text-sm">
                            <i className="ri-time-line"></i>
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2 leading-tight mb-3">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{relatedPost.excerpt}</p>
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

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-serif text-gray-900 mb-4">
              Sıkça Sorulan <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Sorular</span>
            </h2>
            <p className="text-xl text-gray-600">Blog yazıları hakkında merak edilenler</p>
          </div>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details key={index} className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                  <div className="w-10 h-10 flex items-center justify-center bg-emerald-600 rounded-xl flex-shrink-0 group-open:rotate-180 transition-transform">
                    <i className="ri-arrow-down-s-line text-2xl text-white"></i>
                  </div>
                </summary>
                <p className="mt-6 text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;