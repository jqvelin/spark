import type { ComponentPropsWithRef } from 'react';

import Image from 'next/image';

import type { Album } from '@/entities/album';
import { cn } from '@/shared/utils';

type Props = ComponentPropsWithRef<'img'> & {
  coverSrc: Album['coverSrc'],
  alt: string
};

export const AlbumCover = ({ coverSrc, alt, className, ...props }: Props) => (
  <Image
    className={cn('aspect-square object-cover rounded-sm', className)}
    {...props}
    src={coverSrc ?? '/placeholder.svg'}
    width={200}
    height={200}
    alt={alt}
  />
);
