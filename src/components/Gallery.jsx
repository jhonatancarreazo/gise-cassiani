import './Gallery.css';
import momandson from '../assets/images/Momandson.jpg';
import g2 from '../assets/images/g2.jpg'
import g3 from '../assets/images/g3.jpg'
import g4 from '../assets/images/g4.jpg'
import g5 from '../assets/images/g5.jpg'
import g6 from '../assets/images/g6.jpg'

function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery-grid">
        <img src={momandson} alt="Mom life moment" />
        <img src={g2} alt="Lifestyle moment" />
        <img src= {g3} alt="Real moments" />
        <img src= {g4} alt="Mom blogger life" />
        <img src= {g5} alt="Daily mom life" />
        <img src= {g6} alt="Real mom moments" />
      </div>

      <a
        href="https://www.instagram.com/gisecassiani_1109/"
        target="_blank"
        rel="noreferrer"
        className="gallery-btn"
        
      >
        Ver más en Instagram
      </a>
    </section>
  );
}

export default Gallery;
