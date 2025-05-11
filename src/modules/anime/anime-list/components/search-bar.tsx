/**
 * Props for the SearchBar component
 */
export interface SearchBarProps {
    search: string;
    setSearch: (value: string) => void;
    className?: string;
}

/**
 * Component for searching anime
 */
export default function SearchBar({ search, setSearch, className = '' }: SearchBarProps) {
    return (
        <div className={`w-full bg-white shadow-sm py-6 mb-5 sticky top-[64px] z-10 ${className}`}>
            <div className="max-w-[1200px] mx-auto px-4 relative">
                <input
                    className="w-full border border-gray-200 rounded-lg px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm bg-gray-50"
                    placeholder="Search anime..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                    <button
                        className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none p-2"
                        onClick={() => setSearch('')}
                        aria-label="Clear search"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
}
