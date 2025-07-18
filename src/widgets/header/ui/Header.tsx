import { UserIcon } from 'lucide-react';

import { Button, Logo, Search } from '@/shared/ui';

import { MobileNavbar } from './MobileNavbar';
import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-header flex items-center border-b z-header bg-background/90 backdrop-blur-xs">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <HeaderLeft />
          <HeaderRight />
        </div>
      </div>
    </header>
  );
};

const HeaderLeft = () => (
  <div className="flex items-center gap-8">
    <div className="flex items-center gap-3">
      <Logo className='hidden md:inline' />
      <span
        className="hidden md:inline text-lg md:text-xl font-bold text-accent-foreground"
      >
        Spark
      </span>
      <MobileNavbar className='flex md:hidden' />
    </div>
    <Navbar className='hidden md:flex' />
  </div>
);

const HeaderRight = () => (
  <div className="flex items-center gap-4">
    <Search
      placeholder="Искать трек..."
      className='w-40 md:w-60'
    />
    <Button>
      <span className='hidden md:inline'>Войти</span>
      <UserIcon className="size-4" />
    </Button>
  </div>
);
