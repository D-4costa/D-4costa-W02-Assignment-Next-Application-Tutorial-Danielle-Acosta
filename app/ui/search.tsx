'use client';

import type { ChangeEvent } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

type SearchProps = {
  placeholder: string;
};

export default function Search({ placeholder }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
  };

  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={searchParams.get('query')?.toString()}
      style={{
        width: '100%',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #f3c4d7',
      }}
    />
  );
}
