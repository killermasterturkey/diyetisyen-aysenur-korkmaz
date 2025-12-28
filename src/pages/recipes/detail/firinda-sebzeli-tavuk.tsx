import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';

const FirindaSebzeliTavukDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const relatedRecipes = [
    {
      title: 'Izgara Somon',
      image: 'https://readdy.ai/api/search-image?query=perfectly%20grilled%20salmon%20fillet%20with%20golden%20crispy%20skin%20grill%20marks%20served%20with%20steamed%20asparagus%20broccoli%20lemon%20wedges%20fresh%20dill%20garnish%20on%20elegant%20white%20plate%20restaurant%20quality%20professional%20food%20photography%20natural%20lighting%20high%20resolution%20clean%20background&width=400&height=300&seq=recipe-salmon-related-v2&orientation=landscape',
      slug: 'izgara-somon',
    },
    {
      title: 'Quinoa Salata',
      image: 'https://readdy.ai/api/search-image?query=vibrant%20colorful%20quinoa%20salad%20bowl%20overflowing%20with%20fresh%20vegetables%20cherry%20tomatoes%20cucumber%20avocado%20slices%20chickpeas%20crumbled%20feta%20cheese%20fresh%20herbs%20in%20modern%20white%20ceramic%20bowl%20natural%20daylight%20professional%20food%20photography%20high%20resolution%20clean%20minimalist%20background&width=400&height=300&seq=recipe-quinoa-related-v2&orientation=landscape',
      slug: 'quinoa-salata',
    },
    {
      title: 'Tavuklu Wrap',
      image: 'https://readdy.ai/api/search-image?query=healthy%20grilled%20chicken%20wrap%20with%20fresh%20vegetables%20lettuce%20tomatoes%20avocado%20in%20whole%20wheat%20tortilla%20cut%20in%20half%20showing%20colorful%20filling%20on%20wooden%20board%20professional%20food%20photography%20natural%20lighting%20high%20resolution%20clean%20background&width=400&height=300&seq=recipe-wrap-related-v2&orientation=landscape',
      slug: 'tavuklu-wrap',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=oven%20baked%20chicken%20breast%20with%20colorful%20roasted%20vegetables%20bell%20peppers%20zucchini%20carrots%20cherry%20tomatoes%20herbs%20on%20elegant%20white%20plate%20restaurant%20quality%20professional%20food%20photography%20natural%20lighting%20high%20resolution%20clean%20background&width=1920&height=1080&seq=recipe-baked-chicken-hero-v1&orientation=landscape"
            alt="Fırında Sebzeli Tavuk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium mb-4">
              Akşam Yemeği
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Fırında Sebzeli Tavuk</h1>
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <i className="ri-time-line text-xl"></i>
                <span>35 dakika</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-fire-line text-xl"></i>
                <span>390 kalori</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-star-line text-xl"></i>
                <span>Orta</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tarif Hakkında</h2>
              <p className="text-gray-600 leading-relaxed">
                Fırında sebzeli tavuk, dengeli makro besin oranları ile ideal bir akşam yemeği seçeneğidir. 
                Yüksek kaliteli protein kaynağı olan tavuk göğsü, renkli sebzelerle birleşerek hem besleyici 
                hem de lezzetli bir öğün oluşturur. Fırında pişirme yöntemi sayesinde minimum yağ kullanılarak 
                sağlıklı bir şekilde hazırlanır. Sebzelerin içerdiği vitaminler, mineraller ve antioksidanlar 
                bağışıklık sistemini güçlendirir.
              </p>
            </div>

            {/* Ingredients */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg mb-8 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <i className="ri-shopping-basket-line text-orange-600"></i>
                Malzemeler
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <i className="ri-checkbox-circle-fill text-orange-600 mt-1"></i>
                  <span>2 adet tavuk göğsü (yaklaşık 400g)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <i className="ri-checkbox-circle-fill text-orange-600 mt-1"></i>
                  <span>1 adet kırmızı biber</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <i className="ri-checkbox-circle-fill text-orange-600 mt-1"></i>
                  <span>1 adet sarı biber</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <i className="ri-checkbox-circle-fill text-orange-600 mt-1"></i>
                  <span>1 adet kabak</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <i className="ri-checkbox-circle-fill text-orange-600 mt-1"></i>
                  <span>2 adet havuç</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <i className="ri-checkbox-circle-fill text-orange-600 mt-1"></i>
                  <span>10-12 adet cherry domates</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <i className="ri-checkbox-circle-fill text-orange-600 mt-1"></i>
                  <span>2 yemek kaşığı zeytinyağı</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <i className="ri-checkbox-circle-fill text-orange-600 mt-1"></i>
                  <span>Taze kekik, biberiye</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <i className="ri-checkbox-circle-fill text-orange-600 mt-1"></i>
                  <span>Tuz, karabiber, sarımsak tozu</span>
                </li>
              </ul>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <i className="ri-file-list-3-line text-orange-600"></i>
                Hazırlanışı
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    text: 'Fırını 200°C\'ye ısıtın. Tavuk göğüslerini yıkayıp kurulayın. Her iki tarafına tuz, karabiber ve sarımsak tozu sürerek marine edin.',
                    image: 'https://readdy.ai/api/search-image?query=raw%20chicken%20breast%20being%20seasoned%20with%20spices%20salt%20pepper%20garlic%20powder%20on%20wooden%20cutting%20board%20professional%20food%20photography%20bright%20natural%20lighting%20high%20resolution%20clean%20background&width=600&height=400&seq=chicken-step1-v1&orientation=landscape',
                  },
                  {
                    step: 2,
                    text: 'Sebzeleri yıkayın. Biberleri ve kabağı küp şeklinde, havuçları yuvarlak dilimler halinde kesin. Cherry domatesleri yarıya bölün.',
                    image: 'https://readdy.ai/api/search-image?query=colorful%20chopped%20vegetables%20bell%20peppers%20zucchini%20carrots%20cherry%20tomatoes%20on%20wooden%20cutting%20board%20professional%20food%20photography%20bright%20natural%20lighting%20high%20resolution%20clean%20background&width=600&height=400&seq=chicken-step2-v1&orientation=landscape',
                  },
                  {
                    step: 3,
                    text: 'Sebzeleri bir kaseye alın. Üzerine zeytinyağı, tuz, karabiber ve taze kekik ekleyerek karıştırın.',
                    image: 'https://readdy.ai/api/search-image?query=mixed%20vegetables%20in%20bowl%20with%20olive%20oil%20herbs%20being%20tossed%20professional%20food%20photography%20bright%20natural%20lighting%20high%20resolution%20clean%20background&width=600&height=400&seq=chicken-step3-v1&orientation=landscape',
                  },
                  {
                    step: 4,
                    text: 'Fırın tepsisine yağlı kağıt serin. Tavuk göğüslerini ortaya yerleştirin, etrafına sebzeleri dizin. Üzerine biberiye dalları ekleyin.',
                    image: 'https://readdy.ai/api/search-image?query=raw%20chicken%20breast%20with%20colorful%20vegetables%20arranged%20on%20baking%20tray%20with%20parchment%20paper%20rosemary%20herbs%20professional%20food%20photography%20bright%20natural%20lighting%20high%20resolution%20clean%20background&width=600&height=400&seq=chicken-step4-v1&orientation=landscape',
                  },
                  {
                    step: 5,
                    text: 'Önceden ısıtılmış fırında 30-35 dakika pişirin. Tavuk tamamen pişene ve sebzeler karamelize olana kadar bekleyin. Sıcak servis yapın.',
                    image: 'https://readdy.ai/api/search-image?query=perfectly%20baked%20chicken%20breast%20with%20roasted%20vegetables%20golden%20brown%20on%20baking%20tray%20fresh%20from%20oven%20professional%20food%20photography%20bright%20natural%20lighting%20high%20resolution%20clean%20background&width=600&height=400&seq=chicken-step5-v1&orientation=landscape',
                  },
                ].map((item) => (
                  <div key={item.step} className="group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-full flex items-center justify-center font-bold group-hover:scale-110 transition-transform duration-300">
                        {item.step}
                      </div>
                      <p className="text-gray-700 leading-relaxed pt-2">{item.text}</p>
                    </div>
                    <div className="ml-14 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                      <img
                        src={item.image}
                        alt={`Adım ${item.step}`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <i className="ri-lightbulb-line text-amber-600"></i>
                İpuçları
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <i className="ri-arrow-right-circle-fill text-amber-600 mt-1"></i>
                  <span>Tavuğun daha yumuşak olması için 30 dakika önceden marine edebilirsiniz.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <i className="ri-arrow-right-circle-fill text-amber-600 mt-1"></i>
                  <span>Sebzeleri eşit boyutlarda kesmek, homojen pişmesini sağlar.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <i className="ri-arrow-right-circle-fill text-amber-600 mt-1"></i>
                  <span>Pişirme sırasında bir kez karıştırarak sebzelerin her tarafının kavrulmasını sağlayın.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <i className="ri-arrow-right-circle-fill text-amber-600 mt-1"></i>
                  <span>Yanında bulgur pilavı veya kinoa ile servis edebilirsiniz.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Nutrition Info */}
            <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-8 shadow-xl text-white mb-8 sticky top-24 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">Besin Değerleri</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-medium">Kalori</span>
                  <span className="text-xl font-bold">390 kcal</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-medium">Protein</span>
                  <span className="text-xl font-bold">42g</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-medium">Karbonhidrat</span>
                  <span className="text-xl font-bold">24g</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="font-medium">Yağ</span>
                  <span className="text-xl font-bold">16g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Lif</span>
                  <span className="text-xl font-bold">7g</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <Link
                  to="/contact"
                  className="block w-full bg-white text-orange-600 text-center py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105"
                >
                  Kişisel Plan İçin İletişime Geçin
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Recipes */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Benzer Tarifler</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedRecipes.map((recipe, index) => (
              <Link
                key={index}
                to={`/recipes/${recipe.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {recipe.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FirindaSebzeliTavukDetail;
