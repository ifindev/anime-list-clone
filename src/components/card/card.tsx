import React from 'react';

export type CardProps = {
    className?: string;
    children: React.ReactNode;
};

export default function Card({ className = '', children }: CardProps) {
    return <div className={`bg-white rounded shadow p-4 ${className}`}>{children}</div>;
}
