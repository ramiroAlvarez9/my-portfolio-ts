import Img from "react-cool-img";
import Link from "next/link";
interface Props {
  ArrayOfVideos: any;
}
export default function ArrayOfVideos({ ArrayOfVideos }: Props) {
  const arrayOfVideos = ArrayOfVideos.map(
    (object: Object | any, index: number) => {

      return (
        <Img
          key     = {index}
          style   = {{ backgroundColor: "grey", width: "100%", height: "auto" }}
          src     = {object.snippet.thumbnails.maxres.url}
          alt     = {"ultimo-lanzamiento-imagen"}
        />
      );
    }
  );

  return <>{arrayOfVideos}</>;
}
