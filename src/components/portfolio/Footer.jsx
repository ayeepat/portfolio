import { useLang } from '../../lib/LanguageContext.jsx';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#08090A] border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[#8E9AAF]/50 text-sm">
          © {new Date().getFullYear()} Alexander Kupersmith. {t('Все права защищены', 'All rights reserved')}.
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://t.me/Kupersmi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8E9AAF]/50 text-sm hover:text-[#C9A87C] transition-colors"
          >
            Telegram
          </a>
          <a
            href="https://tiktok.com/@kuper639"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8E9AAF]/50 text-sm hover:text-[#C9A87C] transition-colors"
          >
            TikTok @kuper639
          </a>
        </div>
      </div>
    </footer>
  );
}