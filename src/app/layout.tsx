import { Geist } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Spark - слушайте музыку бесплатно и без ограничений. Всегда и везде.',
  description:
    'С помощью Spark вы сможете слушать и скачать популярные треки бесплатно,'
    + ' без подписок и рекламы в хорошем качестве.'
    + ' Исследуйте музыкальные новинки, изучайте дискографии артистов, '
    + ' создавайте плейлисты.'
};

const geist = Geist({
  display: 'swap'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}
