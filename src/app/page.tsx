import Main        from '@/pages/Main';
import MusicVideos from '@/pages/MusicVideos';
import MusicStore  from '@/pages/MusicStore';
import Contact     from '@/pages/Contact';
import Footer      from '@/pages/Footer';
import                  '../assets/global.scss';    

export default function Home() {
  return (
    <>     

      <Main        />
      <MusicVideos />
      <MusicStore  />
      <Contact     />
      <Footer      />
    
    </>
  );
}
