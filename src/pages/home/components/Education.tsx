import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Education() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      icon: 'ri-graduation-cap-line',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      title: 'EĞİTİM',
      items: [
        'İstanbul Arel Üniversitesi',
        'Beslenme ve Diyetetik Bölümü',
        '3.40 GPA - Tam Burslu',
        'Aşçılık Sertifikası',
        'Fonksiyonel Beslenme Eğitimi'
      ]
    },
    {
      icon: 'ri-stethoscope-line',
      color: 'bg-green-50',
      iconColor: 'text-green-600',
      title: 'KLİNİK DENEYİM',
      items: [
        '5.000+ Danışan Deneyimi',
        'Özel Klinikler',
        'Devlet Hastaneleri',
        'Spor Salonları',
        'Aile Sağlığı Merkezleri'
      ]
    },
    {
      icon: 'ri-award-line',
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
      title: 'SÜREKLİ GELİŞİM',
      items: [
        'Diyabet Sempozyumları',
        'Sporcu Beslenmesi Eğitimleri',
        'Nutrigüncel Dijital Buluşmalar',
        'Türk İşaret Dili Eğitimi',
        'ASAGEM Fonksiyonel Beslenme'
      ]
    }
  ];

  return (
    <section className="py-24 bg-cream-light relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div
        className="absolute top-20 left-0 w-64 h-64 bg-sage/5 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

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
            Profesyonel Yolculuk
          </motion.span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Eğitim ve Deneyim
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Akademik altyapı, klinik deneyim ve sürekli gelişim ile desteklenen profesyonel yolculuk
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                animate={{
                  scale: hoveredCard === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                  animate={{
                    rotate: hoveredCard === index ? 360 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <i className={`${card.icon} text-3xl ${card.iconColor}`}></i>
                </motion.div>
                
                <h3 className="font-sans text-xl font-bold text-gray-900 text-center mb-6">
                  {card.title}
                </h3>

                <ul className="space-y-3 mb-8">
                  {card.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-start gap-2 text-gray-600 text-sm"
                    >
                      <i className="ri-check-line text-sage text-lg flex-shrink-0 mt-0.5"></i>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-sans text-sm font-medium transition-colors whitespace-nowrap cursor-pointer"
                >
                  DETAYLARI GÖR
                </motion.button>
              </motion.div>

              {/* Hover Effect Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-sage/0"
                animate={{
                  borderColor: hoveredCard === index ? 'rgba(132, 169, 140, 0.3)' : 'rgba(132, 169, 140, 0)',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}