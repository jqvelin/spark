import type { ComponentPropsWithRef } from 'react';

import Image from 'next/image';

import { cn } from '@/shared/utils';

import type { Album } from '../model/album.type';

type Props = ComponentPropsWithRef<'img'> & {
  coverSrc: Album['coverSrc'],
  alt: string
};

export const AlbumCover = ({ coverSrc, alt, className, ...props }: Props) => {
  return <Image
    className={cn('aspect-square object-cover rounded-lg', className)}
    {...props}
    src={coverSrc || '/placeholder.svg'}
    alt={alt}
    width={150}
    height={150}
  />;
};
