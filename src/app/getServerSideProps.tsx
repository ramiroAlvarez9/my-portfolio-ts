import type { GetServerSideProps } from 'next'
 
type YoutubePlaylistItemsInfo = {
  Object: Object;
  props: any;
}
 
export const getServerSideProps = ( async () => {
  // Fetch data from external API
  const res = await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLy-iD6hQHK2-YhoGsmArKMPHXZLXzD9Q0&key=AIzaSyBRu19BZkkCNyZ-hLih7OI25zpAY3AaAf0');
  const YoutubePlaylistItemsInfo : YoutubePlaylistItemsInfo = await res.json()
  // Pass data to the page via props
  return { props: { YoutubePlaylistItemsInfo, } }
}) satisfies GetServerSideProps<{ YoutubePlaylistItemsInfo : YoutubePlaylistItemsInfo }>