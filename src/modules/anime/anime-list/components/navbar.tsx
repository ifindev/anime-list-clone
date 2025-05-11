/**
 * Props for the navbar component
 */
export interface NavbarProps {
    title: string;
    className?: string;
}

/**
 * Component for displaying the navbar
 */
export default function Navbar({ title, className = '' }: NavbarProps) {
    return (
        <nav
            className={`w-full bg-purple-700 py-5 px-6 md:px-10 sticky top-0 z-10 shadow-md ${className}`}
        >
            <span className="text-white text-xl font-bold">{title}</span>
        </nav>
    );
}
