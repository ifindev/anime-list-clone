import { Link } from 'react-router-dom';
import type { AnimeData } from '../anime-list.types';

/**
 * Props for the anime card component
 */
export interface AnimeCardProps {
    anime: AnimeData;
}

/**
 * Component for displaying an anime card
 */
export default function AnimeCard({ anime }: AnimeCardProps) {
    return (
        <Link
            to={`/anime/${anime.mal_id}`}
            key={anime.mal_id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer h-full flex flex-col"
        >
            <div className="relative pb-[140%]">
                <img
                    src={anime.images.jpg.large_image_url}
                    alt={anime.title}
                    className="absolute w-full h-full object-cover top-0 left-0"
                />
            </div>
            <div className="p-2 sm:p-3 md:p-4 text-center font-medium text-gray-800 text-xs sm:text-sm md:text-base flex-grow flex items-center justify-center min-h-[60px] overflow-hidden min-w-0">
                <div className="line-clamp-2 w-full overflow-hidden break-words">{anime.title}</div>
            </div>
        </Link>
    );
}
