import { Link } from 'react-router-dom';

const Blog = () => {
  const featuredPost = {
    title: 'Metabolizma Hızlandırmanın Bilimsel Yolları',
    excerpt: 'Metabolizmanızı doğal yollarla hızlandırarak kilo verme sürecinizi destekleyin. Bilimsel araştırmalarla kanıtlanmış 10 etkili yöntem.',
    date: '15 Ocak 2025',
    readTime: '8 dk',
    category: 'Beslenme',
    image: 'https://readdy.ai/api/search-image?query=healthy%20metabolism%20concept%20with%20fresh%20vegetables%20fruits%20measuring%20tape%20fitness%20equipment%20bright%20natural%20lighting%20lifestyle%20photography%20high%20quality%20clean%20background&width=800&height=600&seq=blog-metabolism&orientation=landscape',
    slug: 'metabolizma-hizlandirmanin-bilimsel-yollari',
  };

  const posts = [
    {
      title: 'Sporcu Beslenmesinde Protein Zamanlaması',
      date: '12 Ocak 2025',
      readTime: '5 dk',
      category: 'Spor',
      image: 'https://readdy.ai/api/search-image?query=athletic%20nutrition%20protein%20shake%20with%20gym%20equipment%20fitness%20concept%20bright%20natural%20lighting%20lifestyle%20photography%20high%20quality%20clean%20background&width=400&height=400&seq=blog-protein&orientation=squarish',
      slug: 'sporcu-beslenmesinde-protein-zamanlamasi',
    },
    {
      title: 'Bağışıklık Sistemini Güçlendiren Besinler',
      date: '10 Ocak 2025',
      readTime: '6 dk',
      category: 'Sağlık',
      image: 'https://readdy.ai/api/search-image?query=immune%20system%20boost%20with%20vitamin%20C%20rich%20citrus%20fruits%20colorful%20vegetables%20bright%20natural%20lighting%20health%20photography%20high%20quality%20clean%20background&width=400&height=400&seq=blog-immune-home&orientation=squarish',
      slug: 'bagisiklik-sistemini-guclendiren-besinler',
    },
    {
      title: 'Çocuk Beslenmesinde Dikkat Edilmesi Gerekenler',
      date: '8 Ocak 2025',
      readTime: '7 dk',
      category: 'Çocuk Sağlığı',
      image: 'https://readdy.ai/api/search-image?query=happy%20children%20eating%20healthy%20colorful%20food%20fruits%20vegetables%20bright%20natural%20lighting%20lifestyle%20photography%20high%20quality%20clean%20background&width=400&height=400&seq=blog-children&orientation=squarish',
      slug: 'cocuk-beslenmesinde-dikkat-edilmesi-gerekenler',
    },
    {
      title: 'Sağlıklı Kilo Vermenin Altın Kuralları',
      date: '5 Ocak 2025',
      readTime: '9 dk',
      category: 'Kilo Yönetimi',
      image: 'https://readdy.ai/api/search-image?query=healthy%20weight%20loss%20with%20fresh%20vegetables%20fruits%20measuring%20tape%20fitness%20journal%20bright%20natural%20lighting%20wellness%20photography%20high%20quality%20clean%20background&width=400&height=400&seq=blog-weight-home&orientation=squarish',
      slug: 'saglikli-kilo-vermenin-altin-kurallari',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
            <i className="ri-article-line"></i>
            Blog Haberleri
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-serif text-gray-900 mb-6">
            Beslenme ve <span className="text-emerald-600">Sağlık Yazıları</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Sağlıklı yaşam, beslenme ve wellness konularında güncel bilgiler ve pratik öneriler.
          </p>
        </div>

        {/* Featured Post */}
        <Link
          to={`/blog/${featuredPost.slug}`}
          className="block mb-12 group"
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4 w-fit">
                  {featuredPost.category}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <i className="ri-calendar-line"></i>
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="ri-time-line"></i>
                    <span>{featuredPost.readTime} okuma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {posts.map((post, index) => (
            <Link
              key={index}
              to={`/blog/${post.slug}`}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-emerald-600">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <i className="ri-calendar-line"></i>
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <i className="ri-time-line"></i>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-medium rounded-full hover:bg-emerald-600 hover:text-white transition-all whitespace-nowrap"
          >
            Tüm Yazıları Oku
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;