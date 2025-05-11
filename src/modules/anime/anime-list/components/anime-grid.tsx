import type { AnimeData } from '../anime-list.types';
import AnimeCard from './anime-card';

/**
 * Props for the anime grid component
 */
export interface AnimeGridProps {
    animeList: AnimeData[];
    className?: string;
}

/**
 * Component for displaying a grid of anime
 */
export default function AnimeGrid({ animeList, className = '' }: AnimeGridProps) {
    return (
        <div
            className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-6 ${className}`}
        >
            {animeList.map((anime) => (
                <AnimeCard key={anime.mal_id} anime={anime} />
            ))}
        </div>
    );
}
