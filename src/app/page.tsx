import Main        from '../../pages/main';
import MusicVideos from '../../pages/musicVideos';
import MusicStore  from '../../pages/musicStore';
import Contact     from '../../pages/contact';
import Footer      from '../../pages/footer';
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
