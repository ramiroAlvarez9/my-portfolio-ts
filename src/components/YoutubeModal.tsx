"use client";
import YouTube from "react-youtube";
import CloseIcon from "./Icons/CloseIcon";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";

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
  const [youtubeVideoWidth, setYoutubeVideoWidth] = useState<number>(0);

  const opts = {
    width: `${youtubeVideoWidth}px `,
    height: `${youtubeVideoWidth * 0.5625}px`,
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    if (window.matchMedia("(orientation: portrait)").matches) {
      setYoutubeVideoWidth(window.screen.width);
    }

    if (window.matchMedia("(orientation: landscape)").matches) {
      setYoutubeVideoWidth(window.screen.width / 2);
    }
  }, []);

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
          {youtubeVideoWidth === 0 ? (
            <ReactLoading
              type={"spinningBubbles"}
              color={"#fac959"}
              height={250}
              width={250}
            />
          ) : (
            <YouTube
              videoId={videoId} // defaults -> ''
              id={""} // defaults -> ''
              className={""} // defaults -> ''
              iframeClassName={""} // defaults -> ''
              style={{}} // defaults -> {}
              title={""} // defaults -> ''
              loading={undefined} // defaults -> undefined
              opts={opts} // defaults -> {}
              onReady={() => {
                console.log("hola");
              }} // defaults -> noop
              onPlay={undefined} // defaults -> noop
              onPause={undefined} // defaults -> noop
              onEnd={undefined} // defaults -> noop
              onError={undefined} // defaults -> noop
              onStateChange={undefined} // defaults -> noop
              onPlaybackRateChange={undefined} // defaults -> noop
              onPlaybackQualityChange={undefined} // defaults -> noop
            />
          )}
        </div>
      </div>
    </>
  );
}
