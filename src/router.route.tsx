import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import animeListRoute from './modules/anime/anime-list/anime-list.route';
import animeDetailRoute from './modules/anime/anime-detail/anime-detail.route';

const NotFound = lazy(() => import('./components/not-found/not-found'));

const routes = [animeListRoute, animeDetailRoute];

const router = createBrowserRouter([
    ...routes,
    {
        path: '*',
        element: (
            <Suspense fallback={<div>Not Found</div>}>
                <NotFound />
            </Suspense>
        ),
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
