import { useEffect, useState } from "react";
import movieDataApiCall from "../../api/NewMovie";
import ContentHeader from "../shared/ContentHeader";
import MovieNavigationButton from "../shared/MovieNavigationButton";

function TopRatedMovie() {
  const [topRatedMovies, setTopRatedMovies] = useState<
    { id: number; title: string; poster_path: string }[]
  >([]);

  useEffect(() => {
    const getData = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
      const dataResult = await movieDataApiCall(url);
      setTopRatedMovies(dataResult.results);
    };
    getData();
  }, []);

  return (
    <>
      <div className="relative w-full h-full overflow-hidden p-6">
        <ContentHeader title="Top Rated Movies" />
        <div className="flex gap-1 overflow-x-auto no-scrollbar">
          {topRatedMovies.map((movie) => (
            <div key={movie.id} className="flex-none text-white">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="h-52 w-52"
              />
            </div>
          ))}
        </div>
        <div
          className="hidden md:block absolute top-0 bottom-0 left-0 opacity-10 w-32 text-center content-center hover:opacity-45 ease-in-out duration-300"
          style={{ background: "#141414" }}
        >
          <MovieNavigationButton bootstrapIcon="bi bi-chevron-compact-left" />
        </div>
        <div
          className="hidden md:block absolute top-0 bottom-0 right-0 opacity-10 hover:opacity-45 w-32 duration-300"
          style={{ background: "#141414" }}
        >
          <MovieNavigationButton bootstrapIcon="bi bi-chevron-compact-right" />
        </div>
      </div>
    </>
  );
}

export default TopRatedMovie;
