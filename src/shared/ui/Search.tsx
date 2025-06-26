import type { ComponentPropsWithRef } from 'react';

import { SearchIcon } from 'lucide-react';

import { cn } from '../utils';
import { Input } from './input';

export const Search = ({ className, placeholder, ...props }:
ComponentPropsWithRef<'input'>) => {
  return (
    <div className={cn('relative w-60', className)} {...props}>
      <SearchIcon
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4"
      />
      <Input
        placeholder={placeholder}
        className='pl-10'
      />
    </div>
  );
};
