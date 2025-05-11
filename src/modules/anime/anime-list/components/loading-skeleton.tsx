/**
 * Props for the loading skeleton component
 */
export interface LoadingSkeletonProps {
    count?: number;
    className?: string;
}

/**
 * Component for displaying loading skeletons
 */
export default function LoadingSkeleton({ count = 15, className = '' }: LoadingSkeletonProps) {
    return (
        <div
            className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-6 ${className}`}
        >
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="flex flex-col">
                    <div className="w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] bg-gray-200 animate-pulse rounded-lg mb-2" />
                    <div className="h-5 bg-gray-200 animate-pulse rounded w-3/4 mx-auto" />
                </div>
            ))}
        </div>
    );
}
