import trailerCSS from "../../styles/trailer.module.css";
import ModalVideo from "react-modal-video";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from "@fortawesome/free-solid-svg-icons"

function Video({ videoKey }) {
  const [isOpen, setOpen] = useState(false);
  console.log(videoKey);
  return (
    <div className={`${trailerCSS.video}`}>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoKey}
        onClose={() => setOpen(false)}
      />
      <h2>Trailer</h2>
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
          <FontAwesomeIcon icon={faPlay} className={`${trailerCSS.play}`} />
        </a>
      </div>
    </div>
  );
}

export default Video;
