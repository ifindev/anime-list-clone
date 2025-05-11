/**
 * Props for the loading indicator
 */
export interface LoadingIndicatorProps {
    className?: string;
}

/**
 * Component for displaying a loading indicator
 */
export default function LoadingIndicator({ className = '' }: LoadingIndicatorProps) {
    return (
        <div
            className={`w-full py-2 bg-purple-100 text-purple-700 text-center text-sm mb-4 rounded-md ${className}`}
        >
            <div className="flex items-center justify-center">
                <svg
                    className="animate-spin h-4 w-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>
                Updating results...
            </div>
        </div>
    );
}
