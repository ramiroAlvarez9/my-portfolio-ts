"use client";
import Img from "react-cool-img";
import PlayIcon from "./PlayIcon";
import { useState } from "react";
import YoutubeModal from "./YoutubeModal";

interface Props {
  ArrayOfVideos: any;
}

export default function ArrayOfVideos({ ArrayOfVideos }: Props) {
  const [actualVideoId, setActualVideoId] = useState<string>("");
  const [translateModal, setTranslateModal] = useState<number>(-100);

  function setVideoID(id: string) {
    console.log("hola");
    setActualVideoId(id);
    setTranslateModal(0);
  }
  console.log(translateModal)

  const arrayOfVideos = ArrayOfVideos.map(
    (object: Object | any, index: number) => {
      return (
        //// JSX ELEMENTS ////
        <>
          <div
            className="img__container"
            key={index}
            onClick={() => setVideoID(object.snippet.resourceId.videoId)}
          >
            <div className="img__container--iconContainer">
              <PlayIcon />
            </div>
            <Img
              key={index}
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
        { arrayOfVideos }  

        <YoutubeModal
          
          videoId           = {actualVideoId}
          translateModal    = {translateModal}
          setTranslateModal = {setTranslateModal}

        />
      
      
      </>
  ); 
}
