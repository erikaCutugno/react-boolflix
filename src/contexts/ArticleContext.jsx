import { createContext, useContext, useState } from "react";

//creo il contesto

const ArticleContext = createContext();

//Provider

function ArticleProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [resultsSearch, setResultsSearch] = useState(false);

  return (
    <ArticleContext.Provider
      value={{
        movies,
        setMovies,
        series,
        setSeries,
        resultsSearch,
        setResultsSearch,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
}

function useArticleContext() {
  const context = useContext(ArticleContext);
  return context;
}

export { ArticleProvider, useArticleContext };
