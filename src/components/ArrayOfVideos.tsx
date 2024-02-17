"use client";
import Img from "react-cool-img";
import PlayIcon from "./Icons/PlayIcon";
import { useState } from "react";
import YoutubeModal from "./YoutubeModal";

interface Props {
  ArrayOfVideos: any;
}

export default function ArrayOfVideos({ ArrayOfVideos }: Props) {
  
  //video size for videos
  const [actualVideoId, setActualVideoId] = useState<string>("");
  //modal translate values - base value: -999%, other: 0% 
  const [translateModal, setTranslateModal] = useState<number>(-999);


  function setVideoID  (id: string): void 
  {
    setActualVideoId(id);
    setTranslateModal(0);
  }

  console.log();
  
  const arrayOfVideos = ArrayOfVideos.map(
    (object: Object | any, index: number) => 
    {

      return (
        //// JSX ELEMENTS ////
        <>
          <div
            className="img__container"
            key={object.id} 
            onClick={ () => setVideoID(object.snippet.resourceId.videoId)}
          >
            <div className="img__container--iconContainer"   >
              <div className="img__container--icon"  >
                <PlayIcon   />
              </div>
            </div>
            <Img
              style={{
                backgroundColor: "grey",
                width: "100%",
                height: "auto",
                position: "relative",
              }}
              src={object.snippet.thumbnails.maxres.url}
              alt={"ultimo-lanzamiento-imagen"}
            />
          </div>
        </>
      );
    }
  );

  return (
    <>
      {arrayOfVideos}
      <YoutubeModal
        videoId={actualVideoId}
        translateModal={translateModal}
        setTranslateModal={setTranslateModal}
      />
    </>
  );
}
