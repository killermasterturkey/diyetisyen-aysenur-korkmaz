import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const stats = [
    { number: '5000+', label: 'Mutlu Danışan', icon: 'ri-user-heart-line', color: 'from-green-500 to-green-600' },
    { number: '10+', label: 'Yıl Deneyim', icon: 'ri-time-line', color: 'from-blue-500 to-blue-600' },
    { number: '12+', label: 'Uzmanlık Alanı', icon: 'ri-star-line', color: 'from-orange-500 to-orange-600' },
    { number: '100%', label: 'Kişiye Özel', icon: 'ri-heart-pulse-line', color: 'from-purple-500 to-purple-600' }
  ];

  const experiences = [
    { icon: 'ri-hospital-line', text: 'Özel Klinikler', color: 'text-blue-600' },
    { icon: 'ri-building-line', text: 'Devlet Hastaneleri', color: 'text-green-600' },
    { icon: 'ri-run-line', text: 'Spor Salonları', color: 'text-orange-600' },
    { icon: 'ri-home-heart-line', text: 'Aile Sağlığı Merkezleri', color: 'text-purple-600' }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(30deg, #84a98c 12%, transparent 12.5%, transparent 87%, #84a98c 87.5%, #84a98c), linear-gradient(150deg, #84a98c 12%, transparent 12.5%, transparent 87%, #84a98c 87.5%, #84a98c), linear-gradient(30deg, #84a98c 12%, transparent 12.5%, transparent 87%, #84a98c 87.5%, #84a98c), linear-gradient(150deg, #84a98c 12%, transparent 12.5%, transparent 87%, #84a98c 87.5%, #84a98c)',
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
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
            <i className="ri-trophy-line mr-2"></i>
            Profesyonel Başarılar
          </motion.span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Deneyim ve Başarı
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Mesleki yolculuğum boyunca <strong>özel klinikler, spor salonları, özel ve devlet hastaneleri</strong> ile 
            aile sağlığı merkezleri gibi birçok farklı alanda aktif olarak görev aldım. <strong>Çocuklardan 
            yetişkinlere, gebelerden sporculara</strong>, kronik hastalığı olan bireylerden kilo kontrolüne 
            başvuranlara kadar geniş bir danışan profiliyle bire bir çalıştım.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative"
            >
              <motion.div
                animate={{
                  y: hoveredIndex === index ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
                className={`bg-gradient-to-br ${stat.color} rounded-3xl p-8 text-center shadow-lg relative overflow-hidden`}
              >
                {/* Animated Background Circle */}
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                    rotate: hoveredIndex === index ? 360 : 0,
                  }}
                  transition={{ duration: 2 }}
                />

                <motion.div
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10"
                  animate={{
                    rotate: hoveredIndex === index ? [0, 360] : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <i className={`${stat.icon} text-4xl text-white`}></i>
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="font-serif text-5xl font-bold text-white mb-2 relative z-10"
                >
                  {stat.number}
                </motion.div>
                
                <div className="text-white/90 font-sans text-sm font-medium relative z-10">
                  {stat.label}
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: hoveredIndex === index ? ['-100%', '100%'] : '-100%',
                  }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Experience Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-serif text-3xl font-bold text-gray-900 text-center mb-8">
            Çalışma Alanlarım
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-sage/10 rounded-xl flex items-center justify-center mb-4"
                >
                  <i className={`${exp.icon} text-2xl ${exp.color}`}></i>
                </motion.div>
                <p className="text-gray-900 font-semibold text-sm">{exp.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-sage-light/30 to-accent/10 rounded-3xl p-10 text-center relative overflow-hidden"
        >
          {/* Animated Background Circles */}
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.i
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="ri-lightbulb-line text-5xl text-sage mb-4 relative z-10"
          ></motion.i>
          <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4 relative z-10">
            Fonksiyonel ve Bütüncül Beslenme Yaklaşımı
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed relative z-10">
            Fonksiyonel beslenme alanında <strong className="text-gray-900">Acıbadem Üniversitesi ASAGEM'den</strong> aldığım eğitim ile 
            besinlerin yalnızca besin değerleri değil, vücuttaki işlevleri de bütüncül bir bakış açısıyla 
            değerlendiriliyor. Sağlıklı beslenme; yasaklarla dolu listelerden ziyade, kişinin yaşam tarzına 
            uyum sağlayan, öğretilen, <strong className="text-gray-900">sürdürülebilir ve keyifli bir sistem</strong> olarak sunuluyor.
          </p>
        </motion.div>
      </div>
    </section>
  );
}