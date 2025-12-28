import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Recipes = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const recipes = [
    {
      title: 'Protein Pancake',
      category: 'Kahvaltı',
      calories: '280',
      time: '15 dk',
      image: 'https://readdy.ai/api/search-image?query=healthy%20protein%20pancakes%20with%20fresh%20berries%20and%20honey%20on%20white%20plate%20bright%20natural%20lighting%20food%20photography%20high%20quality%20simple%20clean%20background&width=400&height=500&seq=recipe-pancake&orientation=portrait',
      slug: 'protein-pancake',
    },
    {
      title: 'Quinoa Salata',
      category: 'Öğle Yemeği',
      calories: '320',
      time: '20 dk',
      image: 'https://readdy.ai/api/search-image?query=colorful%20quinoa%20salad%20bowl%20with%20fresh%20vegetables%20avocado%20chickpeas%20bright%20natural%20lighting%20food%20photography%20high%20quality%20simple%20clean%20background&width=400&height=500&seq=recipe-quinoa&orientation=portrait',
      slug: 'quinoa-salata',
    },
    {
      title: 'Izgara Somon',
      category: 'Akşam Yemeği',
      calories: '380',
      time: '25 dk',
      image: 'https://readdy.ai/api/search-image?query=grilled%20salmon%20fillet%20with%20steamed%20vegetables%20lemon%20on%20white%20plate%20bright%20natural%20lighting%20food%20photography%20high%20quality%20simple%20clean%20background&width=400&height=500&seq=recipe-salmon&orientation=portrait',
      slug: 'izgara-somon',
    },
    {
      title: 'Chia Puding',
      category: 'Tatlı',
      calories: '180',
      time: '10 dk',
      image: 'https://readdy.ai/api/search-image?query=chia%20seed%20pudding%20with%20fresh%20fruits%20in%20glass%20jar%20bright%20natural%20lighting%20food%20photography%20high%20quality%20simple%20clean%20background&width=400&height=500&seq=recipe-chia&orientation=portrait',
      slug: 'chia-puding',
    },
    {
      title: 'Smoothie Bowl',
      category: 'Kahvaltı',
      calories: '250',
      time: '10 dk',
      image: 'https://readdy.ai/api/search-image?query=colorful%20smoothie%20bowl%20with%20fresh%20fruits%20granola%20nuts%20toppings%20bright%20natural%20lighting%20food%20photography%20high%20quality%20simple%20clean%20background&width=400&height=500&seq=recipe-smoothie&orientation=portrait',
      slug: 'smoothie-bowl',
    },
    {
      title: 'Tavuk Wrap',
      category: 'Öğle Yemeği',
      calories: '340',
      time: '15 dk',
      image: 'https://readdy.ai/api/search-image?query=healthy%20chicken%20wrap%20with%20fresh%20vegetables%20on%20white%20plate%20bright%20natural%20lighting%20food%20photography%20high%20quality%20simple%20clean%20background&width=400&height=500&seq=recipe-wrap&orientation=portrait',
      slug: 'tavuk-wrap',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              <i className="ri-restaurant-line"></i>
              Sağlıklı Tarifler
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-gray-900 mb-4">
              Lezzetli ve <span className="text-emerald-600">Sağlıklı Tarifler</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Beslenme planlarınızı destekleyen, pratik ve lezzetli tariflerle sağlıklı yaşamı keyifli hale getirin.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all cursor-pointer"
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all cursor-pointer"
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
            <Link
              to="/recipes"
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-full hover:shadow-lg transition-all whitespace-nowrap"
            >
              Tüm Tarifler
            </Link>
          </div>
        </div>

        {/* Recipes Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {recipes.map((recipe, index) => (
            <Link
              key={index}
              to={`/recipes/${recipe.slug}`}
              className="flex-shrink-0 w-80 group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-emerald-600">
                    {recipe.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {recipe.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <i className="ri-fire-line text-orange-500"></i>
                      <span>{recipe.calories} kcal</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="ri-time-line text-emerald-600"></i>
                      <span>{recipe.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600 font-medium text-sm group-hover:gap-4 transition-all">
                    Tarifi Gör
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;