import './Gallery.css';
import momandson from "../src/assets/images/Momandson.jpg";

function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery-grid">
        <img src="../src/assets/images/Momandson.jpg" alt="Mom life moment" />
        <img src={momandson} alt="Mom life moment" />
        <img src="../src/assets/images/g2.jpg" alt="Lifestyle moment" />
        <img src="../src/assets/images/g3.jpg" alt="Real moments" />
        <img src="../src/assets/images/g4.jpg" alt="Mom blogger life" />
        <img src="../src/assets/images/g5.jpg" alt="Daily mom life" />
        <img src="../src/assets/images/g6.jpg" alt="Real mom moments" />
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
