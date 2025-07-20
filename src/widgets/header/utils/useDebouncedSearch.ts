import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { PAGES } from '@/shared/config';

export const useDebouncedSearch = (searchQuery: string) => {
  const router = useRouter();

  useEffect(() => {
    if(!searchQuery) return;

    let timeout: ReturnType<typeof setTimeout> | null = null;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      router.push(PAGES.search(searchQuery));
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchQuery]);
};
