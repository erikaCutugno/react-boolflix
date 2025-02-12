import { useArticleContext } from "../contexts/ArticleContext";

export default function Main() {
  const { movies } = useArticleContext();
  return (
    <main>
      <h2>Lista articoli</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </main>
  );
}
