// lib/data/apps.ts

export type AppInfo = {
  id: string;
  title: string;
  description: string;
  icon: string;
  releaseDate: string;
  testFlightUrl?: string;
  screenshots?: string[];
};

export const apps: AppInfo[] = [
  {
    id: 'polmomo',
    title: 'polmomo',
    description: '感情を記録して、後から振り返るアプリ。',
    icon: '/icons/polmomo.png',
    releaseDate: '2025-07-01',
    testFlightUrl: 'https://testflight.apple.com/join/xxxxx',
    screenshots: ['/screenshots/polmomo-1.png', '/screenshots/polmomo-2.png'],
  },
  {
    id: 'kaffee',
    title: 'kaffee',
    description: '詩的な日記を書くためのUI。',
    icon: '/icons/icon2.png',
    releaseDate: '2025-07-02',
    testFlightUrl: 'https://testflight.apple.com/join/yyyyy',
    screenshots: ['/screenshots/kaffee-1.png'],
  },
  {
    id: 'fragmenta',
    title: 'fragmenta',
    description: '展示を記録して管理するギャラリー。',
    icon: '/icons/icon3.png',
    releaseDate: '2025-07-03',
    testFlightUrl: 'https://testflight.apple.com/join/zzzzz',
    screenshots: ['/screenshots/fragmenta-1.png'],
  },
];