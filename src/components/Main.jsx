import { useArticleContext } from "../contexts/ArticleContext";
import flags from "../data/flag";
export default function Main() {
  const { movies, series } = useArticleContext();

  return (
    <main>
      <h2>Lista Film</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <ul>
              <li>Titolo:{movie.title}</li>
              <li>Titolo Originale:{movie.original_title}</li>
              <li>
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
              </li>
              <li>Voto:{movie.vote_average}</li>
            </ul>
          </li>
        ))}
      </ul>
      <h2>Lista Serie Tv</h2>
      <ul>
        {series.map((serie) => (
          <li key={serie.id}>
            <ul>
              <li>Titolo:{serie.name}</li>
              <li>Titolo Originale:{serie.original_name}</li>
              <li>
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
              </li>
              <li>Voto:{serie.vote_average}</li>
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}
