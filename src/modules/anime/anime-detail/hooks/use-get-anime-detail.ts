import { useQuery } from '@tanstack/react-query';
import {
    ANIME_DETAIL_API_BASE_URL,
    CACHE_GC_TIME,
    CACHE_STALE_TIME,
} from '../anime-detail.constants';
import type { AnimeResponse } from '../anime-detail.types';

/**
 * Custom hook for fetching anime detail data
 */
export function useGetAnimeDetail(animeId: string | undefined) {
    return useQuery<AnimeResponse>({
        queryKey: ['animeDetail', animeId],
        queryFn: async () => {
            if (!animeId) {
                throw new Error('Anime ID is required');
            }

            const response = await fetch(`${ANIME_DETAIL_API_BASE_URL}/${animeId}/full`);

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            return response.json();
        },
        enabled: !!animeId,
        staleTime: CACHE_STALE_TIME,
        gcTime: CACHE_GC_TIME,
        refetchOnWindowFocus: false,
    });
}
