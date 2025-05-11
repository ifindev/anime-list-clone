/**
 * Anime data interface from the API
 */
export interface AnimeData {
    mal_id: number;
    title: string;
    images: {
        jpg: {
            image_url: string;
            large_image_url: string;
        };
    };
    synopsis: string;
    status: string;
    score: number;
}

/**
 * Pagination data interface from the API
 */
export interface PaginationData {
    current_page: number;
    has_next_page: boolean;
    items: {
        count: number;
        per_page: number;
        total: number;
    };
    last_visible_page: number;
}

/**
 * Anime API response interface
 */
export interface AnimeResponse {
    data: AnimeData[];
    pagination: PaginationData;
}
