import type { AnimeBasicInfoProps } from '../anime-detail.types';

/**
 * Component for displaying basic anime information (title, score, etc.)
 */
export default function AnimeBasicInfo({ animeDetails, className = '' }: AnimeBasicInfoProps) {
    return (
        <>
            <h1 className={`text-2xl md:text-3xl font-bold text-gray-800 mb-2 ${className}`}>
                {animeDetails.title}
            </h1>

            {animeDetails.title_english && animeDetails.title_english !== animeDetails.title && (
                <h2 className="text-xl text-gray-600 mb-2">{animeDetails.title_english}</h2>
            )}

            {animeDetails.title_japanese && (
                <h3 className="text-sm text-gray-500 mb-4">{animeDetails.title_japanese}</h3>
            )}

            {/* Stats for tablet/desktop */}
            <div className="hidden md:flex items-center mb-4">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="font-bold">{animeDetails.score || 'N/A'}</span>
                <span className="text-gray-500 text-sm ml-1">
                    ({animeDetails.scored_by?.toLocaleString() || 0} users)
                </span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-gray-600">
                    Rank #{animeDetails.rank} | Popularity #{animeDetails.popularity}
                </span>
            </div>
        </>
    );
}
