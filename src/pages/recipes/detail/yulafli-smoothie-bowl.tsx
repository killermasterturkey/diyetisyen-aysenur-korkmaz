import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function YulafliSmoothieBowlDetail() {
  const recipe = {
    title: 'Yulaflı Smoothie Bowl',
    image: 'https://readdy.ai/api/search-image?query=Colorful%20smoothie%20bowl%20with%20oats%2C%20fresh%20berries%2C%20banana%20slices%2C%20chia%20seeds%20and%20granola%20toppings%2C%20healthy%20breakfast%2C%20professional%20food%20photography%2C%20vibrant%20colors%2C%20appetizing%20presentation%2C%20overhead%20view&width=800&height=600&seq=yulafli-smoothie-bowl-hero&orientation=landscape',
    prepTime: '10 dakika',
    cookTime: '0 dakika',
    servings: '1 kişilik',
    difficulty: 'Çok Kolay',
    category: 'Kahvaltı',
    description: 'Sabahları enerjik başlamak için ideal, vitamin ve mineraller açısından zengin, tok tutan ve lezzetli bir kahvaltı alternatifi. Yulaflı smoothie bowl, sindirimi destekler ve uzun süre tok tutar.',
    ingredients: [
      '1 adet donmuş muz',
      '1/2 su bardağı yulaf',
      '1/2 su bardağı süt (badem sütü veya inek sütü)',
      '1 yemek kaşığı chia tohumu',
      '1 çay kaşığı bal',
      'Topping için: taze meyveler (çilek, yaban mersini, muz)',
      'Topping için: granola',
      'Topping için: hindistan cevizi rendesi'
    ],
    instructions: [
      {
        step: 1,
        title: 'Smoothie Hazırlığı',
        description: 'Donmuş muzu, yulaflı, sütü, chia tohumunu ve balı blenderda yoğun bir kıvam elde edene kadar karıştırın. Kıvam çok sulu olmamalı, kaşıkla yenebilecek kıvamda olmalı.',
        image: 'https://readdy.ai/api/search-image?query=Blender%20with%20frozen%20banana%2C%20oats%20and%20milk%2C%20smoothie%20preparation%2C%20kitchen%20scene%2C%20professional%20photography%2C%20healthy%20ingredients&width=400&height=300&seq=yulafli-smoothie-bowl-step1&orientation=landscape'
      },
      {
        step: 2,
        title: 'Kaseye Aktarma',
        description: 'Hazırladığınız smoothie karışımını geniş bir kaseye dökün. Yüzeyi düzleştirin.',
        image: 'https://readdy.ai/api/search-image?query=Thick%20purple%20smoothie%20being%20poured%20into%20a%20white%20bowl%2C%20food%20preparation%2C%20professional%20photography%2C%20smooth%20texture&width=400&height=300&seq=yulafli-smoothie-bowl-step2&orientation=landscape'
      },
      {
        step: 3,
        title: 'Süsleme ve Servis',
        description: 'Smoothie bowl\'un üzerine dilimlenmiş taze meyveler, granola, chia tohumu ve hindistan cevizi rendesi ile süsleyin. Hemen servis edin.',
        image: 'https://readdy.ai/api/search-image?query=Beautifully%20decorated%20smoothie%20bowl%20with%20fresh%20berries%2C%20banana%20slices%2C%20granola%20and%20coconut%20flakes%2C%20overhead%20view%2C%20professional%20food%20photography%2C%20colorful%20and%20appetizing&width=400&height=300&seq=yulafli-smoothie-bowl-step3&orientation=landscape'
      }
    ],
    nutrition: {
      calories: '380',
      protein: '12g',
      carbs: '58g',
      fat: '12g',
      fiber: '10g'
    },
    tips: [
      'Muz ne kadar donuk olursa smoothie o kadar yoğun olur',
      'Farklı meyvelerle deneyebilirsiniz (mango, çilek, yaban mersini)',
      'Protein tozu ekleyerek protein değerini artırabilirsiniz',
      'Topping seçeneklerini çeşitlendirebilirsiniz (fındık, badem, ceviz)'
    ]
  };

  const relatedRecipes = [
    {
      title: 'Chia Puding',
      image: 'https://readdy.ai/api/search-image?query=Chia%20seed%20pudding%20with%20fresh%20berries%20in%20a%20glass%20jar%2C%20healthy%20breakfast%2C%20professional%20food%20photography%2C%20layered%20and%20appetizing&width=400&height=300&seq=chia-puding-card&orientation=landscape',
      slug: 'chia-puding',
      time: '10 dk',
      calories: '220 kcal'
    },
    {
      title: 'Avokado Toast',
      image: 'https://readdy.ai/api/search-image?query=Avocado%20toast%20with%20poached%20egg%20and%20microgreens%2C%20healthy%20breakfast%2C%20professional%20food%20photography%2C%20rustic%20and%20appetizing&width=400&height=300&seq=avokado-toast-card&orientation=landscape',
      slug: 'avokado-toast',
      time: '10 dk',
      calories: '320 kcal'
    },
    {
      title: 'Sebzeli Omlet',
      image: 'https://readdy.ai/api/search-image?query=Fluffy%20vegetable%20omelet%20with%20colorful%20peppers%20and%20herbs%2C%20healthy%20breakfast%2C%20professional%20food%20photography%2C%20golden%20and%20appetizing&width=400&height=300&seq=sebzeli-omlet-card&orientation=landscape',
      slug: 'sebzeli-omlet',
      time: '15 dk',
      calories: '280 kcal'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
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
              <div className="inline-block px-4 py-2 bg-purple-500 text-white rounded-full text-sm font-medium mb-4">
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
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <i className="ri-shopping-basket-line text-white text-2xl"></i>
                </div>
                Malzemeler
              </h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 hover:text-purple-600 transition-colors group">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-purple-500 transition-colors">
                      <i className="ri-check-line text-purple-600 text-sm group-hover:text-white"></i>
                    </div>
                    <span className="flex-1">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <i className="ri-file-list-3-line text-white text-2xl"></i>
                </div>
                Hazırlanışı
              </h2>
              <div className="space-y-8">
                {recipe.instructions.map((instruction) => (
                  <div key={instruction.step} className="group">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
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
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 sticky top-24">
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
                  className="block w-full bg-white text-purple-600 text-center py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-colors"
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