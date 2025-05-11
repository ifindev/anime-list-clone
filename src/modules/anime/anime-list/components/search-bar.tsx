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
            <div className="max-w-[1200px] mx-auto px-4">
                <input
                    className="w-full border border-gray-200 rounded-lg px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm bg-gray-50"
                    placeholder="Search anime..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>
    );
}
