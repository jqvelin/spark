import type { ComponentPropsWithRef } from 'react';

import { MenuIcon } from 'lucide-react';

import {
  Button,
  Logo,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/shared/ui';
import { cn } from '@/shared/utils';

import { Navbar } from './Navbar';

export const MobileNavbar = ({ className, ...props }: ComponentPropsWithRef<'div'>) => (
  <Sheet>
    <SheetTrigger asChild className='inline md:hidden'>
      <Button variant="outline">
        <MenuIcon className='size-4'/>
      </Button>
    </SheetTrigger>
    <SheetContent side='left'>
      <SheetHeader>
        <SheetTitle>Навигация</SheetTitle>
      </SheetHeader>
      <div className={cn('flex flex-col justify-between h-full p-6', className)} {...props}>
        <Navbar className='flex-col items-start' />
        <div className='flex items-center gap-3'>
          <Logo />
          <span
            className="text-lg md:text-xl font-bold text-accent-foreground"
          >
            Spark, {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);
