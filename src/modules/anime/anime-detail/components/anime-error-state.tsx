import { Link } from 'react-router-dom';
import type { AnimeErrorStateProps } from '../anime-detail.types';

/**
 * Component for displaying an error state for anime details
 */
export default function AnimeErrorState({ className = '' }: AnimeErrorStateProps) {
    return (
        <div
            className={`max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6 ${className}`}
        >
            <div className="text-center text-red-500">
                <h2 className="text-2xl font-bold mb-2">Error Loading Anime</h2>
                <p>There was a problem loading this anime. Please try again later.</p>
                <Link
                    to="/"
                    className="mt-4 inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
