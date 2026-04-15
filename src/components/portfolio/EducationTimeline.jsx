import { useLang } from '../../lib/LanguageContext.jsx';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const events = [
  {
    year: '2009–2018',
    titleRu: 'Российская посольская школа',
    titleEn: 'Russian Embassy School',
    descRu: 'Вашингтон, США. Начало образования и первые шаги в спорте.',
    descEn: 'Washington, D.C., USA. Beginning of education and first steps in sports.',
    location: 'Washington, D.C.',
  },
  {
    year: '2018–2020',
    titleRu: 'World International School of Sports',
    titleEn: 'World International School of Sports',
    descRu: 'Выступал за хоккейную команду в позиции нападающего.',
    descEn: 'Played ice hockey as a forward for the school team.',
    location: 'USA',
  },
  {
    year: '2020',
    titleRu: 'Переезд в Россию',
    titleEn: 'Relocation to Russia',
    descRu: 'Семья переехала в Россию. Шесть месяцев в Сочи во время пандемии.',
    descEn: 'Family relocated to Russia. Six months in Sochi during the pandemic.',
    location: 'Sochi → Moscow',
  },
  {
    year: '2020–2023',
    titleRu: 'Московские школы',
    titleEn: 'Moscow Schools',
    descRu: 'Обучение в школах № 1341, № 1770 и № 1353.',
    descEn: 'Education at schools № 1341, № 1770 and № 1253.',
    location: 'Moscow',
  },
];

export default function EducationTimeline() {
  const { t } = useLang();

  return (
    <section id="education" className="relative py-24 md:py-32 bg-[#0C0D10]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A87C] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            {t('Образование', 'Education')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {t('Путь обучения', 'Educational Journey')}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A87C]/50 via-[#C9A87C]/20 to-transparent" />

          {events.map((event, i) => (
            <motion.div
              key={i}
              className={`relative flex items-start mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#C9A87C] rounded-full ring-4 ring-[#08090A] z-10" />

              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-[#14161A] border border-white/5 rounded-xl p-6 hover:border-[#C9A87C]/20 transition-colors duration-300">
                  <span className="text-[#C9A87C] text-xs font-mono font-medium">{event.year}</span>
                  <h3 className="text-white font-semibold text-lg mt-2">{t(event.titleRu, event.titleEn)}</h3>
                  <p className="text-[#8E9AAF] text-sm mt-2 leading-relaxed">{t(event.descRu, event.descEn)}</p>
                  <div className="flex items-center gap-1.5 mt-3 text-[#8E9AAF]/60 text-xs">
                    <MapPin size={12} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}