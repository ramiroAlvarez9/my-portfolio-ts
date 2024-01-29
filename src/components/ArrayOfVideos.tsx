interface Props{
    ArrayOfVideos: any;
}
export default function ArrayOfVideos({ArrayOfVideos}: Props) {

  console.log(ArrayOfVideos)

  const arrayOfVideos  = ArrayOfVideos.map( (object : Object | any, index: number ) => {
      
    console.log();
    return(
        <h3> {object.snippet.title}</h3>
      );
  });



  return (
    <>      

     {arrayOfVideos}
    
    </>
  );
}
