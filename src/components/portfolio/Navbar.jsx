import { useState, useEffect } from 'react';
import { useLang } from '../../lib/LanguageContext.jsx';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { ru: 'Главная', en: 'Home', id: 'hero' },
  { ru: 'Обо мне', en: 'About', id: 'about' },
  { ru: 'Образование', en: 'Education', id: 'education' },
  { ru: 'Карьера', en: 'Career', id: 'career' },
  { ru: 'Достижения', en: 'Achievements', id: 'achievements' },
  { ru: 'Галерея', en: 'Gallery', id: 'gallery' },
  { ru: 'Контакты', en: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const { lang, toggle, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A0B0D]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="text-lg font-semibold tracking-tight text-white hover:text-[#C9A87C] transition-colors">
          AK
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-[#8E9AAF] hover:text-white transition-colors duration-300 tracking-wide"
            >
              {t(item.ru, item.en)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggle}
            className="relative flex items-center h-8 bg-white/5 rounded-full px-1 border border-white/10 active:scale-95 transition-transform"
          >
            <span className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${lang === 'ru' ? 'bg-[#C9A87C] text-[#08090A]' : 'text-[#8E9AAF]'}`}>
              RU
            </span>
            <span className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${lang === 'en' ? 'bg-[#C9A87C] text-[#08090A]' : 'text-[#8E9AAF]'}`}>
              EN
            </span>
          </button>

          <a
            href="https://t.me/Kupersmi"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center px-4 py-2 text-xs font-semibold text-[#08090A] bg-[#C9A87C] rounded-full hover:shadow-[0_0_20px_rgba(201,168,124,0.4)] transition-all duration-300"
          >
            {t('Связаться', 'Get in touch')}
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded-lg active:bg-white/10 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile dropdown — smooth slide */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden bg-[#0A0B0D]/98 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                  className="block w-full text-left text-sm text-[#8E9AAF] hover:text-white active:text-[#C9A87C] transition-colors py-3 px-2 rounded-lg hover:bg-white/5 active:bg-white/10"
                >
                  {t(item.ru, item.en)}
                </motion.button>
              ))}
              <motion.a
                href="https://t.me/Kupersmi"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navItems.length * 0.04 + 0.05 }}
                className="block text-center px-4 py-3 text-sm font-semibold text-[#08090A] bg-[#C9A87C] rounded-full mt-3 active:scale-95 transition-transform"
              >
                {t('Связаться', 'Get in touch')}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}