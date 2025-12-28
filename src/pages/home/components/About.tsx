const About = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-dietitian.png"
                alt="Diyetisyen Ayşenur Korkmaz Danışmanlık"
                className="w-full h-auto object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs animate-float">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-full">
                  <i className="ri-award-fill text-3xl text-emerald-600"></i>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">5000+</div>
                  <div className="text-sm text-gray-600">Mutlu Danışan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              <i className="ri-user-heart-line"></i>
              Hakkımda
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold font-serif text-gray-900 leading-tight">
              Diyetisyen Ayşenur Korkmaz <span className="text-emerald-600">Kimdir?</span>
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Benimle tanıştığınızda sizi karşılayan yalnızca bir uzman değildir. Aynı zamanda <strong>dinleyen, anlayan, güven veren</strong> ve süreci her adımında yanında olan bir yol arkadaşıyla tanışırsınız.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>İstanbul Arel Üniversitesi Beslenme ve Diyetetik Bölümü</strong>'nü tam burslu olarak kazandım ve 3.40 ortalamayla başarıyla tamamladım. Eğitimim boyunca yalnızca teorik bilgiyle yetinmedim; <strong>aşçılık eğitimi</strong> alarak beslenmenin lezzet, kültür ve sürdürülebilirlikle şekillendiğini öğrendim.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-600">
                  <i className="ri-checkbox-circle-fill"></i>
                  <span className="font-medium text-gray-900">Fonksiyonel Beslenme</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600">
                  <i className="ri-checkbox-circle-fill"></i>
                  <span className="font-medium text-gray-900">Bütüncül Yaklaşım</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-600">
                  <i className="ri-checkbox-circle-fill"></i>
                  <span className="font-medium text-gray-900">Kişiye Özel Planlar</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600">
                  <i className="ri-checkbox-circle-fill"></i>
                  <span className="font-medium text-gray-900">Sürdürülebilir Sonuçlar</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="/hakkimda"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-full hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap"
              >
                Daha Fazla Bilgi
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;