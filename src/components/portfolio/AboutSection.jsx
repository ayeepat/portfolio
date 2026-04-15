import { useLang } from '../../lib/LanguageContext.jsx';
import { motion } from 'framer-motion';

export default function AboutSection({ portraitImg }) {
  const { t } = useLang();

  const bioRu = `Александр Куперсмит родился 10 октября 2009 года в Вашингтоне, США. С ранних лет он совмещал академическую подготовку и серьёзные занятия спортом. Обучался в Российской посольской школе в Вашингтоне, затем в World International School of Sports, где выступал за хоккейную команду в позиции нападающего.

В 2020 году семья переехала в Россию. Александр продолжил образование в московских школах № 1341, № 1770 и № 1353. Во время пандемии шесть месяцев прожил в Сочи.

В 2023–2024 годах перешёл в ПФК «Лужники», а затем в Академию «Торпедо» (Москва). Александр — выпускник музыкальной школы с красным дипломом, победитель множества международных конкурсов. Он четырёхкратный обладатель звания лучшего вратаря (включая «Торпедо»).`;

  const bioEn = `Alexander Kupersmith was born on October 10, 2009, in Washington, D.C., USA. From an early age he combined academic studies with serious sports training. He attended the Russian Embassy School in Washington and later the World International School of Sports, where he played ice hockey as a forward.

In 2020 the family relocated to Russia. Alexander continued his education at Moscow schools № 1341, № 1770 and № 1353. During the pandemic he spent six months in Sochi.

In 2023–2024 he joined PFC Luzhniki and then moved to the Torpedo Moscow Academy. Alexander is a graduate of music school with honors (red diploma) and winner of numerous international competitions. He is a four-time Best Goalkeeper award recipient (including at Torpedo).`;

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#08090A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          <motion.div
            className="md:col-span-2 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img src={portraitImg} alt="Alexander Kupersmith" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090A]/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#C9A87C]/20 rounded-xl" />
          </motion.div>

          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#C9A87C] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              {t('Обо мне', 'About me')}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8 leading-tight">
              {t('Биография', 'Biography')}
            </h2>
            <div className="space-y-4 text-[#8E9AAF] text-base leading-relaxed">
              {t(bioRu, bioEn).split('\n\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/5">
              {[
                { num: '4×', label: t('Лучший вратарь', 'Best Goalkeeper') },
                { num: 'Top 100', label: t('Бомбардиров', 'Scorers') },
                { num: '2009', label: t('Год рождения', 'Year of birth') },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-bold text-[#C9A87C] font-mono">{stat.num}</div>
                  <div className="text-xs text-[#8E9AAF] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}