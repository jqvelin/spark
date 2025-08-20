import type { ComponentPropsWithRef } from 'react';

import Image from 'next/image';

import type { Artist } from '@/entities/artist';
import { cn } from '@/shared/utils';

type Props = ComponentPropsWithRef<'img'> & {
  imageSrc: Artist['imageSrc'],
  alt: string
};

export const ArtistImage = ({ imageSrc, alt, className, ...props }: Props) => (
  <Image
    className={cn('aspect-square object-cover rounded-sm', className)}
    {...props}
    src={imageSrc ?? '/placeholder.svg'}
    width={200}
    height={200}
    alt={alt}
  />
);
