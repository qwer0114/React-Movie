import MovieSwiper from "../MovieComponents/MovieSwiper";

function CreditVideo({ creditVideos }) {
  return (
    <div>
      <h2>대표 출연작</h2>
      <MovieSwiper movie={creditVideos} />
    </div>
  );
}
export default CreditVideo;
