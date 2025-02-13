import { useArticleContext } from "../contexts/ArticleContext";

import Card from "./Card";

export default function MoviesList() {
  const { movies, resultsSearch } = useArticleContext();

  return (
    <>
      {resultsSearch && <h2>Lista Film</h2>}
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
    </>
  );
}
