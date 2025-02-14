import { useState } from "react";
import Stars from "./Stars";
import LanguageFlag from "./LanguageFlag";

//converto i voti da decimali
const voteTot = (article) => {
  const vote = Math.round((article.vote_average - 1) / 2 + 1);
  return vote;
};
export default function Card({ article, title, original, country }) {
  //per il caricamento dell'immagine
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <li className="card">
      <div className="hover-card">
        <div>
          <strong>Titolo:</strong>
          {title}
        </div>
        <div>
          <strong>Titolo Originale:</strong>
          {original}
        </div>
        <div>
          <strong>Lingua:</strong>
          <LanguageFlag
            country={country}
            language={article.original_language}
          ></LanguageFlag>
        </div>
        <div>
          <strong>Voto:</strong>
          <Stars vote={voteTot(article)} />
        </div>
        {article.overview && (
          <div>
            <strong>Overview:</strong>
            {article.overview}
          </div>
        )}
      </div>
      <div className="poster">
        {imageLoading && <div className="loading-spinner">Loading...</div>}
        <img
          src={
            imageError
              ? "./img/IMG_1843.jpg"
              : `https://image.tmdb.org/t/p/w342${article.poster_path}`
          }
          alt={title}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`poster-img ${imageLoading ? "loading" : "loaded"}`}
        />
      </div>
    </li>
  );
}
