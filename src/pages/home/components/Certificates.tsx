import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certificates = [
    {
      title: 'Beslenme ve Diyetetik Diploması',
      institution: 'İstanbul Arel Üniversitesi',
      year: '2020',
      description: '4.00 üzerinden 3.40 GPA ile tam burslu mezuniyet',
      icon: 'ri-medal-line',
      color: 'from-blue-500 to-blue-600',
      image: 'https://readdy.ai/api/search-image?query=Professional%20university%20diploma%20certificate%20in%20nutrition%20and%20dietetics%20with%20elegant%20border%20design%2C%20official%20seal%2C%20academic%20achievement%20document%2C%20high%20quality%20professional%20photography%2C%20clean%20white%20background&width=600&height=400&seq=cert-diploma-001&orientation=landscape'
    },
    {
      title: 'Aşçılık Sertifikası',
      institution: 'Profesyonel Mutfak Akademisi',
      year: '2019',
      description: 'Beslenme ve lezzeti birleştiren profesyonel eğitim',
      icon: 'ri-restaurant-line',
      color: 'from-orange-500 to-orange-600',
      image: 'https://readdy.ai/api/search-image?query=Professional%20culinary%20arts%20certificate%20with%20chef%20hat%20emblem%2C%20cooking%20school%20diploma%2C%20elegant%20design%20with%20food%20elements%2C%20official%20certification%20document%2C%20clean%20white%20background&width=600&height=400&seq=cert-culinary-002&orientation=landscape'
    },
    {
      title: 'Fonksiyonel Beslenme Sertifikası',
      institution: 'Acıbadem Üniversitesi ASAGEM',
      year: '2021',
      description: 'Bütüncül beslenme yaklaşımı ve fonksiyonel tıp eğitimi',
      icon: 'ri-heart-pulse-line',
      color: 'from-green-500 to-green-600',
      image: 'https://readdy.ai/api/search-image?query=Functional%20nutrition%20certificate%20from%20medical%20university%20with%20health%20symbols%2C%20professional%20medical%20education%20diploma%2C%20modern%20design%20with%20wellness%20elements%2C%20official%20document%2C%20clean%20white%20background&width=600&height=400&seq=cert-functional-003&orientation=landscape'
    },
    {
      title: 'Sporcu Beslenmesi Sertifikası',
      institution: 'Spor Bilimleri Enstitüsü',
      year: '2021',
      description: 'Performans odaklı beslenme ve spor diyetetik eğitimi',
      icon: 'ri-run-line',
      color: 'from-purple-500 to-purple-600',
      image: 'https://readdy.ai/api/search-image?query=Sports%20nutrition%20certificate%20with%20athletic%20symbols%2C%20fitness%20and%20performance%20nutrition%20diploma%2C%20professional%20sports%20science%20document%2C%20modern%20design%2C%20clean%20white%20background&width=600&height=400&seq=cert-sports-004&orientation=landscape'
    },
    {
      title: 'Diyabet Eğitimi Sertifikası',
      institution: 'Türkiye Diyabet Vakfı',
      year: '2020',
      description: 'Diyabet yönetimi ve metabolik hastalıklar uzmanlığı',
      icon: 'ri-health-book-line',
      color: 'from-red-500 to-red-600',
      image: 'https://readdy.ai/api/search-image?query=Diabetes%20education%20certificate%20with%20medical%20symbols%2C%20healthcare%20professional%20training%20diploma%2C%20official%20medical%20certification%20document%2C%20clean%20design%2C%20white%20background&width=600&height=400&seq=cert-diabetes-005&orientation=landscape'
    },
    {
      title: 'Türk İşaret Dili Sertifikası',
      institution: 'Milli Eğitim Bakanlığı',
      year: '2022',
      description: 'Erişilebilir sağlık hizmeti için işaret dili yetkinliği',
      icon: 'ri-hand-heart-line',
      color: 'from-teal-500 to-teal-600',
      image: 'https://readdy.ai/api/search-image?query=Sign%20language%20certificate%20with%20hand%20gesture%20symbols%2C%20accessibility%20education%20diploma%2C%20inclusive%20communication%20training%20document%2C%20professional%20design%2C%20clean%20white%20background&width=600&height=400&seq=cert-signlang-006&orientation=landscape'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #84a98c 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-sage/10 text-sage-dark rounded-full text-sm font-semibold mb-4"
          >
            Profesyonel Yeterlilikler
          </motion.span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Diploma ve Sertifikalar
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Akademik eğitim ve profesyonel gelişim yolculuğumda edindiğim resmi belgeler ve sertifikalar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCert(selectedCert === index ? null : index)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-80 group-hover:opacity-70 transition-opacity`}></div>
                
                {/* Icon */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <i className={`${cert.icon} text-2xl text-white`}></i>
                </motion.div>

                {/* Year Badge */}
                <div className="absolute bottom-4 left-4 px-4 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <span className="text-sm font-bold text-gray-900">{cert.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-sans text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sage-dark text-sm font-semibold mb-3">
                  {cert.institution}
                </p>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {cert.description}
                </p>

                {/* Expand Indicator */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-sage-dark text-sm font-semibold"
                  animate={{ x: selectedCert === index ? 5 : 0 }}
                >
                  <span>Detayları Gör</span>
                  <i className="ri-arrow-right-line"></i>
                </motion.div>
              </div>

              {/* Hover Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-sage/0 rounded-2xl pointer-events-none"
                whileHover={{ borderColor: 'rgba(132, 169, 140, 0.5)' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '6+', label: 'Sertifika', icon: 'ri-award-line' },
            { number: '5000+', label: 'Danışan', icon: 'ri-user-heart-line' },
            { number: '10+', label: 'Uzmanlık Alanı', icon: 'ri-star-line' },
            { number: '5+', label: 'Yıl Deneyim', icon: 'ri-time-line' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <i className={`${stat.icon} text-3xl text-sage-dark`}></i>
              </motion.div>
              <div className="font-serif text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
