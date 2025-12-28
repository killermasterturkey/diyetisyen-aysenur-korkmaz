import { useEffect, useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqData = [
    {
      question: 'Randevu almak için ne yapmalıyım?',
      answer: 'Telefon, WhatsApp veya iletişim formu üzerinden bize ulaşabilirsiniz. Size en uygun randevu saatini birlikte belirleriz.',
    },
    {
      question: 'Online görüşme yapıyor musunuz?',
      answer: 'Evet, video konferans üzerinden online danışmanlık hizmeti veriyorum. Türkiye\'nin her yerinden ve yurt dışından danışanlarıma hizmet verebiliyorum.',
    },
    {
      question: 'İlk görüşme ne kadar sürer?',
      answer: 'İlk görüşme yaklaşık 60 dakika sürer. Bu sürede detaylı anamnez, antropometrik ölçümler ve beslenme alışkanlıklarınızı değerlendiririz.',
    },
    {
      question: 'Klinik adresiniz nerede?',
      answer: 'Evliya Çelebi Caddesi Etiler mahallesi Mirador İş Merkezi no:7 kat:7 daire 703 Muratpaşa/Antalya adresinde hizmet veriyorum.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-emerald-50/30">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold font-serif text-gray-900 mb-6">
            İletişim <span className="text-emerald-600">Bilgileri</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sağlıklı yaşam yolculuğunuza başlamak için benimle iletişime geçin
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8">
                  İletişim Bilgileri
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-emerald-100 rounded-2xl flex-shrink-0">
                      <i className="ri-phone-line text-2xl text-emerald-600"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                      <a href="tel:+905475373522" className="text-gray-600 hover:text-emerald-600 transition-colors">
                        0547 537 3522
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-emerald-100 rounded-2xl flex-shrink-0">
                      <i className="ri-mail-line text-2xl text-emerald-600"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">E-posta</h3>
                      <a href="mailto:info@diyetisyenaysenurkorkmaz.com" className="text-gray-600 hover:text-emerald-600 transition-colors">
                        info@diyetisyenaysenurkorkmaz.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-emerald-100 rounded-2xl flex-shrink-0">
                      <i className="ri-map-pin-line text-2xl text-emerald-600"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Adres</h3>
                      <p className="text-gray-600">
                        Evliya Çelebi Caddesi Etiler mahallesi<br />
                        Mirador İş Merkezi no:7 kat:7 daire 703<br />
                        Muratpaşa/Antalya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-emerald-100 rounded-2xl flex-shrink-0">
                      <i className="ri-time-line text-2xl text-emerald-600"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Çalışma Saatleri</h3>
                      <p className="text-gray-600">
                        Pazartesi - Cuma: 09:00 - 18:00<br />
                        Cumartesi: Randevuya Göre<br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Sosyal Medya</h3>
                <p className="text-emerald-50 mb-6">
                  Sağlıklı yaşam ipuçları, tarifler ve güncel haberler için beni takip edin!
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
                  >
                    <i className="ri-instagram-line text-2xl"></i>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
                  >
                    <i className="ri-facebook-fill text-2xl"></i>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
                  >
                    <i className="ri-youtube-fill text-2xl"></i>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
                  >
                    <i className="ri-linkedin-fill text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8">
                Mesaj Gönderin
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm"
                    placeholder="0555 555 55 55"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Konu *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm"
                  >
                    <option value="">Konu seçiniz</option>
                    <option value="randevu">Randevu Talebi</option>
                    <option value="bilgi">Bilgi Almak İstiyorum</option>
                    <option value="hizmet">Hizmetler Hakkında</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none text-sm"
                    placeholder="Mesajınızı buraya yazın... (Maksimum 500 karakter)"
                  ></textarea>
                  <div className="text-xs text-gray-500 mt-1 text-right">
                    {formData.message.length}/500 karakter
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl flex items-center gap-2">
                    <i className="ri-check-line text-xl"></i>
                    <span>Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-2">
                    <i className="ri-error-warning-line text-xl"></i>
                    <span>Bir hata oluştu. Lütfen tekrar deneyin.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin"></i>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-fill"></i>
                      Mesaj Gönder
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16">
            <div className="bg-white rounded-3xl p-4 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.2345678901234!2d30.7133!3d36.8969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUzJzQ4LjgiTiAzMMKwNDInNDcuOSJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '1.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Diyetisyen Ayşenur Korkmaz Konum"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Add before Footer */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-serif text-gray-900 mb-12 text-center">
            Sıkça Sorulan <span className="text-emerald-600">Sorular</span>
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details key={index} className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                  <i className="ri-arrow-down-s-line text-2xl text-emerald-600 group-open:rotate-180 transition-transform flex-shrink-0"></i>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;