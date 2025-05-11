import { useAnimeListViewModel } from './anime-list.view-model';
import Navbar from './components/navbar';
import SearchBar from './components/search-bar';
import LoadingIndicator from './components/loading-indicator';
import LoadingSkeleton from './components/loading-skeleton';
import EmptyState from './components/empty-state';
import AnimeGrid from './components/anime-grid';
import Pagination from './components/pagination';

/**
 * Main view component for the anime list page
 */
export default function AnimeListView() {
    const {
        search,
        setSearch,
        animeList,
        pagination,
        isLoading,
        isFetching,
        isError,
        handleNextPage,
        handlePrevPage,
        handleFirstPage,
        handleLastPage,
        limit,
        setLimit,
        itemsPerPageOptions,
    } = useAnimeListViewModel();

    // Determine what to show based on the current state
    const showLoadingSkeletons = isLoading;
    const showBackgroundLoading = isFetching && !isLoading;
    const showContent = !isLoading && animeList.length > 0;
    const showEmptySearch = !isLoading && animeList.length === 0 && search && !isError;
    const showEmptyState = !isLoading && animeList.length === 0 && !search && !isError;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Sticky Navbar */}
            <Navbar title="Anime Search App" />

            {/* Sticky Search Bar Container */}
            <SearchBar search={search} setSearch={setSearch} />

            {/* Main Content */}
            <div className="flex-grow max-w-[1200px] w-full mx-auto px-4 pb-10">
                {/* Loading indicator for ongoing background fetches */}
                {showBackgroundLoading && <LoadingIndicator />}

                {/* Loading Shimmer Skeletons */}
                {showLoadingSkeletons && <LoadingSkeleton count={15} />}

                {/* Empty state when no search has been done */}
                {showEmptyState && <EmptyState message="Start searching for anime above!" />}

                {/* Error state */}
                {isError && (
                    <EmptyState
                        message="No anime found. Try a different search."
                        className="text-red-500"
                    />
                )}

                {/* Empty search results */}
                {showEmptySearch && (
                    <EmptyState
                        message={`No results found for "${search}"`}
                        subMessage="Try a different search term"
                    />
                )}

                {/* Anime Grid */}
                {showContent && <AnimeGrid animeList={animeList} />}
            </div>

            {/* Pagination - only show when we have content and not loading */}
            {pagination && showContent && (
                <Pagination
                    pagination={pagination}
                    limit={limit}
                    itemsPerPageOptions={itemsPerPageOptions}
                    onLimitChange={setLimit}
                    onNextPage={handleNextPage}
                    onPrevPage={handlePrevPage}
                    onFirstPage={handleFirstPage}
                    onLastPage={handleLastPage}
                />
            )}
        </div>
    );
}
