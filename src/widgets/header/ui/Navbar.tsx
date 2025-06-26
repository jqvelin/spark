'use client';

import type { ComponentPropsWithRef } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/shared/ui';
import { cn } from '@/shared/utils';

import { NAVBAR_LINKS } from '../config/navbarLinks';

export const Navbar = ({ className,  ...props }: ComponentPropsWithRef<'nav'>) => {
  const pathname = usePathname();

  return (
    <nav className={cn('flex items-center gap-3', className)} {...props}>
      {NAVBAR_LINKS.map(({ link, label }) => (
        <Button variant={pathname === link ? 'default' : 'ghost'} asChild key={link}>
          <Link href={link}>
            {label}
          </Link>
        </Button>
      ))}
    </nav>
  );
};
