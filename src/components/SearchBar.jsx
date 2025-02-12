import axios from "axios";
import { useState } from "react";
import { useArticleContext } from "../contexts/ArticleContext";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { setMovies, setSeries } = useArticleContext();

  const handleSearch = (event) => {
    event.preventDefault();
    axios
      .get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key: "ad45432ea3dedb4307729942a44a2710",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => setSeries(res.data.results));
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "ad45432ea3dedb4307729942a44a2710",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => setMovies(res.data.results));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Cerca</button>
    </form>
  );
}
