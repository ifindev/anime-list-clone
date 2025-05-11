import type { AnimeTrailerProps } from '../anime-detail.types';

/**
 * Component for displaying an anime trailer
 */
export default function AnimeTrailer({ trailer, title, className = '' }: AnimeTrailerProps) {
    if (!trailer?.youtube_id) {
        return null;
    }

    return (
        <div
            className={`bg-white rounded-lg shadow-md overflow-hidden p-4 mt-4 border-t border-gray-100 ${className}`}
        >
            <h3 className="font-bold text-lg mb-4">Trailer</h3>
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                    src={`https://www.youtube.com/embed/${trailer.youtube_id}`}
                    title={`${title} Trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[300px] md:h-[400px] rounded-lg"
                ></iframe>
            </div>
        </div>
    );
}
