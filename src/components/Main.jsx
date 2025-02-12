import { useArticleContext } from "../contexts/ArticleContext";
import flags from "../data/flag";
import Stars from "./Stars";

export default function Main() {
  const { movies, series } = useArticleContext();

  // converto i voti in stelle
  const voteTot = (film) => {
    const vote = Math.round((film.vote_average - 1) / 2 + 1);
    // let star = [];
    // for (let i = 1; i <= 5; i++) {
    //   if (vote >= i) {
    //     star.push(<i className="fa-solid fa-star"></i>);
    //   } else {
    //     star.push(<i className="fa-regular fa-star"></i>);
    //   }
    // }
    return vote;
  };

  return (
    <main>
      <h2>Lista Film</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <div>Titolo:{movie.title}</div>
            <div>Titolo Originale:{movie.original_title}</div>
            <div>
              Lingua:
              {movie.original_language == flags.language ? (
                <img
                  className="flag"
                  src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${flags.country}.svg`}
                  alt={movie.original_language}
                />
              ) : (
                <img
                  className="flag"
                  src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${movie.original_language.toUpperCase()}.svg`}
                  alt={movie.original_language}
                />
              )}
            </div>
            <div>
              Voto:
              <Stars vote={voteTot(movie)} />
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
            />
          </li>
        ))}
      </ul>
      <h2>Lista Serie Tv</h2>
      <ul>
        {series.map((serie) => (
          <li key={serie.id}>
            <div>Titolo:{serie.name}</div>
            <div>Titolo Originale:{serie.original_name}</div>
            <div>
              Lingua:
              {serie.original_language == flags.language ? (
                <img
                  className="flag"
                  src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${flags.country}.svg`}
                  alt={serie.original_language}
                />
              ) : (
                <img
                  className="flag"
                  src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${serie.original_language.toUpperCase()}.svg`}
                  alt={serie.original_language}
                />
              )}
            </div>
            <div>
              Voto:
              <Stars vote={voteTot(serie)} />
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w500${serie.backdrop_path}`}
              alt={series.title}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
