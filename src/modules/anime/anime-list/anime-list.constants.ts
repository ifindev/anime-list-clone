/**
 * Available items per page options
 */
export const ITEMS_PER_PAGE_OPTIONS = [5, 10, 15, 20, 25];

/**
 * Default pagination limit
 */
export const DEFAULT_PAGINATION_LIMIT = 15;

/**
 * Default pagination page
 */
export const DEFAULT_PAGINATION_PAGE = 1;

/**
 * API base URL
 */
export const ANIME_API_BASE_URL = 'https://api.jikan.moe/v4/anime';

/**
 * Debounce delay for search input in milliseconds
 */
export const SEARCH_DEBOUNCE_DELAY = 250;

/**
 * Cache stale time in milliseconds (5 minutes)
 */
export const CACHE_STALE_TIME = 5 * 60 * 1000;

/**
 * Cache garbage collection time in milliseconds (10 minutes)
 */
export const CACHE_GC_TIME = 10 * 60 * 1000;
