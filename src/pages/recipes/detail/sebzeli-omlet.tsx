import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const SebzeliOmletDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const recipe = {
    title: 'Sebzeli Omlet',
    category: 'Kahvaltı',
    calories: '280',
    time: '15 dk',
    servings: '1 kişilik',
    difficulty: 'Kolay',
    image: 'https://readdy.ai/api/search-image?query=fluffy%20vegetable%20omelette%20with%20colorful%20bell%20peppers%20mushrooms%20tomatoes%20spinach%20on%20white%20plate%20breakfast%20food%20photography%20natural%20lighting%20professional%20styling%20high%20resolution&width=1200&height=800&seq=recipe-veggie-omlet-hero-v2&orientation=landscape',
    description: 'Protein ve vitamin açısından zengin, doyurucu ve lezzetli bir kahvaltı seçeneği. Renkli sebzelerle hazırlanan sağlıklı omlet.',
    ingredients: [
      '2 adet yumurta',
      '1/2 adet kırmızı biber',
      '1/2 adet yeşil biber',
      '3-4 adet mantar',
      '1 avuç ıspanak',
      '1/4 soğan',
      '1 yemek kaşığı zeytinyağı',
      'Tuz, karabiber',
      'Kekik (isteğe bağlı)',
    ],
    instructions: [
      'Sebzeleri küçük küpler halinde doğrayın.',
      'Tavada zeytinyağını ısıtın ve soğanı kavurun.',
      'Biberleri ve mantarları ekleyip 2-3 dakika pişirin.',
      'Ispanağı ekleyin ve hafif solana kadar karıştırın.',
      'Yumurtaları çırpın, tuz ve baharatları ekleyin.',
      'Yumurtaları sebzelerin üzerine dökün ve pişirin.',
      'Omletin altı tutunca yarısını katlayarak servis edin.',
    ],
    nutrition: {
      calories: '280',
      protein: '16g',
      carbs: '12g',
      fat: '18g',
      fiber: '3g',
    },
    tips: [
      'Yumurtaları çırparken 1 yemek kaşığı süt ekleyebilirsiniz, daha yumuşak olur.',
      'Sebzeleri çok ince doğrayın, daha homojen pişer.',
      'Orta ateşte pişirin, yüksek ateş yumurtayı sertleştirir.',
    ],
  };

  const faqData = [
    {
      question: 'Omlete peynir ekleyebilir miyim?',
      answer: 'Evet, az yağlı beyaz peynir veya lor peyniri ekleyebilirsiniz. Ancak kalori değeri artacaktır.',
    },
    {
      question: 'Hangi sebzeleri kullanabilirim?',
      answer: 'Domates, kabak, brokoli, karnabahar gibi tüm sebzeleri kullanabilirsiniz. Tercihlerinize göre değiştirebilirsiniz.',
    },
    {
      question: 'Vegan versiyonu yapılabilir mi?',
      answer: 'Evet, yumurta yerine tofu veya nohut unu karışımı kullanabilirsiniz.',
    },
    {
      question: 'Omlet kaç kaloridir?',
      answer: 'Bu tarif yaklaşık 280 kaloridir. Kullandığınız malzemelere göre değişebilir.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-emerald-50/30">
      <Navbar />
      
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
            <div className="lg:col-span-2 space-y-12">
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

            <div className="space-y-8">
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
                    to="/contact"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-2xl text-center hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap"
                  >
                    Randevu Al
                  </Link>
                </div>
              </div>

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

export default SebzeliOmletDetail;