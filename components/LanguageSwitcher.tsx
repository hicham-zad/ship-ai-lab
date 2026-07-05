'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = () => {
        const newLocale = locale === 'en' ? 'es' : 'en';
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <button
            onClick={switchLocale}
            className="fixed top-5 right-5 z-50 flex items-center gap-2 px-3 py-2 bg-black text-white rounded-full font-semibold text-sm hover:scale-110 transition-all shadow-lg hover:shadow-xl"
            aria-label="Switch language"
        >
            <Globe className="w-4 h-4" />
            <span className="text-sm">{locale === 'en' ? 'ES' : 'EN'}</span>
        </button>
    );
}
