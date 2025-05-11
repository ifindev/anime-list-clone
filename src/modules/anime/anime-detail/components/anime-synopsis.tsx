import type { AnimeSynopsisProps } from '../anime-detail.types';

/**
 * Component for displaying anime synopsis
 */
export default function AnimeSynopsis({ synopsis, className = '' }: AnimeSynopsisProps) {
    return (
        <div className={className}>
            <h3 className="font-bold text-lg mb-2">Synopsis</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
                {synopsis || 'No synopsis available.'}
            </p>
        </div>
    );
}
