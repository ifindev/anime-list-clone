import type { PaginationData } from '../anime-list.types';

/**
 * Props for the pagination component
 */
export interface PaginationProps {
    pagination: PaginationData;
    limit: number;
    itemsPerPageOptions: readonly number[];
    onLimitChange: (limit: number) => void;
    onNextPage: () => void;
    onPrevPage: () => void;
    onFirstPage: () => void;
    onLastPage: () => void;
    className?: string;
}

/**
 * Component for displaying pagination controls
 */
export default function Pagination({
    pagination,
    limit,
    itemsPerPageOptions,
    onLimitChange,
    onNextPage,
    onPrevPage,
    onFirstPage,
    onLastPage,
    className = '',
}: PaginationProps) {
    return (
        <div className={`mt-8 flex flex-col items-center ${className}`}>
            {/* Items per page and count info */}
            <div className="w-full flex flex-col sm:flex-row justify-center items-center mb-4 text-sm text-gray-600 gap-2">
                <div className="flex items-center">
                    <select
                        className="mr-2 bg-white border border-gray-200 rounded px-2 py-1"
                        value={limit}
                        onChange={(e) => onLimitChange(Number(e.target.value))}
                    >
                        {itemsPerPageOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <span>items per page</span>
                </div>
                <div className="text-center">
                    <span className="mx-1 hidden sm:inline">|</span>
                    <span>
                        {pagination.current_page === 1
                            ? ' 1'
                            : ` ${(pagination.current_page - 1) * pagination.items.per_page + 1}`}
                        {' - '}
                        {Math.min(
                            pagination.current_page * pagination.items.per_page,
                            pagination.items.total,
                        )}
                        {' of '}
                        {pagination.items.total}
                    </span>
                </div>
            </div>

            {/* Pagination controls */}
            <div className="flex flex-wrap justify-center gap-2 p-4">
                <button
                    onClick={onFirstPage}
                    disabled={pagination.current_page === 1}
                    className={`px-4 py-2 rounded ${
                        pagination.current_page === 1
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                >
                    <span className="w-4 h-4">«</span>
                </button>

                {/* Previous button */}
                <button
                    onClick={onPrevPage}
                    disabled={pagination.current_page === 1}
                    className={`px-3 sm:px-4 py-2 rounded flex items-center justify-center sm:min-w-[70px] ${
                        pagination.current_page === 1
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                >
                    <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    <span className="hidden sm:block">Prev</span>
                </button>

                {/* Current page indicator */}
                <div className="px-4 py-2 bg-white border border-gray-200 rounded flex items-center">
                    <span className="font-medium">{pagination.current_page}</span>
                    <span className="mx-1">/</span>
                    <span>{pagination.last_visible_page}</span>
                </div>

                {/* Next button */}
                <button
                    onClick={onNextPage}
                    disabled={!pagination.has_next_page}
                    className={`px-3 sm:px-4 py-2 rounded flex items-center justify-center sm:min-w-[70px] ${
                        !pagination.has_next_page
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                >
                    <span className="hidden sm:block">Next</span>
                    <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

                <button
                    onClick={onLastPage}
                    disabled={pagination.current_page === pagination.last_visible_page}
                    className={`px-4 py-2 rounded ${
                        pagination.current_page === pagination.last_visible_page
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                >
                    <span className="w-4 h-4">»</span>
                </button>
            </div>
        </div>
    );
}
