import { useLang } from '../../lib/LanguageContext.jsx';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function ContactSection({ bgImg }) {
  const { t } = useLang();

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#08090A] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={bgImg} alt="Background" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-[#08090A]/80 to-[#08090A]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#C9A87C] text-sm font-medium tracking-[0.3em] uppercase mb-6">
            {t('Контакты', 'Contact')}
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            {t('Готов к новым вызовам', 'Ready for New Challenges')}
          </h2>
          <p className="text-[#8E9AAF] text-lg mb-12 max-w-xl mx-auto">
            {t(
              'Свяжитесь через Telegram или TikTok',
              'Get in touch via Telegram or TikTok'
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://t.me/Kupersmi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9A87C] text-[#08090A] rounded-full font-semibold text-base hover:shadow-[0_0_40px_rgba(201,168,124,0.3)] transition-all duration-500 hover:scale-105"
            >
              <Send size={18} />
              Telegram
            </a>

            <a
              href="https://tiktok.com/@kuper639"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white border border-white/20 rounded-full font-semibold text-base hover:border-[#C9A87C]/60 hover:text-[#C9A87C] transition-all duration-500 hover:scale-105"
            >
              TikTok — @kuper639
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}