import { useLang } from '../../lib/LanguageContext.jsx';
import { motion } from 'framer-motion';
import { Trophy, Medal, Target, Snowflake, Star, TrendingUp } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    titleRu: 'Чемпион Москвы',
    titleEn: 'Moscow Champion',
    descRu: '4-я лига, команды 2006 г.р.',
    descEn: '4th League, 2006 age group',
    year: '2023',
  },
  {
    icon: Medal,
    titleRu: 'Бронзовый призёр',
    titleEn: 'Bronze Medalist',
    descRu: '4-я лига, 2009 г.р.',
    descEn: '4th League, 2009 age group',
    year: '2024',
  },
  {
    icon: Trophy,
    titleRu: 'Зимний Чемпион Москвы',
    titleEn: 'Moscow Winter Champion',
    descRu: '1-я лига, 2009 г.р.',
    descEn: '1st League, 2009 age group',
    year: '2024',
  },
  {
    icon: Star,
    titleRu: 'Всемирный день футбола',
    titleEn: 'World Football Day',
    descRu: 'Чемпион',
    descEn: 'Champion',
    year: '2024',
  },
  {
    icon: Target,
    titleRu: 'Чемпион по паделу',
    titleEn: 'Padel Champion',
    descRu: 'Рейтинг 2.91',
    descEn: 'Rating 2.91',
    year: '2024',
  },
  {
    icon: Medal,
    titleRu: 'Серебро «Лужников»',
    titleEn: 'Luzhniki Silver',
    descRu: 'Серебряный чемпионат',
    descEn: 'Silver Championship',
    year: '2024',
  },
  {
    icon: Snowflake,
    titleRu: 'Чемпион по сноуборду',
    titleEn: 'Snowboard Champion',
    descRu: 'Чемпион 2018 года',
    descEn: '2018 Champion',
    year: '2018',
  },
  {
    icon: TrendingUp,
    titleRu: 'Топ-100 бомбардиров',
    titleEn: 'Top 100 Scorers',
    descRu: 'Сезон 2025/26 среди ~3000 игроков, Pari Amateur League',
    descEn: '2025/26 season among ~3,000 players, Pari Amateur League',
    year: '2025',
  },
];

export default function AchievementsSection() {
  const { t } = useLang();

  return (
    <section id="achievements" className="relative py-24 md:py-32 bg-[#0C0D10]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A87C] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            {t('Достижения', 'Achievements')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {t('Коллекция побед', 'Collection of Victories')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group bg-[#14161A] border border-white/5 rounded-xl p-6 hover:border-[#C9A87C]/30 hover:bg-[#14161A]/80 transition-all duration-500 cursor-default"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon size={20} className="text-[#C9A87C]" />
                  <span className="text-xs font-mono text-[#8E9AAF]/60">{item.year}</span>
                </div>
                <h3 className="text-white font-semibold text-base mb-1">
                  {t(item.titleRu, item.titleEn)}
                </h3>
                <p className="text-[#8E9AAF] text-sm leading-relaxed">
                  {t(item.descRu, item.descEn)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}