"use client";
import YouTube from "react-youtube";
import CloseIcon from "./Icons/CloseIcon";
import "../assets/global.scss";

interface Props {
  videoId: string;
  translateModal: number;
  setTranslateModal: any;
}
export default function YoutubeModal({
  videoId,
  translateModal,
  setTranslateModal,
}: Props) {
  
  
  /*   
  if (window.matchMedia("(orientation: portrait)").matches) {
    alert("portrait");
  }
  
  if (window.matchMedia("(orientation: landscape)").matches) {
    alert("landscape");
  }
  
  */

  const opts = {
    width: `${window.screen.width}px `,
    height: `${window.screen.width * 0.5625}px`,

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <>
      {/*youtube iframe modal */}
      <div
        className="modal"
        style={{
          transform: `translate(${translateModal}%)`,
          transition: "0.2s",
        }}
      >
        <div className="modal__container">
          <div
            className="modal__container--iconContainer"
            onClick={() => setTranslateModal(-999)}
          >
            <CloseIcon />
          </div>

          <YouTube
            videoId={videoId} // defaults -> ''
            id={""} // defaults -> ''
            className={""} // defaults -> ''
            iframeClassName={""} // defaults -> ''
            style={{}} // defaults -> {}
            title={""} // defaults -> ''
            loading={undefined} // defaults -> undefined
            opts={opts} // defaults -> {}
            onReady={undefined} // defaults -> noop
            onPlay={undefined} // defaults -> noop
            onPause={undefined} // defaults -> noop
            onEnd={undefined} // defaults -> noop
            onError={undefined} // defaults -> noop
            onStateChange={undefined} // defaults -> noop
            onPlaybackRateChange={undefined} // defaults -> noop
            onPlaybackQualityChange={undefined} // defaults -> noop
          />
        </div>
      </div>
    </>
  );
}
