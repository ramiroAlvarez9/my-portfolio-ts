"use client";

import ArrayOfVideos from "@/components/ArrayOfVideos";
import { getServerSideProps } from "../src/app/getServerSideProps";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

export default function MusicVideos() {
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const [youtubePlaylistItemsInfoProps, setYoutubePlaylistItemsInfoProps] =
    useState<Object | any>({});

  const getApiInfo = async () => {
    setYoutubePlaylistItemsInfoProps(await getServerSideProps());
    setIsLoading(false);
  };

  useEffect(() => {
    getApiInfo();
  }, []);

  return isLoading ? (
    <section id="ultimos-lanzamientos">
      <div className="loading__container">
        <ReactLoading
          type={"spinningBubbles"}
          color={"#fac959"}
          height={500}
          width={500}
        />
      </div>
    </section>
  ) : (

    <section id="ultimos-lanzamientos">
      
      <div className="ultimos-lanzamientos__titleContainer">
        <h2 className="ultimos-lanzamientos__title">
          ULTIMOS <br /> LANZAMIENTOS
        </h2>
      </div>


        <div className="ultimos-lanzamientos__container">
          <ArrayOfVideos
            ArrayOfVideos={
              youtubePlaylistItemsInfoProps.props.YoutubePlaylistItemsInfo.items
            }
          />
      </div>


    </section>
  );
}
