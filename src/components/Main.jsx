import { useArticleContext } from "../contexts/ArticleContext";

// import LanguageFlag from "./LanguageFlag";
import Card from "./Card";

export default function Main() {
  const { movies, series } = useArticleContext();

  //converto i voti in stelle

  return (
    <main>
      <div className="container">
        <h2>Lista Film</h2>
        <ul className="row">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              article={movie}
              title={movie.title}
              original={movie.original_title}
            ></Card>
          ))}
        </ul>
        <h2>Lista Serie Tv</h2>
        <ul className="row">
          {series.map((serie) => (
            <Card
              key={serie.id}
              article={serie}
              title={serie.name}
              original={serie.original_name}
            ></Card>
          ))}
        </ul>
      </div>
    </main>
  );
}
