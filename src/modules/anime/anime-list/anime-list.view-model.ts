import { useAnimeSearch } from './hooks/use-anime-search';
import { useGetAnimeList } from './hooks/use-get-anime-list';
import { usePagination } from './hooks/use-pagination';
import { ITEMS_PER_PAGE_OPTIONS } from './anime-list.constants';
import type { AnimeData, PaginationData } from './anime-list.types';

/**
 * Interface for the anime list view model
 */
export interface AnimeListViewModel {
    search: string;
    setSearch: (value: string) => void;
    page: number;
    setPage: (page: number) => void;
    limit: number;
    setLimit: (limit: number) => void;
    itemsPerPageOptions: readonly number[];
    animeList: AnimeData[];
    pagination: PaginationData | undefined;
    isLoading: boolean;
    isFetching: boolean;
    isError: boolean;
    error: Error | null;
    refetch: () => void;
    handleNextPage: () => void;
    handlePrevPage: () => void;
    handleFirstPage: () => void;
    handleLastPage: () => void;
}

/**
 * View model for the anime list view
 */
export function useAnimeListViewModel(): AnimeListViewModel {
    // Use the custom hooks
    const { search, setSearch, debouncedSearch, page, setPage, limit, setLimit } = useAnimeSearch();

    const { data, isError, error, refetch, isFetching, isLoading } = useGetAnimeList(
        debouncedSearch,
        page,
        limit,
    );

    const { handleNextPage, handlePrevPage, handleFirstPage, handleLastPage, handleLimitChange } =
        usePagination({
            pagination: data?.pagination,
            setPage,
            setLimit,
        });

    // Return the view model
    return {
        search,
        setSearch,
        page,
        setPage,
        limit,
        setLimit: handleLimitChange,
        itemsPerPageOptions: ITEMS_PER_PAGE_OPTIONS,
        animeList: data?.data || [],
        pagination: data?.pagination,
        isLoading,
        isFetching,
        isError,
        error: error as Error | null,
        refetch,
        handleNextPage,
        handlePrevPage,
        handleFirstPage,
        handleLastPage,
    };
}

// Re-export types for convenience
export type { AnimeData, PaginationData } from './anime-list.types';
