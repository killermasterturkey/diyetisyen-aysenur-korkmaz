import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d57eh669uelhi9993as0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { icon: 'ri-phone-line', label: 'Telefon', value: '0547 537 3522', href: 'tel:05475373522', color: 'text-green-600' },
    { icon: 'ri-map-pin-line', label: 'Adres', value: 'Evliya Çelebi Caddesi Etiler mahallesi Mirador İş Merkezi no:7 kat:7 daire 703 Muratpaşa/ Antalya', href: 'https://maps.google.com/?q=Evliya+Çelebi+Caddesi+Etiler+mahallesi+Mirador+İş+Merkezi+no:7+kat:7+daire+703+Muratpaşa+Antalya', color: 'text-red-600' },
    { icon: 'ri-mail-line', label: 'E-posta', value: 'info@aysenurkorkmaz.com', href: 'mailto:info@aysenurkorkmaz.com', color: 'text-blue-600' }
  ];

  return (
    <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
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
            className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4 border border-white/20"
          >
            <i className="ri-message-3-line mr-2"></i>
            İletişime Geçin
          </motion.span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">
            Randevu Alın
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Sağlıklı yaşam yolculuğunuza bugün başlayın. Size özel beslenme programı için iletişime geçin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target={info.icon === 'ri-map-pin-line' ? '_blank' : undefined}
                rel={info.icon === 'ri-map-pin-line' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <i className={`${info.icon} text-2xl text-white`}></i>
                </motion.div>
                <div className="flex-1">
                  <h4 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-1">
                    {info.label}
                  </h4>
                  <p className="text-white text-base">
                    {info.value}
                  </p>
                </div>
                <i className="ri-arrow-right-line text-white/40 text-xl"></i>
              </motion.a>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl h-64"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.2!2d30.7133!3d36.8969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUzJzQ4LjgiTiAzMMKwNDInNDcuOSJF!5e0!3m2!1str!2str!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Klinik Konumu"
              ></iframe>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="font-serif text-2xl font-bold text-white mb-6">
              Randevu Formu
            </h3>
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              data-readdy-form
            >
              {[
                { name: 'name', type: 'text', placeholder: 'Adınız Soyadınız', icon: 'ri-user-line' },
                { name: 'email', type: 'email', placeholder: 'E-posta Adresiniz', icon: 'ri-mail-line' },
                { name: 'phone', type: 'tel', placeholder: 'Telefon Numaranız', icon: 'ri-phone-line' }
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      scale: focusedField === field.name ? 1.1 : 1,
                      color: focusedField === field.name ? '#84a98c' : '#ffffff',
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
                  >
                    <i className={`${field.icon} text-lg`}></i>
                  </motion.div>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    placeholder={field.placeholder}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-sage focus:bg-white/10 transition-all text-sm"
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    scale: focusedField === 'message' ? 1.1 : 1,
                    color: focusedField === 'message' ? '#84a98c' : '#ffffff',
                  }}
                  className="absolute left-4 top-4 text-white/50"
                >
                  <i className="ri-message-3-line text-lg"></i>
                </motion.div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Mesajınız (Opsiyonel)"
                  maxLength={500}
                  rows={4}
                  className="w-full bg-white/5 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-sage focus:bg-white/10 transition-all text-sm resize-none"
                />
                <span className="text-white/40 text-xs mt-1 block text-right">
                  {formData.message.length}/500
                </span>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-sage hover:bg-sage-dark text-white rounded-xl font-sans text-base font-semibold transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <motion.i
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="ri-loader-4-line text-xl"
                    ></motion.i>
                    <span>Gönderiliyor...</span>
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-fill text-xl"></i>
                    <span>Randevu Talebi Gönder</span>
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sage text-sm bg-sage/10 rounded-lg p-3"
                >
                  <i className="ri-checkbox-circle-fill text-lg"></i>
                  <span>Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</span>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 rounded-lg p-3"
                >
                  <i className="ri-error-warning-fill text-lg"></i>
                  <span>Bir hata oluştu. Lütfen tekrar deneyin.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-12"
        >
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-6xl lg:text-8xl font-bold text-cream/80 tracking-tight mb-6"
            >
              AYŞENUR KORKMAZ
            </motion.h2>
            <p className="text-white/50 text-sm">
              © 2025 Tüm hakları saklıdır. | Powered by Killer Master Turkey
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}