import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const RecipesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const recipes = [
    {
      title: 'Protein Pancake',
      description: 'Yüksek protein içeriği ile tok tutan, lezzetli ve sağlıklı bir kahvaltı alternatifi.',
      category: 'Kahvaltı',
      calories: '280',
      time: '15 dk',
      difficulty: 'Kolay',
      image: 'https://readdy.ai/api/search-image?query=fluffy%20golden%20protein%20pancakes%20stacked%20high%20topped%20with%20fresh%20blueberries%20strawberries%20banana%20slices%20drizzled%20with%20pure%20honey%20on%20elegant%20white%20ceramic%20plate%20bright%20morning%20sunlight%20streaming%20through%20window%20modern%20minimalist%20kitchen%20setting%20professional%20food%20photography%20high%20resolution%20clean%20background&width=800&height=600&seq=recipe-pancake-main-v3&orientation=landscape',
      slug: 'protein-pancake',
    },
    {
      title: 'Quinoa Salata',
      description: 'Protein, lif ve vitamin açısından zengin, doyurucu ve lezzetli bir öğle yemeği seçeneği.',
      category: 'Öğle Yemeği',
      calories: '320',
      time: '20 dk',
      difficulty: 'Kolay',
      image: 'https://readdy.ai/api/search-image?query=vibrant%20colorful%20quinoa%20salad%20bowl%20overflowing%20with%20fresh%20vegetables%20cherry%20tomatoes%20cucumber%20avocado%20slices%20chickpeas%20crumbled%20feta%20cheese%20fresh%20herbs%20in%20modern%20white%20ceramic%20bowl%20natural%20daylight%20professional%20food%20photography%20high%20resolution%20clean%20minimalist%20background&width=800&height=600&seq=recipe-quinoa-main-v3&orientation=landscape',
      slug: 'quinoa-salata',
    },
    {
      title: 'Izgara Somon',
      description: 'Omega-3 açısından zengin, kalp sağlığını destekleyen ve protein değeri yüksek bir akşam yemeği.',
      category: 'Akşam Yemeği',
      calories: '380',
      time: '25 dk',
      difficulty: 'Orta',
      image: 'https://readdy.ai/api/search-image?query=perfectly%20grilled%20salmon%20fillet%20with%20golden%20crispy%20skin%20grill%20marks%20served%20with%20steamed%20asparagus%20broccoli%20lemon%20wedges%20fresh%20dill%20garnish%20on%20elegant%20white%20plate%20restaurant%20quality%20professional%20food%20photography%20natural%20lighting%20high%20resolution%20clean%20background&width=800&height=600&seq=recipe-salmon-main-v3&orientation=landscape',
      slug: 'izgara-somon',
    },
    {
      title: 'Yulaf Smoothie Bowl',
      description: 'Enerji dolu bir güne başlamak için ideal, lif ve antioksidan açısından zengin kahvaltı.',
      category: 'Kahvaltı',
      calories: '340',
      time: '10 dk',
      difficulty: 'Çok Kolay',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20vibrant%20smoothie%20bowl%20with%20oats%20topped%20with%20fresh%20berries%20banana%20slices%20chia%20seeds%20granola%20coconut%20flakes%20arranged%20artistically%20in%20ceramic%20bowl%20bright%20morning%20light%20professional%20food%20photography%20high%20resolution%20clean%20background&width=800&height=600&seq=recipe-smoothie-main-v3&orientation=landscape',
      slug: 'yulafli-smoothie-bowl',
    },
    {
      title: 'Mercimek Köfte',
      description: 'Geleneksel lezzetlerin sağlıklı versiyonu, protein ve lif açısından zengin, vejetaryen dostu.',
      category: 'Öğle Yemeği',
      calories: '290',
      time: '30 dk',
      difficulty: 'Orta',
      image: 'https://readdy.ai/api/search-image?query=traditional%20Turkish%20red%20lentil%20kofte%20balls%20arranged%20beautifully%20on%20white%20plate%20with%20fresh%20green%20lettuce%20leaves%20lemon%20wedges%20parsley%20garnish%20Turkish%20cuisine%20professional%20food%20photography%20natural%20lighting%20high%20resolution%20clean%20background&width=800&height=600&seq=recipe-kofte-main-v3&orientation=landscape',
      slug: 'mercimek-kofte',
    },
    {
      title: 'Tavuklu Wrap',
      description: 'Pratik, doyurucu ve dengeli bir öğle yemeği alternatifi, yüksek protein içerikli.',
      category: 'Öğle Yemeği',
      calories: '420',
      time: '20 dk',
      difficulty: 'Kolay',
      image: 'https://readdy.ai/api/search-image?query=healthy%20grilled%20chicken%20wrap%20with%20fresh%20vegetables%20lettuce%20tomatoes%20avocado%20in%20whole%20wheat%20tortilla%20cut%20in%20half%20showing%20colorful%20filling%20on%20wooden%20board%20professional%20food%20photography%20natural%20lighting%20high%20resolution%20clean%20background&width=800&height=600&seq=recipe-wrap-main-v3&orientation=landscape',
      slug: 'tavuklu-wrap',
    },
    {
      title: 'Avokado Toast',
      description: 'Sağlıklı yağlar ve lif açısından zengin, pratik ve lezzetli bir kahvaltı seçeneği.',
      category: 'Kahvaltı',
      calories: '310',
      time: '10 dk',
      difficulty: 'Çok Kolay',
      image: 'https://readdy.ai/api/search-image?query=gourmet%20avocado%20toast%20on%20artisan%20whole%20grain%20bread%20topped%20with%20perfectly%20poached%20egg%20cherry%20tomatoes%20microgreens%20sesame%20seeds%20on%20elegant%20white%20plate%20bright%20morning%20light%20professional%20food%20photography%20high%20resolution%20clean%20background&width=800&height=600&seq=recipe-avocado-toast-v1&orientation=landscape',
      slug: 'avokado-toast',
    },
    {
      title: 'Fırında Sebzeli Tavuk',
      description: 'Dengeli makro besin oranları ile ideal bir akşam yemeği, kolay hazırlanır ve lezzetli.',
      category: 'Akşam Yemeği',
      calories: '390',
      time: '35 dk',
      difficulty: 'Orta',
      image: 'https://readdy.ai/api/search-image?query=oven%20baked%20chicken%20breast%20with%20colorful%20roasted%20vegetables%20bell%20peppers%20zucchini%20carrots%20cherry%20tomatoes%20herbs%20on%20elegant%20white%20plate%20restaurant%20quality%20professional%20food%20photography%20natural%20lighting%20high%20resolution%20clean%20background&width=800&height=600&seq=recipe-baked-chicken-v1&orientation=landscape',
      slug: 'firinda-sebzeli-tavuk',
    },
    {
      title: 'Chia Puding',
      description: 'Omega-3 ve lif açısından zengin, sağlıklı bir tatlı alternatifi veya kahvaltı seçeneği.',
      category: 'Tatlı',
      calories: '250',
      time: '5 dk + 4 saat',
      difficulty: 'Çok Kolay',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20chia%20seed%20pudding%20in%20glass%20jar%20topped%20with%20fresh%20berries%20mango%20slices%20coconut%20flakes%20almonds%20arranged%20artistically%20bright%20natural%20light%20professional%20food%20photography%20high%20resolution%20clean%20background&width=800&height=600&seq=recipe-chia-pudding-v1&orientation=landscape',
      slug: 'chia-puding',
    },
    {
      title: 'Ton Balıklı Salata',
      description: 'Yüksek protein ve omega-3 içeriği ile doyurucu ve besleyici bir öğle yemeği.',
      category: 'Öğle Yemeği',
      calories: '300',
      time: '15 dk',
      difficulty: 'Kolay',
      image: 'https://readdy.ai/api/search-image?query=fresh%20tuna%20salad%20bowl%20with%20mixed%20greens%20cherry%20tomatoes%20cucumber%20olives%20red%20onion%20lemon%20wedges%20in%20white%20bowl%20professional%20food%20photography%20natural%20lighting%20high%20resolution%20clean%20background&width=800&height=600&seq=recipe-tuna-salad-v1&orientation=landscape',
      slug: 'ton-balikli-salata',
    },
    {
      title: 'Sebzeli Omlet',
      description: 'Protein ve vitamin açısından zengin, pratik ve lezzetli bir kahvaltı klasiği.',
      category: 'Kahvaltı',
      calories: '270',
      time: '12 dk',
      difficulty: 'Kolay',
      image: 'https://readdy.ai/api/search-image?query=fluffy%20vegetable%20omelet%20with%20colorful%20bell%20peppers%20mushrooms%20spinach%20tomatoes%20cheese%20on%20white%20plate%20fresh%20herbs%20garnish%20professional%20food%20photography%20natural%20lighting%20high%20resolution%20clean%20background&width=800&height=600&seq=recipe-veggie-omelet-v1&orientation=landscape',
      slug: 'sebzeli-omlet',
    },
    {
      title: 'Falafel Bowl',
      description: 'Vejetaryen protein kaynağı, lif ve vitamin açısından zengin, doyurucu bir öğün.',
      category: 'Öğle Yemeği',
      calories: '380',
      time: '30 dk',
      difficulty: 'Orta',
      image: 'https://readdy.ai/api/search-image?query=colorful%20falafel%20bowl%20with%20crispy%20falafel%20balls%20hummus%20fresh%20vegetables%20quinoa%20tahini%20sauce%20in%20modern%20bowl%20professional%20food%20photography%20natural%20lighting%20high%20resolution%20clean%20background&width=800&height=600&seq=recipe-falafel-bowl-v1&orientation=landscape',
      slug: 'falafel-bowl',
    },
    {
      title: 'Somon Poke Bowl',
      description: 'Hawaii mutfağından ilham alan, taze somon ve sebzelerle hazırlanan besleyici bir öğün.',
      category: 'Öğle Yemeği',
      calories: '450',
      time: '25 dk',
      difficulty: 'Orta',
      image: 'https://readdy.ai/api/search-image?query=fresh%20salmon%20poke%20bowl%20with%20sushi%20rice%20edamame%20avocado%20cucumber%20seaweed%20sesame%20seeds%20in%20ceramic%20bowl%20Japanese%20cuisine%20professional%20food%20photography%20natural%20lighting%20high%20resolution%20clean%20background&width=800&height=600&seq=recipe-poke-bowl-v2&orientation=landscape',
      slug: 'somon-poke-bowl',
    },
    {
      title: 'Yeşil Detoks Smoothie',
      description: 'Antioksidan ve vitamin açısından zengin, vücudu arındıran sağlıklı bir içecek.',
      category: 'İçecek',
      calories: '180',
      time: '5 dk',
      difficulty: 'Çok Kolay',
      image: 'https://readdy.ai/api/search-image?query=vibrant%20green%20detox%20smoothie%20in%20glass%20with%20spinach%20kale%20banana%20apple%20spirulina%20topped%20with%20chia%20seeds%20on%20marble%20surface%20bright%20natural%20light%20professional%20food%20photography%20high%20resolution%20clean%20background&width=800&height=600&seq=recipe-green-smoothie-v2&orientation=landscape',
      slug: 'yesil-detoks-smoothie',
    },
    {
      title: 'Türk Kahvaltı Tabağı',
      description: 'Geleneksel Türk kahvaltısının sağlıklı versiyonu, dengeli ve doyurucu.',
      category: 'Kahvaltı',
      calories: '480',
      time: '20 dk',
      difficulty: 'Kolay',
      image: 'https://readdy.ai/api/search-image?query=traditional%20Turkish%20breakfast%20spread%20with%20white%20cheese%20olives%20tomatoes%20cucumbers%20eggs%20honey%20tahini%20on%20elegant%20wooden%20board%20bright%20morning%20light%20professional%20food%20photography%20high%20resolution%20clean%20background&width=800&height=600&seq=recipe-turkish-breakfast-v2&orientation=landscape',
      slug: 'turk-kahvalti-tabagi',
    },
    {
      title: 'Kinoa Köfte',
      description: 'Glutensiz ve protein açısından zengin, modern ve sağlıklı bir ana yemek alternatifi.',
      category: 'Akşam Yemeği',
      calories: '330',
      time: '35 dk',
      difficulty: 'Orta',
      image: 'https://readdy.ai/api/search-image?query=golden%20quinoa%20patties%20with%20herbs%20served%20with%20yogurt%20sauce%20fresh%20salad%20on%20white%20plate%20modern%20healthy%20cuisine%20professional%20food%20photography%20natural%20lighting%20high%20resolution%20clean%20background&width=800&height=600&seq=recipe-quinoa-patties-v2&orientation=landscape',
      slug: 'kinoa-kofte',
    },
    {
      title: 'Akdeniz Salatası',
      description: 'Akdeniz diyetinin temel taşı, zeytinyağı ve taze sebzelerle hazırlanan klasik salata.',
      category: 'Öğle Yemeği',
      calories: '280',
      time: '15 dk',
      difficulty: 'Çok Kolay',
      image: 'https://readdy.ai/api/search-image?query=Mediterranean%20salad%20with%20fresh%20tomatoes%20cucumbers%20red%20onions%20feta%20cheese%20olives%20olive%20oil%20in%20white%20bowl%20Greek%20cuisine%20professional%20food%20photography%20natural%20lighting%20high%20resolution%20clean%20background&width=800&height=600&seq=recipe-mediterranean-salad-v2&orientation=landscape',
      slug: 'akdeniz-salatasi',
    },
    {
      title: 'Enerji Topları',
      description: 'Kuruyemiş ve hurma ile hazırlanan, doğal şekerli ve tok tutan sağlıklı atıştırmalık.',
      category: 'Atıştırmalık',
      calories: '150',
      time: '10 dk',
      difficulty: 'Çok Kolay',
      image: 'https://readdy.ai/api/search-image?query=healthy%20energy%20balls%20made%20with%20dates%20nuts%20cocoa%20powder%20coconut%20flakes%20arranged%20on%20white%20plate%20natural%20snack%20professional%20food%20photography%20bright%20lighting%20high%20resolution%20clean%20background&width=800&height=600&seq=recipe-energy-balls-v2&orientation=landscape',
      slug: 'enerji-toplari',
    },
  ];

  const faqData = [
    {
      question: 'Tariflerdeki malzemeleri değiştirebilir miyim?',
      answer: 'Evet, alerjileriniz veya tercihlerinize göre malzemeleri değiştirebilirsiniz. Ancak besin değerleri değişebilir, bu nedenle önemli değişiklikler için diyetisyeninize danışmanız önerilir.',
    },
    {
      question: 'Tarifleri diyabet hastaları kullanabilir mi?',
      answer: 'Çoğu tarif diyabet hastaları için uygundur, ancak porsiyon kontrolü ve kan şekeri takibi önemlidir. Kişiye özel öneriler için mutlaka diyetisyeninize danışın.',
    },
    {
      question: 'Tarifleri önceden hazırlayıp saklayabilir miyim?',
      answer: 'Evet, çoğu tarif 2-3 gün önceden hazırlanıp buzdolabında saklanabilir. Ancak en taze haliyle tüketmek besin değeri açısından daha iyidir.',
    },
    {
      question: 'Kişiye özel tarif hazırlıyor musunuz?',
      answer: 'Evet, danışanlarıma kişiye özel beslenme programları kapsamında özel tarifler hazırlıyorum. Randevu almak için iletişim sayfamızdan ulaşabilirsiniz.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-emerald-50/30">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold font-serif text-gray-900 mb-6">
            Sağlıklı <span className="text-emerald-600">Tarifler</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lezzetli, besleyici ve kolay hazırlanabilir tariflerle sağlıklı beslenme alışkanlığı kazanın
          </p>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <Link
                key={index}
                to={`/recipes/${recipe.slug}`}
                className="group"
              >
                <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-emerald-600 rounded-full text-sm font-medium">
                        {recipe.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3 text-white text-sm">
                        <div className="flex items-center gap-1">
                          <i className="ri-fire-line"></i>
                          <span>{recipe.calories}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <i className="ri-time-line"></i>
                          <span>{recipe.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <i className="ri-star-line"></i>
                          <span>{recipe.difficulty}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {recipe.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2 flex-1">
                      {recipe.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-emerald-600 font-medium group-hover:gap-4 transition-all">
                      Tarifi Gör
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

export default RecipesPage;