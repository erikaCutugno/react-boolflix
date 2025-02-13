import MoviesList from "./MoviesList";
import SeriesList from "./SeriesList";

export default function Main() {
  return (
    <main>
      <div className="container">
        <MoviesList />
        <SeriesList />
      </div>
    </main>
  );
}
