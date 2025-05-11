import { useCallback } from 'react';
import type { PaginationData } from '../anime-list.types';

/**
 * Interface for the pagination hook parameters
 */
interface UsePaginationParams {
    pagination: PaginationData | undefined;
    setPage: (page: number) => void;
    setLimit: (limit: number) => void;
}

/**
 * Custom hook for handling pagination actions
 */
export function usePagination({ pagination, setPage, setLimit }: UsePaginationParams) {
    const handleNextPage = useCallback(() => {
        if (pagination?.has_next_page) {
            setPage(pagination.current_page + 1);
        }
    }, [pagination, setPage]);

    const handlePrevPage = useCallback(() => {
        if (pagination && pagination.current_page > 1) {
            setPage(pagination.current_page - 1);
        }
    }, [pagination, setPage]);

    const handleFirstPage = useCallback(() => {
        setPage(1);
    }, [setPage]);

    const handleLastPage = useCallback(() => {
        if (pagination?.last_visible_page) {
            setPage(pagination.last_visible_page);
        }
    }, [pagination, setPage]);

    const handleLimitChange = useCallback(
        (newLimit: number) => {
            setLimit(newLimit);
        },
        [setLimit],
    );

    return {
        handleNextPage,
        handlePrevPage,
        handleFirstPage,
        handleLastPage,
        handleLimitChange,
    };
}
