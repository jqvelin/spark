import type { ComponentPropsWithRef } from 'react';

import Image from 'next/image';

import { cn } from '@/shared/utils';

import type { Artist } from '../model/artist.type';

type Props = ComponentPropsWithRef<'img'> & {
  imageSrc: Artist['imageSrc'],
  alt: string
};

export const ArtistImage = ({ imageSrc, alt, className, ...props }: Props) => (
  <Image
    className={cn('aspect-square object-cover rounded-lg', className)}
    {...props}
    src={imageSrc || '/placeholder.svg'}
    alt={alt}
    width={150}
    height={150}
  />
);
