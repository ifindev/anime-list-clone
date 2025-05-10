import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    children: React.ReactNode;
};

export default function Button({ className = '', children, ...props }: ButtonProps) {
    return (
        <button
            className={`px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 transition ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
