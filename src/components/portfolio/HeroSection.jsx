import { useLang } from '../../lib/LanguageContext.jsx';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection({ sportsImg, musicImg }) {
  const { t } = useLang();

  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-[#08090A]">
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full relative overflow-hidden">
          <img src={sportsImg} alt="Sports" className="absolute inset-0 w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090A] via-transparent to-[#08090A]" />
        </div>
        <div className="w-1/2 h-full relative overflow-hidden">
          <img src={musicImg} alt="Trophy" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#08090A] via-transparent to-[#08090A]" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#08090A]/60 via-transparent to-[#08090A]" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[12vw] md:text-[10vw] font-bold text-white/[0.025] tracking-tighter whitespace-nowrap select-none">
          ATHLETE / MUSICIAN
        </span>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-[#C9A87C] text-sm font-medium tracking-[0.3em] uppercase mb-6">
            {t('Спортсмен • Музыкант • Победитель', 'Athlete • Musician • Champion')}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight mb-6"
        >
          {t('Александр', 'Alexander')}
          <br />
          <span className="text-[#C9A87C]">{t('Куперсмит', 'Coopersmith')}</span>
        </motion.h1>

      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[#8E9AAF] text-xs tracking-widest uppercase">
          {t('Листай', 'Scroll')}
        </span>
        <ChevronDown size={16} className="text-[#C9A87C]" />
      </motion.div>
    </section>
  );
}