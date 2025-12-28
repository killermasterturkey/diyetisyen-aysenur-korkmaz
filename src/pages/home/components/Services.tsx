import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: 'ri-scales-3-line',
      title: 'Kilo Yönetimi',
      description: 'Sağlıklı kilo verme, kilo alma ve kilo koruma programları ile hedeflerinize ulaşın.',
      slug: 'kilo-yonetimi',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: 'ri-run-line',
      title: 'Sporcu Beslenmesi',
      description: 'Performans odaklı beslenme planları ile spor hedeflerinizi destekleyin.',
      slug: 'sporcu-beslenmesi',
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Metabolik Hastalıklar',
      description: 'Diyabet, insülin direnci, PCOS ve hipotiroidi gibi durumlarda özel beslenme desteği.',
      slug: 'metabolik-hastaliklar',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: 'ri-parent-line',
      title: 'Gebelik Beslenmesi',
      description: 'Gebelik ve emzirme döneminde anne ve bebek sağlığı için özel beslenme programları.',
      slug: 'gebelik-beslenmesi',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: 'ri-bear-smile-line',
      title: 'Çocuk Beslenmesi',
      description: 'Çocuk ve ergen döneminde sağlıklı büyüme ve gelişim için beslenme danışmanlığı.',
      slug: 'cocuk-beslenmesi',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: 'ri-heart-add-line',
      title: 'Sindirim Sistemi',
      description: 'Kabızlık, şişkinlik, IBS ve reflü gibi sindirim sorunlarında beslenme desteği.',
      slug: 'sindirim-sistemi',
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-teal-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
            <i className="ri-service-line"></i>
            Hizmetlerim
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-serif text-gray-900 mb-6">
            Uzmanlık <span className="text-emerald-600">Alanlarım</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Beslenme, tek bir kalıba sığdırılamayacak kadar bireysel ve çok yönlü bir alandır. Her danışanım için özel, bilimsel ve sürdürülebilir planlar hazırlıyorum.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <i className={`${service.icon} text-3xl text-white`}></i>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  to={`/hizmetlerim/${service.slug}`}
                  className="inline-flex items-center gap-2 text-emerald-600 font-medium text-sm group-hover:gap-4 transition-all"
                >
                  Detaylı Bilgi
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/hizmetlerim"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-medium rounded-full hover:bg-emerald-600 hover:text-white transition-all whitespace-nowrap"
          >
            Tüm Hizmetleri Gör
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;