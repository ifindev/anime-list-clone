import { useQuery } from '@tanstack/react-query';
import { ANIME_API_BASE_URL, CACHE_GC_TIME, CACHE_STALE_TIME } from '../anime-list.constants';
import type { AnimeResponse } from '../anime-list.types';

/**
 * Custom hook for fetching anime data from the API
 */
export function useGetAnimeList(debouncedSearch: string, page: number, limit: number) {
    return useQuery<AnimeResponse>({
        queryKey: ['animeSearch', debouncedSearch, page, limit],
        queryFn: async () => {
            let url = ANIME_API_BASE_URL;

            // Add search parameter if search term exists
            if (debouncedSearch) {
                url += `?q=${encodeURIComponent(debouncedSearch)}&page=${page}`;
            } else {
                url += `?page=${page}`;
            }

            // Add limit parameter
            url += `&limit=${limit}`;

            // Add sfw parameter to exclude NSFW content
            url += `&sfw=true`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            return response.json();
        },
        staleTime: CACHE_STALE_TIME, // Data stays fresh for defined time
        gcTime: CACHE_GC_TIME, // Cache is kept for defined time
        refetchOnWindowFocus: false,
    });
}
