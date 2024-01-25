"use client";

export default function MusicStore() {

  const containerStyle : object = {
    border: '0',
    margin: '0 auto',
    outline: '0',
    padding: '0',
    verticalAlign: 'baseline',
    display: 'block',
    maxWidth: '1200px',
    minHeight: '600px',
    background: 'rgb(0,35,50)',
  };

  return ( 
    <>
      
      <section id="tienda">
      
      TIENDA
      
        <iframe
          id="embedSoundClick"
          width="100%"
          height="100%"
          src="https://www.soundclick.com/artist/external/standalone.cfm?bandID=1522186"
          style= {containerStyle}
        >
        </iframe>
      </section>
    </>
  );
}
