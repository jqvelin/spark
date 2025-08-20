'use client';

import { useState, type ComponentPropsWithRef } from 'react';

import { SearchIcon } from 'lucide-react';

import { Input } from '@/shared/ui';
import { cn } from '@/shared/utils';

import { useDebouncedSearch } from '../utils/useDebouncedSearch';

export const Search = ({ className, ...props }:
ComponentPropsWithRef<'input'>) => {
  const [searchQuery, setSearchQuery] = useState('');

  useDebouncedSearch(searchQuery);

  return (
    <div className={cn('relative w-60', className)} {...props}>
      <SearchIcon
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4"
      />
      <Input
        className='pl-10'
        placeholder='Искать трек...'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
    </div>
  );
};
