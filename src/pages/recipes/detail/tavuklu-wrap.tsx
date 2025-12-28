import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function TavukluWrapDetail() {
  const recipe = {
    title: 'Tavuklu Wrap',
    image: 'https://readdy.ai/api/search-image?query=Grilled%20chicken%20wrap%20with%20fresh%20vegetables%20and%20sauce%2C%20healthy%20lunch%2C%20professional%20food%20photography%2C%20appetizing%20presentation%2C%20colorful%20ingredients%2C%20sliced%20and%20displayed&width=800&height=600&seq=tavuklu-wrap-hero&orientation=landscape',
    prepTime: '15 dakika',
    cookTime: '15 dakika',
    servings: '2 kişilik',
    difficulty: 'Kolay',
    category: 'Ana Yemek',
    description: 'Pratik, lezzetli ve besleyici bir öğün alternatifi. Tavuklu wrap, yüksek protein içeriği ve bol sebzesiyle dengeli bir öğün sunar. İş yerinde veya evde hızlı bir öğün için idealdir.',
    ingredients: [
      '2 adet tam buğday tortilla',
      '200g tavuk göğsü (ızgara)',
      '1 adet domates (dilimlenmiş)',
      '1 adet salatalık (dilimlenmiş)',
      '2 yaprak marul',
      '1/4 kırmızı lahana (ince kıyılmış)',
      '2 yemek kaşığı yoğurt',
      '1 yemek kaşığı zeytinyağı',
      'Tuz, karabiber, kırmızı pul biber'
    ],
    instructions: [
      {
        step: 1,
        title: 'Tavuk Hazırlığı',
        description: 'Tavuk göğsünü baharatlarla marine edin ve ızgarada veya tavada her iki tarafını 6-7 dakika pişirin. Pişen tavuğu ince dilimler halinde kesin.',
        image: 'https://readdy.ai/api/search-image?query=Grilled%20chicken%20breast%20being%20sliced%20on%20a%20cutting%20board%2C%20food%20preparation%2C%20professional%20photography%2C%20juicy%20and%20golden&width=400&height=300&seq=tavuklu-wrap-step1&orientation=landscape'
      },
      {
        step: 2,
        title: 'Sebze Hazırlığı',
        description: 'Domates, salatalık ve lahanayı yıkayıp dilimleyin. Yoğurt, zeytinyağı ve baharatları karıştırarak sos hazırlayın.',
        image: 'https://readdy.ai/api/search-image?query=Fresh%20vegetables%20being%20prepared%20for%20wrap%2C%20colorful%20ingredients%20on%20cutting%20board%2C%20professional%20food%20photography&width=400&height=300&seq=tavuklu-wrap-step2&orientation=landscape'
      },
      {
        step: 3,
        title: 'Wrap Sarma',
        description: 'Tortilla üzerine marul yapraklarını serin. Üzerine tavuk dilimleri, sebzeleri ve sosu ekleyin. Sıkıca sarın ve ikiye kesin. Hemen servis edin.',
        image: 'https://readdy.ai/api/search-image?query=Chicken%20wrap%20being%20assembled%20with%20vegetables%20and%20sauce%2C%20step%20by%20step%20preparation%2C%20professional%20food%20photography%2C%20appetizing&width=400&height=300&seq=tavuklu-wrap-step3&orientation=landscape'
      }
    ],
    nutrition: {
      calories: '380',
      protein: '32g',
      carbs: '38g',
      fat: '10g',
      fiber: '6g'
    },
    tips: [
      'Tavuğu önceden marine ederseniz daha lezzetli olur',
      'Tortillayı hafifçe ısıtırsanız daha kolay sarılır',
      'Farklı soslar deneyebilirsiniz (humus, avokado sosu)',
      'Yanında taze meyve ile servis edebilirsiniz'
    ]
  };

  const relatedRecipes = [
    {
      title: 'Falafel Bowl',
      image: 'https://readdy.ai/api/search-image?query=Falafel%20bowl%20with%20hummus%2C%20fresh%20vegetables%20and%20tahini%20sauce%2C%20healthy%20vegetarian%20meal%2C%20professional%20food%20photography%2C%20colorful%20and%20appetizing&width=400&height=300&seq=falafel-bowl-card&orientation=landscape',
      slug: 'falafel-bowl',
      time: '35 dk',
      calories: '420 kcal'
    },
    {
      title: 'Izgara Somon',
      image: 'https://readdy.ai/api/search-image?query=Grilled%20salmon%20fillet%20with%20lemon%20and%20herbs%2C%20healthy%20meal%2C%20professional%20food%20photography%2C%20appetizing%20and%20nutritious&width=400&height=300&seq=izgara-somon-card&orientation=landscape',
      slug: 'izgara-somon',
      time: '25 dk',
      calories: '320 kcal'
    },
    {
      title: 'Quinoa Salata',
      image: 'https://readdy.ai/api/search-image?query=Colorful%20quinoa%20salad%20bowl%20with%20fresh%20vegetables%2C%20healthy%20meal%2C%20professional%20food%20photography%2C%20vibrant%20and%20nutritious&width=400&height=300&seq=quinoa-salata-card&orientation=landscape',
      slug: 'quinoa-salata',
      time: '25 dk',
      calories: '320 kcal'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-amber-500 text-white rounded-full text-sm font-medium mb-4">
                {recipe.category}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{recipe.title}</h1>
              <p className="text-xl text-white/90 mb-6">{recipe.description}</p>
              <div className="flex flex-wrap gap-6 text-white">
                <div className="flex items-center gap-2">
                  <i className="ri-time-line text-2xl"></i>
                  <div>
                    <div className="text-sm opacity-80">Hazırlık</div>
                    <div className="font-semibold">{recipe.prepTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-fire-line text-2xl"></i>
                  <div>
                    <div className="text-sm opacity-80">Pişirme</div>
                    <div className="font-semibold">{recipe.cookTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-user-line text-2xl"></i>
                  <div>
                    <div className="text-sm opacity-80">Porsiyon</div>
                    <div className="font-semibold">{recipe.servings}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-star-line text-2xl"></i>
                  <div>
                    <div className="text-sm opacity-80">Zorluk</div>
                    <div className="font-semibold">{recipe.difficulty}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Recipe Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Ingredients */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <i className="ri-shopping-basket-line text-white text-2xl"></i>
                </div>
                Malzemeler
              </h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 hover:text-amber-600 transition-colors group">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-amber-500 transition-colors">
                      <i className="ri-check-line text-amber-600 text-sm group-hover:text-white"></i>
                    </div>
                    <span className="flex-1">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center">
                  <i className="ri-file-list-3-line text-white text-2xl"></i>
                </div>
                Hazırlanışı
              </h2>
              <div className="space-y-8">
                {recipe.instructions.map((instruction) => (
                  <div key={instruction.step} className="group">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                          {instruction.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{instruction.title}</h3>
                        <div className="bg-gray-50 rounded-2xl overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                          <img 
                            src={instruction.image}
                            alt={instruction.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <p className="text-gray-700 leading-relaxed">{instruction.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <i className="ri-lightbulb-line text-white text-2xl"></i>
                </div>
                Diyetisyen Notları
              </h2>
              <ul className="space-y-3">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <i className="ri-star-fill text-amber-500 text-xl mt-0.5"></i>
                    <span className="flex-1">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Nutrition Info */}
            <div className="bg-gradient-to-br from-amber-500 to-yellow-500 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 sticky top-24">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <i className="ri-heart-pulse-line text-3xl"></i>
                Besin Değerleri
              </h3>
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/30 transition-colors">
                  <div className="text-3xl font-bold mb-1">{recipe.nutrition.calories}</div>
                  <div className="text-sm opacity-90">Kalori</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/30 transition-colors">
                    <div className="text-2xl font-bold mb-1">{recipe.nutrition.protein}</div>
                    <div className="text-xs opacity-90">Protein</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/30 transition-colors">
                    <div className="text-2xl font-bold mb-1">{recipe.nutrition.carbs}</div>
                    <div className="text-xs opacity-90">Karbonhidrat</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/30 transition-colors">
                    <div className="text-2xl font-bold mb-1">{recipe.nutrition.fat}</div>
                    <div className="text-xs opacity-90">Yağ</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/30 transition-colors">
                    <div className="text-2xl font-bold mb-1">{recipe.nutrition.fiber}</div>
                    <div className="text-xs opacity-90">Lif</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <Link 
                  to="/contact"
                  className="block w-full bg-white text-amber-600 text-center py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Kişisel Plan İçin İletişime Geçin
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Recipes */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Benzer Tarifler</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedRecipes.map((relatedRecipe, index) => (
              <Link 
                key={index}
                to={`/recipes/${relatedRecipe.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={relatedRecipe.image}
                    alt={relatedRecipe.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{relatedRecipe.title}</h3>
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <span className="flex items-center gap-1">
                        <i className="ri-time-line"></i>
                        {relatedRecipe.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="ri-fire-line"></i>
                        {relatedRecipe.calories}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}