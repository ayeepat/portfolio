import { useLang } from '../../lib/LanguageContext.jsx';
import { motion } from 'framer-motion';
import { Music, Award } from 'lucide-react';

export default function MusicSection({ musicImg }) {
  const { t } = useLang();

  return (
    <section id="music" className="relative py-24 md:py-32 bg-[#08090A] overflow-hidden">
      <div className="absolute inset-0">
        <img src={musicImg} alt="Music" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090A] via-[#08090A]/90 to-[#08090A]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#C9A87C] text-sm font-medium tracking-[0.3em] uppercase mb-4">
              {t('Музыка', 'Music')}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              {t('Классическая музыка', 'Classical Music')}
            </h2>
            <p className="text-[#8E9AAF] text-base leading-relaxed mb-8">
              {t(
                'Александр — выпускник музыкальной школы с красным дипломом. Его талант подтверждён победами на множестве международных конкурсов. Музыкальная дисциплина и чувство ритма стали основой его спортивной карьеры.',
                'Alexander graduated from music school with honors (red diploma). His talent has been confirmed by victories at numerous international competitions. Musical discipline and sense of rhythm became the foundation of his sports career.'
              )}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-[#14161A] border border-white/5 rounded-xl p-5">
                <Award size={20} className="text-[#C9A87C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-sm">{t('Красный диплом', 'Honors Diploma')}</h4>
                  <p className="text-[#8E9AAF] text-xs mt-1">{t('Музыкальная школа', 'Music School')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-[#14161A] border border-white/5 rounded-xl p-5">
                <Music size={20} className="text-[#C9A87C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-sm">{t('Международные конкурсы', 'International Competitions')}</h4>
                  <p className="text-[#8E9AAF] text-xs mt-1">{t('Множество побед', 'Multiple victories')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/5">
              <img src={musicImg} alt="Music" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -inset-1 bg-[#C9A87C]/5 rounded-2xl blur-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}