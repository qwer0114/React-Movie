import { Link } from "react-router-dom";

function Movie({ title, posterUrl, overview, id }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300/";
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={`${IMAGE_BASE_URL}${posterUrl}`} alt="Title"></img>
      <span>{overview}</span>
    </div>
  );
}

export default Movie;
