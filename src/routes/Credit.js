import { async } from "q";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CreditInfo from "../components/CreditComponents/CreditInfo";
import CreditVideo from "../components/CreditComponents/CreditVideo";
import Navbar from "../components/navbar";
import credit from "../styles/credit.css";

function Credit() {
  const API_Key = "e57cb5455543dca5e39dbdf67e3877a8";
  const API_URL = "https://api.themoviedb.org/3/";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

  const [credit, setCredit] = useState([]);
  const [creditVideo, setCreditVideo] = useState([]);
  let { id } = useParams();

  const getCredit = async () => {
    const result = await fetch(`${API_URL}person/${id}?api_key=${API_Key}`);
    const json = await result.json();
    setCredit(json);
  };

  const getCreditVideo = async () => {
    const result = await fetch(
      `${API_URL}discover/movie?api_key=${API_Key}&sort_by=popularity.desc&language=ko-KR&with_people=${id}`
    );
    const json = await result.json();
    setCreditVideo(json.results);
    console.log(json);
  };

  useEffect(() => {
    getCredit();
    getCreditVideo();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="credit">
        <div className="credit_facts">
          <img
            src={`${IMAGE_BASE_URL}${credit.profile_path}`}
            className="credit_profile"
          ></img>
          <div>
            분야
            <br />
            {credit.known_for_department}
          </div>
          <div>
            생일
            <br />
            {credit.birthday}
          </div>
          <div>
            고향
            <br />
            {credit.place_of_birth}
          </div>
        </div>
        <div className="credit_right">
          <div>
            <CreditInfo creditInfo={credit.biography} />
          </div>
          <div>
            <CreditVideo creditVideos={creditVideo} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Credit;
