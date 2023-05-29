import trailerCSS from "../../styles/trailer.module.css";
import ModalVideo from "react-modal-video";
import { useState, useEffect } from "react";
function Video({ videoKey }) {
  const [isOpen, setOpen] = useState(false);
  console.log(videoKey);
  return (
    <div className={`${trailerCSS.video}`}>
      {/* <iframe
        allowFullScreen
        className={`${trailerCSS.iframe}`}
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
        style={{ width: "520px", height: "280px" }}
      ></iframe> */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoKey}
        onClose={() => setOpen(false)}
      />
      <div
        className={`${trailerCSS.thumbnail}`}
        style={{
          backgroundImage: `url("https://img.youtube.com/vi/${videoKey}/hqdefault.jpg")`,
        }}
      >
        <a
          onClick={() => {
            setOpen(true);
          }}
        >
          영상보러가기
        </a>
      </div>
    </div>
  );
}

export default Video;
