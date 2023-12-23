import { useRef } from 'react';
import Dialog from "./Dialog";
import './Home.css';

function Home({ setPage }) {
  const openDialog = useRef(null);

  return (
    <div className='home'>
      <div className="heroimage--home"></div>
      <div id="main" className="introduction">
        <h2>Embracing the Harmony of Choral Excellence</h2>
        <p>Welcome to Crescendo Voices, the digital sanctuary where choral music breathes and resonates. Our mission is to celebrate the rich tapestry of choral music, from the hallowed echoes of ancient cathedrals to the innovative rhythms of contemporary compositions.</p>
        <p>At Crescendo Voices, we are dedicated to illuminating the world of choir music. Whether you're a seasoned chorister, an aspiring vocalist, or simply a lover of harmonious melodies, our platform is a space to explore, learn, and be inspired.</p>

        <div className="discover">
          <h3>What You'll Discover</h3>
          <ul className="discover__list">
            <li className="discover__item discover__item-a" onClick={() => setPage('Sing')}><span className="discover__title">How to Sing</span>: Perfect for choir beginners and those looking to refine their skills, our ‘How to Sing’ page offers step-by-step tutorials, vocal exercises, and tips from experienced choir directors.</li>
            <li className="discover__item discover__item-b" onClick={() => setPage('Piece')}><span className="discover__title">Classic Pieces</span>: Dive into the heart of choral music with our carefully curated selection of classic pieces. Here, history sings through the works of legendary composers.</li>
            <li className="discover__item discover__item-a" onClick={() => setPage('Choir')}><span className="discover__title">Famous Choir Societies</span>: Get up close with some of the world’s most renowned choirs. Learn about their histories, achievements, and how they're shaping the future of choral music.</li>
            <li className="discover__item discover__item-b" onClick={() => setPage('Musical')}><span className="discover__title">Related Music</span>: Explore genres and compositions influenced by the choral tradition. From symphonies to contemporary pieces, see how choral music intersects with diverse musical landscapes.</li>
          </ul>
        </div>
        <h2 className="join">
          <span className="join-us" onClick={() => openDialog.current()}>Join us</span>
          <Dialog openDialogRef={openDialog}/>
          <span> in this melodious journey at Crescendo Voices, where every note tells a story, and every harmony opens a window to the soul of music.</span>
        </h2>
      </div>
    </div>
  );
}
  
  export default Home;