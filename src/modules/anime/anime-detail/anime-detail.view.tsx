import { useAnimeDetailViewModel } from './anime-detail.view-model';
import AnimeDetailNavbar from './components/anime-detail-navbar';
import AnimeLoadingSkeleton from './components/anime-loading-skeleton';
import AnimeErrorState from './components/anime-error-state';
import AnimeImage from './components/anime-image';
import AnimeBasicInfo from './components/anime-basic-info';
import AnimeInfoGrid from './components/anime-info-grid';
import AnimeGenres from './components/anime-genres';
import AnimeStudios from './components/anime-studios';
import AnimeSynopsis from './components/anime-synopsis';
import AnimeTrailer from './components/anime-trailer';

/**
 * Main view component for the anime detail page
 */
export default function AnimeDetailView() {
    const { animeDetails, isLoading, isError } = useAnimeDetailViewModel();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sticky Navbar */}
            <AnimeDetailNavbar />

            <div className="container mx-auto px-4 py-8 max-w-screen-xl">
                {/* Loading state */}
                {isLoading && <AnimeLoadingSkeleton />}

                {/* Error state */}
                {isError && <AnimeErrorState />}

                {/* Anime details */}
                {!isLoading && !isError && animeDetails && (
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                {/* Left column - Image */}
                                <AnimeImage animeDetails={animeDetails} />

                                {/* Right column - Details */}
                                <div className="md:w-2/3 p-4 md:p-6">
                                    <AnimeBasicInfo animeDetails={animeDetails} />
                                    <AnimeInfoGrid animeDetails={animeDetails} />
                                    <AnimeGenres genres={animeDetails.genres} />
                                    <AnimeStudios studios={animeDetails.studios} />
                                    <AnimeSynopsis synopsis={animeDetails.synopsis} />
                                </div>
                            </div>
                        </div>

                        {/* Trailer section if available */}
                        <AnimeTrailer trailer={animeDetails.trailer} title={animeDetails.title} />
                    </div>
                )}
            </div>
        </div>
    );
}
