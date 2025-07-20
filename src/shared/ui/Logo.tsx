import Image, { type ImageProps } from 'next/image';

import { cn } from '../utils';

export const Logo = ({ className, ...props }: Partial<ImageProps>) => (
  <Image
    src='/logo.svg'
    height={50}
    width={50}
    alt='Logo'
    unoptimized
    priority
    className={cn('rounded-sm', className)}
    { ...props }
  />
);
