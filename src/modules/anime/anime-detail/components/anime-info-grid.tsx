import type { AnimeInfoGridProps } from '../anime-detail.types';

/**
 * Component for displaying a grid of anime information
 */
export default function AnimeInfoGrid({ animeDetails, className = '' }: AnimeInfoGridProps) {
    return (
        <div className={`grid grid-cols-2 gap-2 mb-4 text-sm ${className}`}>
            <div className="flex flex-col">
                <span className="text-gray-500">Type</span>
                <span className="font-medium">{animeDetails.type || 'Unknown'}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-gray-500">Episodes</span>
                <span className="font-medium">{animeDetails.episodes || 'Unknown'}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-gray-500">Status</span>
                <span className="font-medium">{animeDetails.status}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-gray-500">Aired</span>
                <span className="font-medium">{animeDetails.aired.string}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-gray-500">Duration</span>
                <span className="font-medium">{animeDetails.duration}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-gray-500">Rating</span>
                <span className="font-medium">{animeDetails.rating || 'Unknown'}</span>
            </div>
        </div>
    );
}
