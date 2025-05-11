import { useParams } from 'react-router-dom';
import { useGetAnimeDetail } from './hooks/use-get-anime-detail';
import type { AnimeFullDetails } from './anime-detail.types';

/**
 * Interface for the anime detail view model
 */
export interface AnimeDetailViewModel {
    animeDetails: AnimeFullDetails | undefined;
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
}

/**
 * View model for the anime detail view
 */
export function useAnimeDetailViewModel(): AnimeDetailViewModel {
    // Get the anime ID from the URL params
    const { animeId } = useParams<{ animeId: string }>();

    // Fetch anime details using our custom hook
    const { data, isLoading, isError, error } = useGetAnimeDetail(animeId);

    return {
        animeDetails: data?.data,
        isLoading,
        isError,
        error: error as Error | null,
    };
}

// Re-export types for convenience
export type { AnimeFullDetails } from './anime-detail.types';
