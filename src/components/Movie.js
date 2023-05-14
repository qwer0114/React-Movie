import { Link } from "react-router-dom";
import movie from "../styles/movie.module.css";
import movieDetail from "../styles/movieDetail.css";
import "../styles/style.css";
import { async } from "q";

function Movie({ title, posterUrl, id }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200/";
  return (
    <div className={`movie ${movie.movie}`} id={id}>
      <img
        src={`${IMAGE_BASE_URL}${posterUrl}`}
        alt="Title"
        className={` ${movie.poster}`}
      ></img>
      <h2>
        <Link to={`/movie/${id}`} className={movie.movieTitle}>
          {title}
        </Link>
      </h2>
    </div>
  );
}

export default Movie;
