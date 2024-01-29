"use client";
import ArrayOfVideos from "@/components/ArrayOfVideos";
import { getServerSideProps } from "../src/app/getServerSideProps";
import { useEffect, useState } from "react";

export default function MusicVideos() {

  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const [youtubePlaylistItemsInfoProps, setYoutubePlaylistItemsInfoProps] =
    useState<Object | any>({});

  const getApiInfo = async () =>  { 
  
    setYoutubePlaylistItemsInfoProps(await getServerSideProps() ) 
    setIsLoading (false);

  };

  useEffect( () => { getApiInfo(); }, [] );

  return isLoading ? (
    <section id="ultimos-lanzamientos">
      <div className="ultimos-lanzamientos__container">
        
        <h1>Cargando....</h1>
      </div>
    </section>
  ) : (
    
    <section id="ultimos-lanzamientos">
       <div className="ultimos-lanzamientos__container">
      <h2>ULTIMOS LANZAMIENTOS</h2>

      <ArrayOfVideos
        ArrayOfVideos={ youtubePlaylistItemsInfoProps.props.YoutubePlaylistItemsInfo.items }
      />
      </div>
    </section>
    

  );
}
