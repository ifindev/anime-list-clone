import type { AnimeLoadingSkeletonProps } from '../anime-detail.types';

/**
 * Component for displaying a loading skeleton for anime details
 */
export default function AnimeLoadingSkeleton({ className = '' }: AnimeLoadingSkeletonProps) {
    return (
        <div
            className={`max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden p-2 sm:p-6 ${className}`}
        >
            <div className="flex flex-col md:flex-row gap-6 animate-pulse">
                <div className="w-full md:w-1/3 h-[400px] bg-gray-200 rounded-lg"></div>
                <div className="w-full md:w-2/3">
                    <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <div className="h-6 bg-gray-200 rounded w-16"></div>
                        <div className="h-6 bg-gray-200 rounded w-20"></div>
                        <div className="h-6 bg-gray-200 rounded w-24"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
