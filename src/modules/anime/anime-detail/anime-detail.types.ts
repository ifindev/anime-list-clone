/**
 * Interface for the anime full details response
 */
export interface AnimeFullDetails {
    mal_id: number;
    title: string;
    title_english: string;
    title_japanese: string;
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: {
        from: string;
        to: string;
        string: string;
    };
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    season: string;
    year: number;
    studios: Array<{ mal_id: number; name: string; type: string }>;
    genres: Array<{ mal_id: number; name: string; type: string }>;
    images: {
        jpg: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
        webp: {
            image_url: string;
            small_image_url: string;
            large_image_url: string;
        };
    };
    trailer: {
        youtube_id: string;
        url: string;
        embed_url: string;
    };
}

/**
 * Interface for the anime API response
 */
export interface AnimeResponse {
    data: AnimeFullDetails;
}

/**
 * Props for the anime detail components
 */
export interface AnimeDetailNavbarProps {
    className?: string;
}

export interface AnimeBasicInfoProps {
    animeDetails: AnimeFullDetails;
    className?: string;
}

export interface AnimeImageProps {
    animeDetails: AnimeFullDetails;
    className?: string;
}

export interface AnimeInfoGridProps {
    animeDetails: AnimeFullDetails;
    className?: string;
}

export interface AnimeGenresProps {
    genres: Array<{ mal_id: number; name: string; type: string }>;
    className?: string;
}

export interface AnimeStudiosProps {
    studios: Array<{ mal_id: number; name: string; type: string }>;
    className?: string;
}

export interface AnimeSynopsisProps {
    synopsis: string;
    className?: string;
}

export interface AnimeTrailerProps {
    trailer: {
        youtube_id: string;
        url: string;
        embed_url: string;
    };
    title: string;
    className?: string;
}

export interface AnimeLoadingSkeletonProps {
    className?: string;
}

export interface AnimeErrorStateProps {
    className?: string;
}
