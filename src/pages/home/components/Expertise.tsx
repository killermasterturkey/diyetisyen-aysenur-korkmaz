import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Expertise() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const expertiseAreas = [
    {
      number: '01',
      icon: 'ri-scales-3-line',
      color: 'bg-green-50',
      iconColor: 'text-green-600',
      gradient: 'from-green-500 to-green-600',
      title: 'Kilo Yönetimi',
      description: 'Kilo verme, kilo alma ve kilo koruma programları',
      image: 'https://readdy.ai/api/search-image?query=Healthy%20weight%20management%20concept%20with%20balanced%20nutrition%2C%20fresh%20vegetables%20and%20fruits%20on%20a%20scale%2C%20clean%20minimal%20background%2C%20professional%20healthcare%20photography%2C%20pastel%20green%20tones&width=400&height=300&seq=expertise-01&orientation=landscape'
    },
    {
      number: '02',
      icon: 'ri-heart-pulse-line',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      gradient: 'from-blue-500 to-blue-600',
      title: 'Metabolik Hastalıklar',
      description: 'İnsülin direnci, diyabet, hipotiroidi, PCOS tedavisi',
      image: 'https://readdy.ai/api/search-image?query=Metabolic%20health%20concept%20with%20medical%20symbols%2C%20healthy%20food%20choices%20for%20diabetes%20and%20insulin%20resistance%2C%20clean%20professional%20medical%20photography%2C%20soft%20blue%20tones&width=400&height=300&seq=expertise-02&orientation=landscape'
    },
    {
      number: '03',
      icon: 'ri-restaurant-line',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
      gradient: 'from-purple-500 to-purple-600',
      title: 'Sindirim Sistemi',
      description: 'Kabızlık, şişkinlik, IBS, reflü tedavisi',
      image: 'https://readdy.ai/api/search-image?query=Digestive%20health%20concept%20with%20fiber-rich%20foods%2C%20probiotics%2C%20healthy%20gut%20nutrition%2C%20clean%20minimal%20background%2C%20professional%20healthcare%20photography%2C%20soft%20purple%20tones&width=400&height=300&seq=expertise-03&orientation=landscape'
    },
    {
      number: '04',
      icon: 'ri-women-line',
      color: 'bg-pink-50',
      iconColor: 'text-pink-600',
      gradient: 'from-pink-500 to-pink-600',
      title: 'Kadın Sağlığı',
      description: 'Hormonal denge ve kadın sağlığına yönelik beslenme',
      image: 'https://readdy.ai/api/search-image?query=Women%20health%20and%20hormonal%20balance%20concept%20with%20nutritious%20foods%2C%20feminine%20wellness%2C%20clean%20professional%20photography%2C%20soft%20pink%20tones%2C%20healthy%20lifestyle&width=400&height=300&seq=expertise-04&orientation=landscape'
    },
    {
      number: '05',
      icon: 'ri-parent-line',
      color: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      gradient: 'from-yellow-500 to-yellow-600',
      title: 'Gebelik ve Emzirme',
      description: 'Gebelik ve emzirme döneminde beslenme desteği',
      image: 'https://readdy.ai/api/search-image?query=Pregnancy%20nutrition%20concept%20with%20healthy%20foods%20for%20expecting%20mothers%2C%20prenatal%20vitamins%2C%20clean%20professional%20healthcare%20photography%2C%20soft%20yellow%20tones&width=400&height=300&seq=expertise-05&orientation=landscape'
    },
    {
      number: '06',
      icon: 'ri-run-line',
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
      gradient: 'from-orange-500 to-orange-600',
      title: 'Sporcu Beslenmesi',
      description: 'Performans odaklı sporcu beslenme planlaması',
      image: 'https://readdy.ai/api/search-image?query=Sports%20nutrition%20concept%20with%20protein-rich%20foods%2C%20athletic%20performance%20meals%2C%20energy%20foods%20for%20athletes%2C%20clean%20professional%20photography%2C%20orange%20tones&width=400&height=300&seq=expertise-06&orientation=landscape'
    },
    {
      number: '07',
      icon: 'ri-user-smile-line',
      color: 'bg-teal-50',
      iconColor: 'text-teal-600',
      gradient: 'from-teal-500 to-teal-600',
      title: 'Çocuk Beslenmesi',
      description: 'Çocuk ve ergen beslenme programları',
      image: 'https://readdy.ai/api/search-image?query=Children%20nutrition%20concept%20with%20colorful%20healthy%20foods%20for%20kids%2C%20balanced%20meals%20for%20growing%20children%2C%20fun%20and%20nutritious%2C%20clean%20photography%2C%20teal%20tones&width=400&height=300&seq=expertise-07&orientation=landscape'
    },
    {
      number: '08',
      icon: 'ri-shield-line',
      color: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      gradient: 'from-indigo-500 to-indigo-600',
      title: 'Bağışıklık Sistemi',
      description: 'Bağışıklık sistemini güçlendiren beslenme',
      image: 'https://readdy.ai/api/search-image?query=Immune%20system%20boost%20concept%20with%20vitamin-rich%20foods%2C%20citrus%20fruits%2C%20antioxidants%2C%20healthy%20immunity%20nutrition%2C%20clean%20professional%20photography%2C%20indigo%20tones&width=400&height=300&seq=expertise-08&orientation=landscape'
    },
    {
      number: '09',
      icon: 'ri-drop-line',
      color: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
      gradient: 'from-cyan-500 to-cyan-600',
      title: 'Lipödem Tedavisi',
      description: 'Lipödem, ödem ve lenfatik sistem desteği',
      image: 'https://readdy.ai/api/search-image?query=Lymphatic%20health%20concept%20with%20anti-inflammatory%20foods%2C%20edema%20reduction%20nutrition%2C%20clean%20professional%20medical%20photography%2C%20cyan%20tones&width=400&height=300&seq=expertise-09&orientation=landscape'
    },
    {
      number: '10',
      icon: 'ri-leaf-line',
      color: 'bg-lime-50',
      iconColor: 'text-lime-600',
      gradient: 'from-lime-500 to-lime-600',
      title: 'Vejetaryen/Vegan',
      description: 'Bitkisel beslenme ve dengeli protein kaynakları',
      image: 'https://readdy.ai/api/search-image?query=Vegan%20vegetarian%20nutrition%20concept%20with%20plant-based%20proteins%2C%20legumes%2C%20vegetables%2C%20balanced%20plant%20diet%2C%20clean%20professional%20photography%2C%20lime%20green%20tones&width=400&height=300&seq=expertise-10&orientation=landscape'
    },
    {
      number: '11',
      icon: 'ri-alert-line',
      color: 'bg-red-50',
      iconColor: 'text-red-600',
      gradient: 'from-red-500 to-red-600',
      title: 'Gıda İntoleransları',
      description: 'Gıda intoleransları ve özel diyet programları',
      image: 'https://readdy.ai/api/search-image?query=Food%20intolerance%20concept%20with%20allergen-free%20foods%2C%20gluten-free%20options%2C%20special%20dietary%20needs%2C%20clean%20professional%20photography%2C%20soft%20red%20tones&width=400&height=300&seq=expertise-11&orientation=landscape'
    },
    {
      number: '12',
      icon: 'ri-mental-health-line',
      color: 'bg-violet-50',
      iconColor: 'text-violet-600',
      gradient: 'from-violet-500 to-violet-600',
      title: 'Yeme Davranışı',
      description: 'Yeme davranışı terapisi ve sürdürülebilir alışkanlıklar',
      image: 'https://readdy.ai/api/search-image?query=Mindful%20eating%20concept%20with%20balanced%20nutrition%2C%20healthy%20eating%20habits%2C%20emotional%20wellness%20through%20food%2C%20clean%20professional%20photography%2C%20violet%20tones&width=400&height=300&seq=expertise-12&orientation=landscape'
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-cream-light relative overflow-hidden" ref={containerRef}>
      {/* Animated Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #84a98c 2px, transparent 2px), radial-gradient(circle at 80% 80%, #cad2c5 2px, transparent 2px)',
          backgroundSize: '100px 100px'
        }}></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-sage/10 text-sage-dark rounded-full text-sm font-semibold mb-4"
            >
              <i className="ri-star-line mr-2"></i>
              Hizmet Alanları
            </motion.span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gray-900 block"
              >
                Uzmanlık
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-accent block"
              >
                Alanlarım
              </motion.span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              <strong>Beslenme</strong>, tek bir kalıba sığdırılamayacak kadar bireysel ve çok yönlü bir alandır. 
              Her danışanım için <strong>özel çözümler</strong> sunuyorum.
            </p>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-bold shadow-lg"
          >
            12+ ALAN
          </motion.span>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="flex-shrink-0 w-80 snap-start"
            >
              <motion.div
                animate={{
                  y: hoveredIndex === index ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full relative"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover object-top"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-60`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  <motion.div
                    className="absolute bottom-4 right-4 text-white font-bold text-4xl opacity-50"
                    animate={{
                      scale: hoveredIndex === index ? 1.2 : 1,
                      opacity: hoveredIndex === index ? 0.8 : 0.5,
                    }}
                  >
                    {area.number}
                  </motion.div>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: hoveredIndex === index ? ['-100%', '100%'] : '-100%',
                    }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                
                <div className="p-6">
                  <motion.div
                    className={`w-14 h-14 ${area.color} rounded-xl flex items-center justify-center mb-4`}
                    animate={{
                      rotate: hoveredIndex === index ? 360 : 0,
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <i className={`${area.icon} text-2xl ${area.iconColor}`}></i>
                  </motion.div>
                  
                  <h3 className="font-sans text-xl font-bold text-gray-900 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>

                {/* Hover Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-sage/0 rounded-3xl pointer-events-none"
                  animate={{
                    borderColor: hoveredIndex === index ? 'rgba(132, 169, 140, 0.5)' : 'rgba(132, 169, 140, 0)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl p-10 shadow-lg relative overflow-hidden"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-sage/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="text-center max-w-3xl mx-auto relative z-10">
            <motion.i
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="ri-heart-3-line text-5xl text-accent mb-4 inline-block"
            ></motion.i>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
              Hedefim: Sürdürülebilir Sağlıklı Yaşam
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Danışanlarım için hedefim; geçici bir diyet değil, <strong className="text-gray-900">yaşam boyu sürdürülebilecek 
              sağlıklı bir beslenme düzeni</strong> oluşturmaktır. Süreç yalnızca listelenmiş bir program olarak 
              değil, öğretici, destekleyici ve birlikte ilerleyen bir yolculuk olarak ele alınır.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}