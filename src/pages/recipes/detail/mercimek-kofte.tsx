import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const MercimekKofteDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const recipe = {
    title: 'Mercimek Köfte',
    category: 'Ana Yemek',
    calories: '280',
    time: '45 dk',
    servings: '4 kişilik',
    difficulty: 'Orta',
    image: 'https://readdy.ai/api/search-image?query=Turkish%20red%20lentil%20kofte%20on%20a%20white%20plate%20with%20lettuce%20leaves%20and%20lemon%2C%20traditional%20Turkish%20food%2C%20professional%20food%20photography%2C%20appetizing%20presentation%2C%20fresh%20herbs%2C%20healthy%20vegetarian%20meal&width=800&height=600&seq=mercimek-kofte-hero&orientation=landscape',
    description: 'Türk mutfağının vazgeçilmez lezzetlerinden mercimek köfte, protein açısından zengin, vejetaryen dostu ve çok lezzetli bir alternatif. Bitkisel protein kaynağı olarak ideal bir seçenek.',
    ingredients: [
      '1 su bardağı kırmızı mercimek',
      '1 su bardağı ince bulgur',
      '1 adet soğan (rendelenmiş)',
      '2 yemek kaşığı salça',
      '3 yemek kaşığı zeytinyağı',
      '1 çay kaşığı pul biber',
      '1 çay kaşığı kimyon',
      'Tuz, karabiber',
      'Taze nane, maydanoz',
      'Servis için: marul yaprakları, limon',
    ],
    instructions: [
      'Kırmızı mercimeği yıkayıp 2 su bardağı su ile haşlayın.',
      'Mercimek yumuşayınca suyunu süzün ve ezin.',
      'Haşlanmış mercimeğe ince bulguru ekleyin.',
      '15 dakika şişmesi için bekletin.',
      'Rendelenmiş soğan, salça, zeytinyağı ve baharatları ekleyin.',
      'Karışımı iyice yoğurun.',
      'Ceviz büyüklüğünde parçalar alıp köfte şekli verin.',
      'Marul yaprakları üzerine dizin, limon ve taze yeşilliklerle servis edin.',
    ],
    nutrition: {
      calories: '280',
      protein: '14g',
      carbs: '45g',
      fat: '6g',
      fiber: '12g',
    },
    tips: [
      'Bulgur çok ince olmalı, aksi takdirde köfte şekil almaz.',
      'Karışım çok kuru olursa biraz sıcak su ekleyebilirsiniz.',
      'Soğuk servis yapılır, buzdolabında dinlendirmek lezzeti artırır.',
      'Nar ekşisi ile servis etmek geleneksel lezzeti tamamlar.',
    ],
  };

  const faqData = [
    {
      question: 'Mercimek köfte vejetaryen mi?',
      answer: 'Evet, mercimek köfte tamamen bitkisel malzemelerden yapılır ve vejetaryen/vegan beslenmeye uygundur.',
    },
    {
      question: 'Mercimek köfte kaç gün saklanır?',
      answer: 'Buzdolabında kapalı kapta 3-4 gün saklanabilir. Dondurulması önerilmez çünkü kıvamı bozulabilir.',
    },
    {
      question: 'Farklı mercimek türü kullanabilir miyim?',
      answer: 'Bu tarif için kırmızı mercimek idealdir çünkü hızlı pişer ve kolay ezilir. Yeşil mercimek uygun değildir.',
    },
    {
      question: 'Bulgur yerine ne kullanabilirim?',
      answer: 'İnce bulgur yerine kuskus kullanabilirsiniz ancak geleneksel lezzet için ince bulgur tercih edilmelidir.',
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

export default MercimekKofteDetail;
