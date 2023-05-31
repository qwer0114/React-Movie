import detailCSS from "../styles/detail.module.css";
import MovieTrailer from "../components/VideoComponents/MovieTrailer";
import { async } from "q";
import { useState, useEffect } from "react";


function Detail({ id, backdrop, poster, title, genres, runtime, tagline, overview }) {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
    const API_Key = "e57cb5455543dca5e39dbdf67e3877a8";
    const API_URL = "https://api.themoviedb.org/3/";
    const [trailer, setTrailer] = useState([]);

    const getTrailer = async () => {
        const result = await fetch(
            `${API_URL}/movie/${id}/videos?api_key=${API_Key}`
        );
        const json = await result.json();
        const array = json.results;
        console.log(json.results)
        const key = array.filter((video) => {
            if (video.type === "Trailer" || "Teaser" && video.site === "Youtube") {
                return video.key;
            }
        });
        console.log(key);
        setTrailer(key[0].key);
    };
    useEffect(() => {
        getTrailer();
    })
    return (
        <div
            className={`${detailCSS.background}`}
            style={{
                backgroundImage: `url(${IMAGE_BASE_URL}${backdrop})`,
            }}
        >
            <div className={`${detailCSS.filter}`}>
                <div className={`${detailCSS.content_detail}`}>
                    <div>
                        <img
                            src={`${IMAGE_BASE_URL}${poster}`}
                            className={`${detailCSS.poster}`}
                        ></img>
                    </div>
                    <div className={`${detailCSS.content_detail_info}`}>
                        <div className={`${detailCSS.content_detail_info_title}`}>
                            {title}
                        </div>
                        <div className={`${detailCSS.content_detail_info_facts}`}>
                            <div>
                                {genres.map((genre) => (
                                    <span key={genre.id}>·{genre.name}</span>
                                ))}
                            </div>
                            <div>{runtime}m</div>
                            {/* <div>인기도: {movieDetail.popularity}</div> */}
                        </div>
                        <div className={`${detailCSS.content_detail_tagline}`}>
                            {tagline}
                        </div>
                        <div>개요</div>
                        <div>{overview}</div>
                        {<MovieTrailer videos={trailer}></MovieTrailer>}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Detail;