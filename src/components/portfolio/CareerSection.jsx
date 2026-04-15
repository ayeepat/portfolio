import { useLang } from '../../lib/LanguageContext.jsx';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const clubs = [
  {
    year: '2018–2020',
    nameRu: 'World International School of Sports',
    nameEn: 'World International School of Sports',
    roleRu: 'Хоккей — Нападающий',
    roleEn: 'Ice Hockey — Forward',
    location: 'USA',
    color: '#3B82F6',
  },
  {
    year: '2023–2024',
    nameRu: 'ПФК «Лужники»',
    nameEn: 'PFC Luzhniki',
    roleRu: 'Футбол — Вратарь',
    roleEn: 'Football — Goalkeeper',
    location: 'Moscow',
    color: '#EF4444',
  },
  {
    year: '2024–н.в.',
    nameRu: 'Академия «Торпедо»',
    nameEn: 'Torpedo Moscow Academy',
    roleRu: 'Футбол — Вратарь',
    roleEn: 'Football — Goalkeeper',
    location: 'Moscow',
    color: '#C9A87C',
  },
];

export default function CareerSection() {
  const { t } = useLang();

  return (
    <section id="career" className="relative py-24 md:py-32 bg-[#08090A]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A87C] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            {t('Карьера', 'Career')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {t('Спортивный путь', 'Sports Journey')}
          </h2>
        </motion.div>

        <div className="space-y-6">
          {clubs.map((club, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-[#14161A] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="text-sm font-mono text-[#8E9AAF] md:w-32 shrink-0">
                  {club.year}
                </div>
                <div className="w-3 h-3 rounded-full shrink-0 hidden md:block" style={{ backgroundColor: club.color }} />
                <div className="flex-1">
                  <h3 className="text-white text-xl font-semibold tracking-tight group-hover:text-[#C9A87C] transition-colors">
                    {t(club.nameRu, club.nameEn)}
                  </h3>
                  <p className="text-[#8E9AAF] text-sm mt-1">
                    {t(club.roleRu, club.roleEn)} · {club.location}
                  </p>
                </div>
                {i < clubs.length - 1 && (
                  <ArrowRight size={16} className="text-[#8E9AAF]/30 hidden md:block" />
                )}
              </div>

              {i === clubs.length - 1 && (
                <div className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#C9A87C] rounded-full animate-pulse" />
                  <span className="text-[#C9A87C] text-xs font-medium">
                    {t('Сейчас', 'Current')}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}