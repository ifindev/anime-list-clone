import { type RouteObject } from 'react-router-dom';
import { Suspense } from 'react';

import AnimeListView from './anime-list.view';

const animeListRoute: RouteObject = {
    path: '/anime',
    element: (
        <Suspense fallback={<div>Loading...</div>}>
            <AnimeListView />
        </Suspense>
    ),
};

export default animeListRoute;
