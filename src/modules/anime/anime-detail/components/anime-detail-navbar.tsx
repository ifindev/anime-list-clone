import { Link } from 'react-router-dom';
import type { AnimeDetailNavbarProps } from '../anime-detail.types';

/**
 * Component for displaying the anime detail navbar
 */
export default function AnimeDetailNavbar({ className = '' }: AnimeDetailNavbarProps) {
    return (
        <nav
            className={`w-full bg-purple-700 py-5 px-6 md:px-10 sticky top-0 z-10 shadow-md ${className}`}
        >
            <div className="flex items-center">
                <Link to="/" className="text-white mr-2">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                </Link>
                <span className="text-white text-xl font-bold">Anime Search App</span>
            </div>
        </nav>
    );
}
