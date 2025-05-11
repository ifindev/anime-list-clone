import type { AnimeStudiosProps } from '../anime-detail.types';

/**
 * Component for displaying anime studios
 */
export default function AnimeStudios({ studios, className = '' }: AnimeStudiosProps) {
    return (
        <div className={`mb-6 ${className}`}>
            <div className="text-gray-500 mb-1">Studios</div>
            <div className="flex flex-wrap gap-1">
                {studios.length > 0 ? (
                    studios.map((studio) => (
                        <span
                            key={studio.mal_id}
                            className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                        >
                            {studio.name}
                        </span>
                    ))
                ) : (
                    <span className="text-gray-500">Unknown</span>
                )}
            </div>
        </div>
    );
}
