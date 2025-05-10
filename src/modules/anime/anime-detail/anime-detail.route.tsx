import { Suspense } from 'react';
import { type RouteObject } from 'react-router-dom';

import AnimeDetailView from './anime-detail.view';

const animeDetailRoute: RouteObject = {
    path: '/:animeId',
    element: (
        <Suspense fallback={<div>Loading...</div>}>
            <AnimeDetailView />
        </Suspense>
    ),
};

export default animeDetailRoute;
