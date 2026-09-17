export const locales = ['en-gb', 'bn'] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string | undefined): value is Locale {
  return value === 'en-gb' || value === 'bn';
}

export const translations = {
  'en-gb': {
    title: 'Salman Shafi | Unix/Linux Systems & Network Engineer',
    description: 'Professional Unix/Linux Systems & Network Engineer from Bogura, Bangladesh. Specialised in DNS, mail infrastructure, Linux, WireGuard VPN, Podman containers, and self-hosted services.',
    language: 'Language',
    english: 'English',
    bengali: 'বাংলা',
  },
  bn: {
    title: 'সালমান শাফি | Unix/Linux Systems & Network Engineer',
    description: 'বগুড়া, বাংলাদেশের একজন Unix/Linux Systems & Network Engineer। DNS, mail infrastructure, Linux, WireGuard VPN, Podman containers এবং self-hosted services-এ বিশেষজ্ঞ।',
    language: 'ভাষা',
    english: 'English',
    bengali: 'বাংলা',
  },
} as const;
