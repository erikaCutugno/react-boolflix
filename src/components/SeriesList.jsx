import { useArticleContext } from "../contexts/ArticleContext";

import Card from "./Card";

export default function SeriesList() {
  const { series, resultsSearch } = useArticleContext();

  return (
    <>
      {resultsSearch && <h2>Lista Serie Tv</h2>}
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
    </>
  );
}
