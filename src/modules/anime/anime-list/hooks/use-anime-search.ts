import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../../../hooks/use-debounce';
import {
    DEFAULT_PAGINATION_LIMIT,
    DEFAULT_PAGINATION_PAGE,
    SEARCH_DEBOUNCE_DELAY,
} from '../anime-list.constants';

// Keys for sessionStorage
const STORAGE_KEYS = {
    SEARCH: 'anime_search_query',
    PAGE: 'anime_search_page',
    LIMIT: 'anime_search_limit',
};

/**
 * Custom hook for handling anime search and pagination parameters
 */
export function useAnimeSearch() {
    const [searchParams, setSearchParams] = useSearchParams();

    // Get initial values from URL, sessionStorage or use defaults
    const [search, setSearch] = useState(() => {
        const urlParam = searchParams.get('q');
        if (urlParam) return urlParam;

        const storedSearch = sessionStorage.getItem(STORAGE_KEYS.SEARCH);
        return storedSearch || '';
    });

    const [page, setPage] = useState(() => {
        const urlParam = searchParams.get('page');
        if (urlParam) return parseInt(urlParam, 10);

        const storedPage = sessionStorage.getItem(STORAGE_KEYS.PAGE);
        return storedPage ? parseInt(storedPage, 10) : DEFAULT_PAGINATION_PAGE;
    });

    const [limit, setLimit] = useState<number>(() => {
        const urlParam = searchParams.get('limit');
        if (urlParam) return parseInt(urlParam, 10);

        const storedLimit = sessionStorage.getItem(STORAGE_KEYS.LIMIT);
        return storedLimit ? parseInt(storedLimit, 10) : DEFAULT_PAGINATION_LIMIT;
    });

    // Use the useDebounce hook to debounce the search value
    const debouncedSearch = useDebounce(search, SEARCH_DEBOUNCE_DELAY);

    // Store values in sessionStorage whenever they change
    useEffect(() => {
        if (debouncedSearch) {
            sessionStorage.setItem(STORAGE_KEYS.SEARCH, debouncedSearch);
        } else {
            sessionStorage.removeItem(STORAGE_KEYS.SEARCH);
        }
    }, [debouncedSearch]);

    useEffect(() => {
        sessionStorage.setItem(STORAGE_KEYS.PAGE, page.toString());
    }, [page]);

    useEffect(() => {
        sessionStorage.setItem(STORAGE_KEYS.LIMIT, limit.toString());
    }, [limit]);

    // Sync URL params with state
    useEffect(() => {
        const params = new URLSearchParams(searchParams);

        if (debouncedSearch) {
            params.set('q', debouncedSearch);
        } else {
            params.delete('q');
        }

        params.set('page', page.toString());
        params.set('limit', limit.toString());

        setSearchParams(params);
    }, [debouncedSearch, page, limit, setSearchParams, searchParams]);

    // Handle search input
    const handleSearchChange = (value: string) => {
        // Reset page to 1 immediately when search input changes
        if (value !== search) {
            setPage(1);
        }
        setSearch(value);
    };

    // When debouncedSearch changes, reset page
    useEffect(() => {
        if (debouncedSearch !== search) {
            setPage(1);
            setLimit(DEFAULT_PAGINATION_LIMIT);
        }
    }, [debouncedSearch, search]);

    // When limit changes, reset to first page
    useEffect(() => {
        setPage(1);
    }, [limit]);

    return {
        search,
        setSearch: handleSearchChange,
        debouncedSearch,
        page,
        setPage,
        limit,
        setLimit,
    };
}
