import { Geist } from 'next/font/google';

import { Header } from '@/widgets/header';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Spark - слушайте музыку бесплатно и без ограничений. Всегда и везде.',
    default: 'Spark - слушайте музыку бесплатно и без ограничений. Всегда и везде.'
  },
  description:
    'С помощью Spark вы сможете слушать и скачать популярные треки бесплатно,'
    + ' без подписок и рекламы в хорошем качестве.'
    + ' Исследуйте музыкальные новинки, изучайте дискографии артистов, '
    + ' создавайте плейлисты.'
};

const geist = Geist({
  display: 'swap'
});

const RootLayout = ({
  children
}: {
  children: React.ReactNode;
}) => (
  <html lang='ru'>
    <body className={geist.className}>
      <Header />
      <main>
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
