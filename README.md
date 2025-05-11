# Anime List Clone

A modern React application for browsing anime information built with React 19, TypeScript, Tailwind CSS, and React Query.

https://github.com/user-attachments/assets/2ad99e9f-ebf1-40d1-abeb-f49cceaa070e

## Features

- **Anime Browsing**: Search and browse through a comprehensive collection of anime titles
- **Detailed Information**: Access detailed information about each anime, including synopsis, rating, genres, and more
- **Responsive Design**: Fully responsive UI that works well on desktop and mobile devices
- **Search Functionality**: Search anime by title with debounced input
- **Pagination**: Navigate through large result sets with an intuitive pagination system

## Tech Stack

- **React 19**: Utilizing the latest React features
- **TypeScript**: For type safety and better developer experience
- **TanStack React Query**: For efficient server state management
- **React Router v7**: For application routing
- **Tailwind CSS**: For utility-first styling
- **Vite**: For fast development and optimized build

## Project Structure

The project follows a modular MVVM (Model-View-ViewModel) architecture:

```
src/
├── assets/           # Static assets like images and icons
├── clients/          # API client configurations
├── components/       # Reusable UI components
├── hooks/            # Custom React hooks
├── modules/          # Feature modules (MVVM structure)
│   └── anime/
│       ├── anime-list/
│       │   ├── components/    # Module-specific components
│       │   ├── hooks/         # Module-specific hooks
│       │   ├── anime-list.view.tsx         # UI component (View)
│       │   ├── anime-list.view-model.ts    # Business logic (ViewModel)
│       │   ├── anime-list.route.tsx        # Route definition
│       │   ├── anime-list.types.ts         # Type definitions
│       │   └── anime-list.constants.ts     # Constants
│       └── anime-detail/
│           └── ...            # Similar structure as anime-list
├── utils/            # Utility functions
├── main.tsx          # Application entry point
├── router.route.tsx  # Main router configuration
└── index.css         # Global styles
```

## Data Fetching

The application uses React Query for efficient data fetching and state management:

- **Custom Hooks**: Data fetching logic is encapsulated in custom hooks (e.g., `useGetAnimeList`, `useGetAnimeDetail`)
- **Naming Convention**: Hooks follow a naming convention of `useGet[DataToFetch]` for fetching and `use[Action][ObjectForAction]` for mutations
- **Caching**: Utilizes React Query's caching mechanisms for optimal performance
- **Separation of Concerns**: Data fetching logic is separated from UI components

Example:

```typescript
export function useGetAnimeList(debouncedSearch: string, page: number, limit: number) {
    return useQuery<AnimeResponse>({
        queryKey: ['animeSearch', debouncedSearch, page, limit],
        queryFn: async () => {
            // API call implementation
        },
        staleTime: CACHE_STALE_TIME,
        gcTime: CACHE_GC_TIME,
        refetchOnWindowFocus: false,
    });
}
```

## Architecture Patterns

The application follows the MVVM (Model-View-ViewModel) architecture:

- **View**: UI components (`.view.tsx` files)
- **ViewModel**: Business logic and state management (`.view-model.ts` files)
- **Model**: Data structures and types (`.types.ts` files)
- **Routes**: Route definitions (`.route.tsx` files)

This separation ensures clean code organization and improved maintainability.

## Development

### Prerequisites

- Node.js (v18+ recommended)
- npm or Bun

### Setup

1. Clone the repository
2. Install dependencies:
    ```bash
    npm install
    # or
    bun install
    ```
3. Start the development server:
    ```bash
    npm run dev
    # or
    bun dev
    ```

### Scripts

- `dev`: Starts the development server
- `build`: Builds the application for production
- `preview`: Previews the production build locally
- `lint`: Runs ESLint to check for issues
- `format`: Formats code using Prettier

## Styling

The application uses Tailwind CSS for styling with a utility-first approach. Components accept a `className` prop to allow style overrides where needed.

## Error Handling

The application includes proper error handling and loading states for a smooth user experience, including:

- Loading indicators during data fetching
- Error boundaries to prevent app crashes
- Not found page for invalid routes

## Contributing

Please follow these guidelines when contributing:

- Use kebab-case for file and folder naming
- Follow the MVVM architecture pattern
- Use custom hooks for data fetching
- Follow the established naming conventions
