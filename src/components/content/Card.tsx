import NewOnNetflix from "./NewOnNetflix";
import PopularMovie from "./PopularMovie";
import TopRatedMovie from "./TopRatedMovie";
import UpcomingMovies from "./UpcomingMovies";

function Card() {


  return (
    <>
      <div className="pt-16">
        <NewOnNetflix/>
        <PopularMovie/>
        <TopRatedMovie/>
        <UpcomingMovies/>
      </div>
    </>
  );
}

export default Card;
