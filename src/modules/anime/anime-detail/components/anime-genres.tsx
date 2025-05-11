import type { AnimeGenresProps } from '../anime-detail.types';

/**
 * Component for displaying anime genres
 */
export default function AnimeGenres({ genres, className = '' }: AnimeGenresProps) {
    return (
        <div className={`hidden md:block mb-4 ${className}`}>
            <div className="text-gray-500 mb-1">Genres</div>
            <div className="flex flex-wrap gap-1">
                {genres.map((genre) => (
                    <span
                        key={genre.mal_id}
                        className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded"
                    >
                        {genre.name}
                    </span>
                ))}
            </div>
        </div>
    );
}
