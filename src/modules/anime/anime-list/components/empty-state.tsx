/**
 * Props for the empty state component
 */
export interface EmptyStateProps {
    message: string;
    subMessage?: string;
    className?: string;
}

/**
 * Component for displaying empty states
 */
export default function EmptyState({ message, subMessage, className = '' }: EmptyStateProps) {
    return (
        <div className={`flex flex-col items-center justify-center py-20 ${className}`}>
            <div className="text-gray-500 text-xl">{message}</div>
            {subMessage && <div className="text-gray-400 mt-2">{subMessage}</div>}
        </div>
    );
}
