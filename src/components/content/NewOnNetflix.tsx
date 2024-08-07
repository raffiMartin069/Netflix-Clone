import { useState, useEffect } from "react";
import movieDataApiCall from "../../api/NewMovie";
import ContentHeader from "../shared/ContentHeader";
import MovieNavigationButton from "../shared/MovieNavigationButton";

function NewOnNetflix() {
  const [movies, setMovies] = useState<
    { id: number; title: string; poster_path: string }[]
  >([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const movieDataUrl =
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
        const result = await movieDataApiCall(movieDataUrl);
        console.log(result);
        setMovies(result.results);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  return (
    <>
      <div className="relative w-full h-80 overflow-hidden p-6">
        <ContentHeader title="New on Netflix" />
        <div className="flex gap-1 overflow-x-auto no-scrollbar z-0">
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none text-white">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-52 h-52"
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

export default NewOnNetflix;
