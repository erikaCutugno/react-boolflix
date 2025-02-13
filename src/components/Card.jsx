import flags from "../data/flag";
import Stars from "./Stars";

//converto i voti da decimali
const voteTot = (article) => {
  const vote = Math.round((article.vote_average - 1) / 2 + 1);
  return vote;
};
export default function Card({ article }) {
  return (
    <li className="card">
      <div className="hover-card">
        <div>Titolo:{article.title}</div>
        <div>Titolo Originale:{article.original_title}</div>
        <div>
          Lingua:
          {/* <LanguageFlag article={article.original_language} /> */}
          {flags.find((flag) => article.original_language == flag.language) ? (
            <img
              className="flag"
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${
                flags.find((flag) => article.original_language == flag.language)
                  .country
              }.svg`}
              alt={article.original_language}
            />
          ) : (
            <img
              className="flag"
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${article.original_language.toUpperCase()}.svg`}
              alt={article.original_language}
            />
          )}
        </div>
        <div>
          Voto:
          <Stars vote={voteTot(article)} />
        </div>
      </div>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w342${article.poster_path}`}
          alt={article.title}
        />
      </div>
    </li>
  );
}
