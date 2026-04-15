import { useLang } from '../../lib/LanguageContext.jsx';
import { motion } from 'framer-motion';

export default function GallerySection({ images }) {
  const { t } = useLang();

  const heights = ['h-64', 'h-80', 'h-72', 'h-96', 'h-64', 'h-80', 'h-72', 'h-64', 'h-96', 'h-80'];

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-[#0C0D10]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A87C] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            {t('Галерея', 'Gallery')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {t('Моменты', 'Moments')}
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="break-inside-avoid group"
            >
              <div className={`relative overflow-hidden rounded-xl ${heights[i % heights.length]}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-sm font-medium">{img.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}