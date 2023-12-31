import useSWR from 'swr';
import { useMemo } from 'react';

import { fetcher, endpoints } from '@/utils/axios';

// ----------------------------------------------------------------------

export function useGetLibros() {
    const URL = endpoints.libro.list();
  
    const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  
    const memoizedValue = useMemo(
      () => ({
        libros: data || [],
        librosLoading: isLoading,
        librosError: error,
        librosValidating: isValidating,
        librosEmpty: !isLoading && !data.length,
      }),
      [data, error, isLoading, isValidating]
    );
  
    return memoizedValue;
  }