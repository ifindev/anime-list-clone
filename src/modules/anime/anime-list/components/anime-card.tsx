import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { AnimeData } from '../anime-list.types';

/**
 * Props for the anime card component
 */
export interface AnimeCardProps {
    anime: AnimeData;
    className?: string;
}

/**
 * Component for displaying an anime card with a high quality image that loads when in viewport
 */
export default function AnimeCard({ anime, className }: AnimeCardProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 },
        );

        const currentRef = document.getElementById(`anime-card-${anime.mal_id}`);
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [anime.mal_id]);

    const lowQualityImageUrl = anime.images.jpg.image_url;
    const highQualityImageUrl = anime.images.jpg.large_image_url;

    return (
        <Link
            to={`/anime/${anime.mal_id}`}
            key={anime.mal_id}
            id={`anime-card-${anime.mal_id}`}
            className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer h-full flex flex-col ${className || ''}`}
        >
            <div className="relative pb-[140%] overflow-hidden group">
                {/* Low quality blurred image placeholder */}
                <img
                    src={lowQualityImageUrl}
                    alt={anime.title}
                    className={`absolute w-full h-full object-cover top-0 left-0 transition-all duration-300 scale-105 ${isLoaded ? 'blur-lg opacity-0' : 'blur-lg'}`}
                />

                {/* High quality main image (only loads when in viewport) */}
                {isInView && (
                    <img
                        src={highQualityImageUrl}
                        alt={anime.title}
                        loading="lazy"
                        onLoad={() => setIsLoaded(true)}
                        className={`absolute w-full h-full object-cover top-0 left-0 transition-all duration-500 group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                )}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-2 sm:p-3 md:p-4 text-center font-medium text-gray-800 text-xs sm:text-sm md:text-base flex-grow flex items-center justify-center min-h-[60px] overflow-hidden min-w-0">
                <div className="line-clamp-2 w-full overflow-hidden break-words">{anime.title}</div>
            </div>
        </Link>
    );
}
