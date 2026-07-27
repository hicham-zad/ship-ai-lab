'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { ChangeEvent } from 'react';

const LOCALES = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'pt', label: 'PT', flag: '🇧🇷' },
  { code: 'ar', label: 'AR', flag: '🇸🇦' },
  { code: 'it', label: 'IT', flag: '🇮🇹' },
  { code: 'nl', label: 'NL', flag: '🇳🇱' },
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
  { code: 'ja', label: 'JA', flag: '🇯🇵' },
];

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (e: ChangeEvent<HTMLSelectElement>) => {
        router.replace(pathname, { locale: e.target.value });
    };

    const currentLocale = LOCALES.find(l => l.code === locale);

    return (
        <div className="relative flex items-center">
            <select
                value={locale}
                onChange={switchLocale}
                className="appearance-none bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 text-xs font-bold rounded-full pl-4 pr-3 py-2 cursor-pointer outline-none border-none"
                aria-label="Switch language"
            >
                {LOCALES.map(({ code, label, flag }) => (
                    <option key={code} value={code}>{flag} {label}</option>
                ))}
            </select>
        </div>
    );
}
