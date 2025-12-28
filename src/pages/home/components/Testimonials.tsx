import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Elif Yılmaz',
      role: '3 Ay - 12 Kilo',
      image: 'https://readdy.ai/api/search-image?query=happy%20smiling%20turkish%20woman%20portrait%20natural%20lighting%20professional%20photography%20high%20quality%20clean%20background&width=200&height=200&seq=testimonial-1&orientation=squarish',
      text: 'Ayşenur Hanım ile çalışmaya başladığımda sadece kilo vermek istiyordum. Ama aldığım çok daha fazlasıydı. Sağlıklı yaşam tarzı edinmemi sağladı, enerji seviyem arttı ve kendimi çok daha iyi hissediyorum. Kişiye özel hazırladığı beslenme planları sayesinde hiç aç kalmadan hedefime ulaştım.',
      rating: 5,
    },
    {
      name: 'Mehmet Kaya',
      role: 'Sporcu - 6 Ay',
      image: 'https://readdy.ai/api/search-image?query=athletic%20turkish%20man%20portrait%20natural%20lighting%20professional%20photography%20high%20quality%20clean%20background&width=200&height=200&seq=testimonial-2&orientation=squarish',
      text: 'Spor performansımı artırmak için profesyonel bir diyetisyene ihtiyacım vardı. Ayşenur Hanım\'ın sporcu beslenmesi konusundaki bilgisi ve deneyimi sayesinde hem kas kütlemi artırdım hem de yağ oranımı düşürdüm. Antrenmanlarımdan çok daha verimli sonuçlar alıyorum.',
      rating: 5,
    },
    {
      name: 'Zeynep Demir',
      role: 'Gebelik Dönemi',
      image: 'https://readdy.ai/api/search-image?query=happy%20pregnant%20turkish%20woman%20portrait%20natural%20lighting%20professional%20photography%20high%20quality%20clean%20background&width=200&height=200&seq=testimonial-3&orientation=squarish',
      text: 'Gebelik dönemimde Ayşenur Hanım ile çalışmak benim için çok değerliydi. Hem bebeğimin hem de benim sağlığım için en doğru beslenme planını hazırladı. Sağlıklı kilo aldım ve doğum sonrası da kolayca forma döndüm. Emzirme döneminde de desteğini sürdürüyor.',
      rating: 5,
    },
    {
      name: 'Ahmet Özkan',
      role: 'İnsülin Direnci - 4 Ay',
      image: 'https://readdy.ai/api/search-image?query=middle%20aged%20turkish%20man%20portrait%20natural%20lighting%20professional%20photography%20high%20quality%20clean%20background&width=200&height=200&seq=testimonial-4&orientation=squarish',
      text: 'İnsülin direnci teşhisi konduğunda çok endişeliydim. Ayşenur Hanım\'ın fonksiyonel beslenme yaklaşımı sayesinde kan şekerim dengelendi ve 15 kilo verdim. Artık ilaç kullanmıyorum ve kendimi çok daha enerjik hissediyorum. Hayatımı değiştirdi.',
      rating: 5,
    },
    {
      name: 'Ayşe Şahin',
      role: 'Çocuk Beslenmesi',
      image: 'https://readdy.ai/api/search-image?query=happy%20turkish%20mother%20portrait%20natural%20lighting%20professional%20photography%20high%20quality%20clean%20background&width=200&height=200&seq=testimonial-5&orientation=squarish',
      text: 'Oğlum seçici yeme problemi yaşıyordu ve bu beni çok endişelendiriyordu. Ayşenur Hanım\'ın çocuk beslenmesi konusundaki yaklaşımı harika. Oğlum artık çok daha çeşitli yiyecekler yiyor ve sağlıklı büyüyor. Ailece sağlıklı beslenme alışkanlıkları edindik.',
      rating: 5,
    },
    {
      name: 'Can Yıldız',
      role: 'Kilo Alma - 5 Ay',
      image: 'https://readdy.ai/api/search-image?query=young%20turkish%20man%20portrait%20natural%20lighting%20professional%20photography%20high%20quality%20clean%20background&width=200&height=200&seq=testimonial-6&orientation=squarish',
      text: 'Hayatım boyunca zayıf kaldım ve kilo almakta zorlanıyordum. Ayşenur Hanım\'ın hazırladığı kilo alma programı sayesinde sağlıklı bir şekilde 8 kilo aldım. Artık kendime daha güveniyorum ve sosyal hayatımda çok daha rahatım. Teşekkürler!',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
            <i className="ri-chat-quote-line"></i>
            Müşteri Yorumları
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-serif text-gray-900 mb-6">
            Danışanlarımızın <span className="text-emerald-600">Başarı Hikayeleri</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            {/* Quote Icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl mb-8 mx-auto">
              <i className="ri-double-quotes-l text-3xl text-white"></i>
            </div>

            {/* Content */}
            <div className="text-center mb-8">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed italic mb-8">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-2xl text-yellow-400"></i>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover object-top border-4 border-emerald-100"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-emerald-600">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    index === currentIndex
                      ? 'w-8 bg-emerald-600'
                      : 'w-2 bg-gray-300 hover:bg-emerald-400'
                  }`}
                ></button>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-xl hover:bg-emerald-600 hover:text-white transition-all cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          <button
            onClick={() => goToSlide((currentIndex + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-xl hover:bg-emerald-600 hover:text-white transition-all cursor-pointer"
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;