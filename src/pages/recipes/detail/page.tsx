import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const RecipeDetailPage = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const recipesData: any = {
    'protein-pancake': {
      title: 'Protein Pancake',
      category: 'Kahvaltı',
      calories: '280',
      time: '15 dk',
      servings: '2 kişilik',
      difficulty: 'Kolay',
      image: 'https://readdy.ai/api/search-image?query=stack%20of%20fluffy%20protein%20pancakes%20topped%20with%20fresh%20blueberries%20strawberries%20drizzled%20honey%20on%20elegant%20white%20ceramic%20plate%20natural%20morning%20sunlight%20bright%20airy%20kitchen%20setting%20food%20photography%20professional%20styling%20high%20resolution%20clean%20minimalist%20background&width=1200&height=800&seq=recipe-pancake-hero-v2&orientation=landscape',
      description: 'Yüksek protein içeriği ile tok tutan, lezzetli ve sağlıklı bir kahvaltı alternatifi. Spor yapanlar ve kilo kontrolü için ideal.',
      ingredients: [
        '1 adet yumurta',
        '2 yemek kaşığı yulaf unu',
        '1 ölçek protein tozu (vanilya)',
        '50 ml süt (badem sütü)',
        '1 çay kaşığı kabartma tozu',
        'Taze meyveler (süsleme için)',
        '1 tatlı kaşığı bal',
      ],
      instructions: [
        'Tüm malzemeleri bir kapta iyice karıştırın ve pürüzsüz bir hamur elde edin.',
        'Yapışmaz tavayı orta ateşte ısıtın.',
        'Hamurdan kepçe yardımıyla tavaya dökün ve yuvarlak şekil verin.',
        'Alt tarafı kızarınca çevirin ve diğer tarafını da pişirin.',
        'Taze meyveler ve bal ile servis yapın.',
      ],
      nutrition: {
        calories: '280',
        protein: '24g',
        carbs: '32g',
        fat: '6g',
        fiber: '4g',
      },
      tips: [
        'Protein tozu yerine 2 yumurta akı kullanabilirsiniz.',
        'Yulaf unu yerine tam buğday unu tercih edebilirsiniz.',
        'Hamuru 5 dakika dinlendirirseniz daha güzel kabarır.',
      ],
    },
    'quinoa-salata': {
      title: 'Quinoa Salata',
      category: 'Öğle Yemeği',
      calories: '320',
      time: '20 dk',
      servings: '2 kişilik',
      difficulty: 'Kolay',
      image: 'https://readdy.ai/api/search-image?query=vibrant%20quinoa%20salad%20bowl%20with%20colorful%20fresh%20vegetables%20cherry%20tomatoes%20cucumber%20avocado%20slices%20chickpeas%20crumbled%20feta%20cheese%20herbs%20in%20modern%20ceramic%20bowl%20natural%20daylight%20food%20photography%20professional%20styling%20high%20resolution%20clean%20background&width=1200&height=800&seq=recipe-quinoa-hero-v2&orientation=landscape',
      description: 'Protein, lif ve vitamin açısından zengin, doyurucu ve lezzetli bir öğle yemeği seçeneği.',
      ingredients: [
        '1 su bardağı kinoa',
        '1 adet salatalık',
        '2 adet domates',
        '1 adet avokado',
        '100g nohut (haşlanmış)',
        '50g beyaz peynir',
        'Maydanoz',
        'Limon suyu',
        'Zeytinyağı',
      ],
      instructions: [
        'Kinoayı bol suda yıkayın ve 2 su bardağı su ile haşlayın.',
        'Sebzeleri küp küp doğrayın.',
        'Haşlanan kinoayı süzün ve soğumaya bırakın.',
        'Tüm malzemeleri bir kasede karıştırın.',
        'Limon suyu, zeytinyağı, tuz ve karabiber ile tatlandırın.',
      ],
      nutrition: {
        calories: '320',
        protein: '14g',
        carbs: '42g',
        fat: '12g',
        fiber: '8g',
      },
      tips: [
        'Kinoayı önceden haşlayıp buzdolabında saklayabilirsiniz.',
        'Tavuk göğsü ekleyerek protein miktarını artırabilirsiniz.',
        'Soğuk servis yapın, daha lezzetli olur.',
      ],
    },
    'izgara-somon': {
      title: 'Izgara Somon',
      category: 'Akşam Yemeği',
      calories: '380',
      time: '25 dk',
      servings: '2 kişilik',
      difficulty: 'Orta',
      image: 'https://readdy.ai/api/search-image?query=perfectly%20grilled%20salmon%20fillet%20with%20golden%20crispy%20skin%20served%20with%20steamed%20asparagus%20broccoli%20lemon%20wedges%20fresh%20dill%20on%20elegant%20white%20plate%20restaurant%20quality%20food%20photography%20natural%20lighting%20high%20resolution%20clean%20background&width=1200&height=800&seq=recipe-salmon-hero-v2&orientation=landscape',
      description: 'Omega-3 açısından zengin, kalp sağlığını destekleyen ve protein değeri yüksek bir akşam yemeği.',
      ingredients: [
        '2 dilim somon fileto (150g)',
        '1 demet kuşkonmaz',
        '1 adet brokoli',
        '1 adet limon',
        'Taze dereotu',
        'Zeytinyağı',
        'Tuz, karabiber',
      ],
      instructions: [
        'Somon filetolarını tuz, karabiber ve limon suyu ile marine edin.',
        'Sebzeleri buharda pişirin veya hafifçe haşlayın.',
        'Izgarayı veya tavayı ısıtın.',
        'Somon filetolarını her iki tarafını 4-5 dakika pişirin.',
        'Buharda pişmiş sebzelerle servis yapın.',
      ],
      nutrition: {
        calories: '380',
        protein: '32g',
        carbs: '12g',
        fat: '24g',
        fiber: '5g',
      },
      tips: [
        'Somon derisini çıkarmadan pişirin, daha lezzetli olur.',
        'Aşırı pişirmemeye dikkat edin, içi hafif pembe kalmalı.',
        'Taze dereotu ve limon ile servis yapın.',
      ],
    },
    'yulafli-smoothie-bowl': {
      title: 'Yulaf Smoothie Bowl',
      category: 'Kahvaltı',
      calories: '340',
      time: '10 dk',
      servings: '1 kişilik',
      difficulty: 'Çok Kolay',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20smoothie%20bowl%20with%20oats%20topped%20with%20fresh%20berries%20banana%20slices%20chia%20seeds%20granola%20coconut%20flakes%20in%20ceramic%20bowl%20bright%20morning%20light%20food%20photography%20professional%20styling%20high%20resolution%20clean%20background&width=1200&height=800&seq=recipe-smoothie-bowl-v2&orientation=landscape',
      description: 'Enerji dolu bir güne başlamak için ideal, lif ve antioksidan açısından zengin kahvaltı.',
      ingredients: [
        '1 adet donmuş muz',
        '100g karışık meyveler (çilek, yaban mersini)',
        '3 yemek kaşığı yulaf',
        '150 ml süt (badem sütü)',
        '1 yemek kaşığı chia tohumu',
        'Taze meyveler (üzeri için)',
        '1 tatlı kaşığı bal',
      ],
      instructions: [
        'Donmuş muz, karışık meyveler, yulaf ve sütü blenderda karıştırın.',
        'Kıvam çok sulu olmamalı, kaşıkla yenebilecek kıvamda olmalı.',
        'Kasede servis yapın.',
        'Üzerine taze meyveler, chia tohumu ve bal ekleyin.',
        'Hemen servis edin.',
      ],
      nutrition: {
        calories: '340',
        protein: '12g',
        carbs: '58g',
        fat: '8g',
        fiber: '10g',
      },
      tips: [
        'Muz mutlaka donmuş olmalı, kıvam için önemli.',
        'Protein tozu ekleyerek protein değerini artırabilirsiniz.',
        'Üzeri için granola, fındık veya badem ekleyebilirsiniz.',
      ],
    },
    'mercimek-kofte': {
      title: 'Mercimek Köfte',
      category: 'Öğle Yemeği',
      calories: '290',
      time: '30 dk',
      servings: '4 kişilik',
      difficulty: 'Orta',
      image: 'https://readdy.ai/api/search-image?query=traditional%20red%20lentil%20kofte%20balls%20arranged%20on%20white%20plate%20with%20fresh%20lettuce%20leaves%20lemon%20wedges%20parsley%20garnish%20Turkish%20cuisine%20food%20photography%20natural%20lighting%20high%20resolution%20clean%20background&width=1200&height=800&seq=recipe-lentil-kofte-v2&orientation=landscape',
      description: 'Geleneksel lezzetlerin sağlıklı versiyonu, protein ve lif açısından zengin, vejetaryen dostu.',
      ingredients: [
        '1 su bardağı kırmızı mercimek',
        '1 su bardağı ince bulgur',
        '1 adet soğan',
        '2 yemek kaşığı salça',
        'Maydanoz, yeşil soğan',
        'Baharatlar (kimyon, pul biber)',
        'Zeytinyağı',
      ],
      instructions: [
        'Mercimeği haşlayın ve ezin.',
        'Bulguru sıcak suyla ıslatın ve şişmesini bekleyin.',
        'Soğanı kavurun, salça ekleyin.',
        'Tüm malzemeleri yoğurun ve köfte şekli verin.',
        'Marul yaprakları ile servis yapın.',
      ],
      nutrition: {
        calories: '290',
        protein: '16g',
        carbs: '48g',
        fat: '4g',
        fiber: '12g',
      },
      tips: [
        'Bulgur çok ıslak olmamalı, tam kıvamında olmalı.',
        'Yoğururken ellerinizi ıslatın, yapışmaz.',
        'Buzdolabında dinlendirirseniz daha kolay şekil alır.',
      ],
    },
    'tavuklu-wrap': {
      title: 'Tavuklu Wrap',
      category: 'Öğle Yemeği',
      calories: '420',
      time: '20 dk',
      servings: '2 kişilik',
      difficulty: 'Kolay',
      image: 'https://readdy.ai/api/search-image?query=healthy%20chicken%20wrap%20with%20grilled%20chicken%20breast%20fresh%20vegetables%20lettuce%20tomatoes%20avocado%20in%20whole%20wheat%20tortilla%20cut%20in%20half%20on%20wooden%20board%20food%20photography%20natural%20lighting%20high%20resolution%20clean%20background&width=1200&height=800&seq=recipe-chicken-wrap-v2&orientation=landscape',
      description: 'Pratik, doyurucu ve dengeli bir öğle yemeği alternatifi, yüksek protein içerikli.',
      ingredients: [
        '2 adet tam buğday tortilla',
        '200g tavuk göğsü',
        '1 adet domates',
        '1 adet salatalık',
        'Marul yaprakları',
        '2 yemek kaşığı yoğurt',
        'Baharatlar',
      ],
      instructions: [
        'Tavuk göğsünü baharatlarla marine edin ve ızgara yapın.',
        'Sebzeleri ince dilimleyin.',
        'Tortillayı hafifçe ısıtın.',
        'Yoğurt, sebzeler ve tavuğu tortilla üzerine yerleştirin.',
        'Sıkıca sarın ve ikiye kesin.',
      ],
      nutrition: {
        calories: '420',
        protein: '38g',
        carbs: '42g',
        fat: '10g',
        fiber: '6g',
      },
      tips: [
        'Tavuğu önceden hazırlayıp buzdolabında saklayabilirsiniz.',
        'Avokado ekleyerek sağlıklı yağ miktarını artırabilirsiniz.',
        'Soğuk veya sıcak servis edebilirsiniz.',
      ],
    },
  };

  const recipe = recipesData[slug || ''] || recipesData['protein-pancake'];

  const faqData = [
    {
      question: 'Bu tarifi diyabet hastaları tüketebilir mi?',
      answer: 'Evet, ancak porsiyon kontrolü önemlidir. Diyabet hastalarının kan şekeri takibi yapması ve diyetisyenine danışması önerilir.',
    },
    {
      question: 'Tarifi vegan yapmak mümkün mü?',
      answer: 'Evet, hayvansal ürünleri bitkisel alternatiflerle değiştirebilirsiniz. Örneğin süt yerine badem sütü, yumurta yerine chia tohumu kullanabilirsiniz.',
    },
    {
      question: 'Kaç gün önceden hazırlayabilirim?',
      answer: 'Çoğu tarif 2-3 gün önceden hazırlanıp buzdolabında saklanabilir. Ancak en taze haliyle tüketmek besin değeri açısından daha iyidir.',
    },
    {
      question: 'Kalori miktarını nasıl azaltabilirim?',
      answer: 'Porsiyon kontrolü yapabilir, yağ miktarını azaltabilir veya daha düşük kalorili alternatifler kullanabilirsiniz.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-emerald-50/30">
      <Navbar />
      
      {/* Hero with Parallax */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow">
                <i className="ri-restaurant-line"></i>
                {recipe.category}
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight">
                {recipe.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {recipe.description}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="relative group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                      <i className="ri-fire-line text-3xl text-white"></i>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Kalori</div>
                    <div className="text-3xl font-bold text-gray-900">{recipe.calories}</div>
                  </div>
                </div>
                <div className="relative group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                      <i className="ri-time-line text-3xl text-white"></i>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Süre</div>
                    <div className="text-3xl font-bold text-gray-900">{recipe.time}</div>
                  </div>
                </div>
                <div className="relative group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                      <i className="ri-user-line text-3xl text-white"></i>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Porsiyon</div>
                    <div className="text-3xl font-bold text-gray-900">{recipe.servings}</div>
                  </div>
                </div>
                <div className="relative group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                      <i className="ri-star-line text-3xl text-white"></i>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Zorluk</div>
                    <div className="text-3xl font-bold text-gray-900">{recipe.difficulty}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Ingredients */}
              <div className="relative group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-10 blur transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-lg">
                      <i className="ri-shopping-basket-line text-3xl text-white"></i>
                    </div>
                    <h2 className="text-4xl font-bold font-serif text-gray-900">Malzemeler</h2>
                  </div>
                  <ul className="space-y-4">
                    {recipe.ingredients.map((ingredient: string, index: number) => (
                      <li key={index} className="flex items-start gap-4 group/item">
                        <div className="w-8 h-8 flex items-center justify-center bg-emerald-100 rounded-xl flex-shrink-0 mt-1 group-hover/item:bg-emerald-600 group-hover/item:scale-110 transition-all">
                          <i className="ri-check-line text-emerald-600 group-hover/item:text-white text-lg transition-colors"></i>
                        </div>
                        <span className="text-lg text-gray-700 group-hover/item:text-gray-900 transition-colors">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Instructions */}
              <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-10 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-lg">
                    <i className="ri-file-list-line text-3xl text-white"></i>
                  </div>
                  <h2 className="text-4xl font-bold font-serif text-gray-900">Hazırlanışı</h2>
                </div>
                <ol className="space-y-8">
                  {recipe.instructions.map((instruction: string, index: number) => (
                    <li key={index} className="flex gap-6 group">
                      <div className="relative">
                        <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl font-bold text-xl flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
                          {index + 1}
                        </div>
                        {index < recipe.instructions.length - 1 && (
                          <div className="absolute top-14 left-1/2 w-0.5 h-8 bg-gradient-to-b from-emerald-300 to-transparent"></div>
                        )}
                      </div>
                      <p className="text-lg text-gray-700 pt-3 leading-relaxed group-hover:text-gray-900 transition-colors">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tips */}
              <div className="relative group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-10 blur transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl shadow-lg">
                      <i className="ri-lightbulb-line text-3xl text-white"></i>
                    </div>
                    <h2 className="text-4xl font-bold font-serif text-gray-900">İpuçları</h2>
                  </div>
                  <ul className="space-y-4">
                    {recipe.tips.map((tip: string, index: number) => (
                      <li key={index} className="flex items-start gap-4 group/item">
                        <div className="w-8 h-8 flex items-center justify-center bg-yellow-100 rounded-xl flex-shrink-0 mt-1 group-hover/item:bg-yellow-400 group-hover/item:scale-110 transition-all">
                          <i className="ri-arrow-right-s-line text-yellow-600 group-hover/item:text-white text-xl transition-colors"></i>
                        </div>
                        <span className="text-lg text-gray-700 group-hover/item:text-gray-900 transition-colors">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Nutrition */}
              <div className="relative group bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl">
                      <i className="ri-heart-pulse-line text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold">Besin Değerleri</h3>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-white/20 group/item">
                      <span className="text-lg">Kalori</span>
                      <span className="text-2xl font-bold group-hover/item:scale-110 transition-transform">{recipe.nutrition.calories}</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/20 group/item">
                      <span className="text-lg">Protein</span>
                      <span className="text-2xl font-bold group-hover/item:scale-110 transition-transform">{recipe.nutrition.protein}</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/20 group/item">
                      <span className="text-lg">Karbonhidrat</span>
                      <span className="text-2xl font-bold group-hover/item:scale-110 transition-transform">{recipe.nutrition.carbs}</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/20 group/item">
                      <span className="text-lg">Yağ</span>
                      <span className="text-2xl font-bold group-hover/item:scale-110 transition-transform">{recipe.nutrition.fat}</span>
                    </div>
                    <div className="flex items-center justify-between group/item">
                      <span className="text-lg">Lif</span>
                      <span className="text-2xl font-bold group-hover/item:scale-110 transition-transform">{recipe.nutrition.fiber}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="relative group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                <div className="relative">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                    <i className="ri-calendar-check-line text-3xl text-emerald-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Kişiye Özel Beslenme Planı
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Size özel hazırlanmış tarifler ve beslenme programı için randevu alın.
                  </p>
                  <Link
                    to="/iletisim"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-2xl text-center hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap"
                  >
                    Randevu Al
                  </Link>
                </div>
              </div>

              {/* Share */}
              <div className="relative group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Tarifi Paylaş
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all hover:scale-105">
                      <i className="ri-facebook-fill text-xl"></i>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-sky-50 text-sky-600 hover:bg-sky-600 hover:text-white transition-all hover:scale-105">
                      <i className="ri-twitter-fill text-xl"></i>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-all hover:scale-105">
                      <i className="ri-whatsapp-fill text-xl"></i>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all hover:scale-105">
                      <i className="ri-pinterest-fill text-xl"></i>
                    </button>
                  </div>
                </div>
              </div>
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
            <p className="text-xl text-gray-600">Tarifler hakkında merak edilenler</p>
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

export default RecipeDetailPage;