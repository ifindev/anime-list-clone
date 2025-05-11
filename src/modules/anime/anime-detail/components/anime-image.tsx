import type { AnimeImageProps } from '../anime-detail.types';

/**
 * Component for displaying an anime image with mobile stats
 */
export default function AnimeImage({ animeDetails, className = '' }: AnimeImageProps) {
    return (
        <div className={`md:w-1/3 p-4 ${className}`}>
            <div className="relative pb-[150%] overflow-hidden rounded-lg shadow-md">
                <img
                    src={animeDetails.images.jpg.large_image_url}
                    alt={animeDetails.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Stats for mobile view */}
            <div className="mt-4 space-y-2 md:hidden">
                <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="font-bold">{animeDetails.score || 'N/A'}</span>
                    <span className="text-gray-500 text-sm ml-1">
                        ({animeDetails.scored_by?.toLocaleString() || 0} users)
                    </span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                    {animeDetails.genres.map((genre) => (
                        <span
                            key={genre.mal_id}
                            className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded"
                        >
                            {genre.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
