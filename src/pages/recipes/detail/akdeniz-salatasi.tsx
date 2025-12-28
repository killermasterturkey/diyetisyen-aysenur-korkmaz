import { Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

export default function AkdenizSalatasi() {
  const recipe = {
    title: 'Akdeniz Salatası',
    image: 'https://readdy.ai/api/search-image?query=Fresh%20Mediterranean%20salad%20with%20ripe%20tomatoes%20cucumbers%20red%20onions%20feta%20cheese%20kalamata%20olives%20drizzled%20with%20olive%20oil%20in%20white%20bowl%2C%20Greek%20cuisine%2C%20professional%20food%20photography%2C%20bright%20natural%20lighting%2C%20clean%20minimalist%20background%2C%20vibrant%20colors%2C%20healthy%20meal%20presentation&width=1200&height=800&seq=akdeniz-salatasi-hero&orientation=landscape',
    prepTime: '15 dakika',
    cookTime: '0 dakika',
    servings: '4 kişilik',
    difficulty: 'Çok Kolay',
    category: 'Salata',
    calories: 280,
    protein: 8,
    carbs: 18,
    fat: 20,
    description: 'Akdeniz diyetinin temel taşı, zeytinyağı ve taze sebzelerle hazırlanan klasik salata. Antioksidan ve sağlıklı yağlar açısından zengin, ferahlatıcı ve lezzetli.',
    ingredients: [
      '4 adet orta boy domates',
      '2 adet salatalık',
      '1 adet kırmızı soğan',
      '200g beyaz peynir (feta)',
      '1 su bardağı siyah zeytin',
      '1 adet yeşil biber',
      '1/2 demet maydanoz',
      '1/4 demet nane',
      '4 yemek kaşığı sızma zeytinyağı',
      '2 yemek kaşığı limon suyu',
      '1 tatlı kaşığı kekik',
      'Tuz, karabiber'
    ],
    instructions: [
      {
        step: 1,
        title: 'Sebzeleri Doğrayın',
        description: 'Domatesleri dilimleyin veya küp küp doğrayın. Salatalıkları yarım ay şeklinde kesin. Kırmızı soğanı ince dilimleyin.',
        image: 'https://readdy.ai/api/search-image?query=Chopped%20fresh%20tomatoes%20cucumbers%20and%20red%20onions%20on%20white%20cutting%20board%2C%20top%20view%2C%20professional%20food%20photography%2C%20bright%20natural%20lighting%2C%20clean%20background&width=600&height=400&seq=akdeniz-step1&orientation=landscape'
      },
      {
        step: 2,
        title: 'Diğer Malzemeleri Ekleyin',
        description: 'Yeşil biberi ince dilimleyin. Zeytinleri süzün. Beyaz peyniri küp küp doğrayın. Maydanoz ve naneyi ince kıyın.',
        image: 'https://readdy.ai/api/search-image?query=Feta%20cheese%20cubes%20olives%20and%20fresh%20herbs%20on%20white%20plate%2C%20professional%20food%20photography%2C%20bright%20lighting%2C%20clean%20background&width=600&height=400&seq=akdeniz-step2&orientation=landscape'
      },
      {
        step: 3,
        title: 'Salata Sosunu Hazırlayın',
        description: 'Küçük bir kapta zeytinyağı, limon suyu, kekik, tuz ve karabiberi karıştırın. İyice çırpın.',
        image: 'https://readdy.ai/api/search-image?query=Whisking%20olive%20oil%20and%20lemon%20juice%20dressing%20in%20small%20bowl%2C%20professional%20food%20photography%2C%20bright%20lighting%2C%20clean%20background&width=600&height=400&seq=akdeniz-step3&orientation=landscape'
      },
      {
        step: 4,
        title: 'Karıştırın ve Servis Edin',
        description: 'Tüm malzemeleri geniş bir salata kasesinde birleştirin. Sosu üzerine gezdirin ve nazikçe karıştırın. Hemen servis edin.',
        image: 'https://readdy.ai/api/search-image?query=Complete%20Mediterranean%20salad%20in%20white%20bowl%20with%20all%20ingredients%20mixed%2C%20drizzled%20with%20olive%20oil%2C%20top%20view%2C%20professional%20food%20photography%2C%20bright%20natural%20lighting&width=600&height=400&seq=akdeniz-step4&orientation=landscape'
      }
    ],
    tips: [
      'En taze ve olgun domatesleri kullanın',
      'Soğanı soğuk suda bekletirseniz acılığı azalır',
      'Servis öncesinde hazırlayın, bekletmeyin',
      'Tam buğday ekmeği ile servis edebilirsiniz'
    ]
  };

  const relatedRecipes = [
    {
      title: 'Quinoa Salata',
      image: 'https://readdy.ai/api/search-image?query=Colorful%20quinoa%20salad%20with%20vegetables%20in%20white%20bowl%2C%20professional%20food%20photography%2C%20bright%20natural%20lighting%2C%20clean%20background&width=400&height=300&seq=related-quinoa-salata-3&orientation=landscape',
      time: '20 dakika',
      calories: 320,
      link: '/tarifler/quinoa-salata'
    },
    {
      title: 'Ton Balıklı Salata',
      image: 'https://readdy.ai/api/search-image?query=Fresh%20tuna%20salad%20with%20mixed%20greens%20and%20vegetables%2C%20professional%20food%20photography%2C%20bright%20natural%20lighting%2C%20clean%20background&width=400&height=300&seq=related-ton-balikli-salata&orientation=landscape',
      time: '15 dakika',
      calories: 300,
      link: '/tarifler/ton-balikli-salata'
    },
    {
      title: 'Falafel Bowl',
      image: 'https://readdy.ai/api/search-image?query=Colorful%20falafel%20bowl%20with%20hummus%20and%20fresh%20vegetables%2C%20professional%20food%20photography%2C%20bright%20natural%20lighting%2C%20clean%20background&width=400&height=300&seq=related-falafel-bowl-2&orientation=landscape',
      time: '30 dakika',
      calories: 380,
      link: '/tarifler/falafel-bowl'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-16">
          <div className="text-white">
            <div className="inline-block px-4 py-2 bg-emerald-500 rounded-full text-sm font-medium mb-4">
              {recipe.category}
            </div>
            <h1 className="text-5xl font-bold mb-4">{recipe.title}</h1>
            <p className="text-xl text-gray-200 max-w-2xl mb-6">{recipe.description}</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <i className="ri-time-line text-xl"></i>
                <span>Hazırlık: {recipe.prepTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-fire-line text-xl"></i>
                <span>Pişirme: {recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-user-line text-xl"></i>
                <span>{recipe.servings}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-star-line text-xl"></i>
                <span>Zorluk: {recipe.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Recipe Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Nutrition Info */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Kalori', value: recipe.calories, unit: 'kcal', icon: 'ri-fire-line', color: 'from-orange-500 to-red-500' },
                { label: 'Protein', value: recipe.protein, unit: 'g', icon: 'ri-heart-pulse-line', color: 'from-red-500 to-pink-500' },
                { label: 'Karbonhidrat', value: recipe.carbs, unit: 'g', icon: 'ri-leaf-line', color: 'from-green-500 to-teal-500' },
                { label: 'Yağ', value: recipe.fat, unit: 'g', icon: 'ri-drop-line', color: 'from-yellow-500 to-orange-500' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${item.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{item.value}<span className="text-lg text-gray-500">{item.unit}</span></div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <i className="ri-shopping-basket-line text-xl text-white"></i>
                </div>
                Malzemeler
              </h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50 transition-colors duration-200 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-colors duration-200">
                      <i className="ri-check-line text-sm text-emerald-600 group-hover:text-white"></i>
                    </div>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <i className="ri-file-list-3-line text-xl text-white"></i>
                </div>
                Hazırlanışı
              </h2>
              <div className="space-y-8">
                {recipe.instructions.map((instruction, index) => (
                  <div key={index} className="group">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {instruction.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{instruction.title}</h3>
                        <div className="w-full h-64 rounded-2xl overflow-hidden mb-4 shadow-md">
                          <img 
                            src={instruction.image}
                            alt={instruction.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <p className="text-gray-600 leading-relaxed">{instruction.description}</p>
                      </div>
                    </div>
                    {index < recipe.instructions.length - 1 && (
                      <div className="ml-6 mt-6 mb-2 border-l-2 border-dashed border-gray-200 h-8"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <i className="ri-lightbulb-line text-xl text-white"></i>
                </div>
                İpuçları
              </h2>
              <ul className="space-y-3">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <i className="ri-checkbox-circle-fill text-xl text-amber-500 flex-shrink-0 mt-0.5"></i>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Share */}
            <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tarifi Paylaş</h3>
              <div className="flex gap-3">
                <button className="flex-1 h-12 rounded-xl bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2 transition-colors duration-200 whitespace-nowrap">
                  <i className="ri-facebook-fill text-xl"></i>
                </button>
                <button className="flex-1 h-12 rounded-xl bg-sky-500 hover:bg-sky-600 text-white flex items-center justify-center gap-2 transition-colors duration-200 whitespace-nowrap">
                  <i className="ri-twitter-fill text-xl"></i>
                </button>
                <button className="flex-1 h-12 rounded-xl bg-pink-500 hover:bg-pink-600 text-white flex items-center justify-center gap-2 transition-colors duration-200 whitespace-nowrap">
                  <i className="ri-instagram-fill text-xl"></i>
                </button>
                <button className="flex-1 h-12 rounded-xl bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 transition-colors duration-200 whitespace-nowrap">
                  <i className="ri-whatsapp-fill text-xl"></i>
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-white shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <i className="ri-calendar-check-line text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-3">Kişisel Beslenme Planı</h3>
              <p className="text-emerald-50 mb-6">Size özel hazırlanmış beslenme programı ve yemek tarifleri için randevu alın.</p>
              <Link 
                to="/iletisim"
                className="block w-full h-12 rounded-xl bg-white text-emerald-600 font-semibold flex items-center justify-center gap-2 hover:bg-emerald-50 transition-colors duration-200 whitespace-nowrap"
              >
                Randevu Al
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Recipes */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Benzer Tarifler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedRecipes.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-white/90">
                      <span className="flex items-center gap-1">
                        <i className="ri-time-line"></i>
                        {item.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="ri-fire-line"></i>
                        {item.calories} kcal
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