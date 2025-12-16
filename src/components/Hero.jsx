import './Hero.css';
import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';


function Hero () {
    return (
        <section className="hero">
  <div className="hero-content">
    <h1>Gise Cassiani</h1>
    <h2>Mom life, lifestyle & real moments</h2>

    <p>
      Compartiendo la maternidad real, el día a día y momentos con intención.
    </p>

     <Link to="/blog" className="hero-btn hero-btn-outline">
    Blog
  </Link>

   {/*  <a
      href="https://www.instagram.com/gisecassiani_1109/"
      target="_blank"
      rel="noopener noreferrer"
      className="hero-btn"
    >
      Sígueme en Instagram
    </a> */}
    <SocialLinks />

  </div>

  <div className="hero-image">
    <img src="https://scontent.fctg3-1.fna.fbcdn.net/v/t39.30808-1/588634509_32383655177949757_8382852091054516409_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeFWY1abO0EhgkPccCJqcxdgV-wyt4qhZZ5X7DK3iqFlnty0EYehqwjklRhMUsYqdIA&_nc_ohc=srQ5HD6j1PoQ7kNvwHk5L0s&_nc_oc=Admg1SYXvwmwYOTR_pAjIaNQlCHAq9sBPUlKmEV-ZfWlA5GCPR_j5X5zsNeje_vSSow&_nc_zt=24&_nc_ht=scontent.fctg3-1.fna&_nc_gid=CyuANuWeYEytDNjkRSTM0w&oh=00_Afl5Dv7Z864nBHlCiuiVY3mumDy0raQnB-DIITcnuoqR3Q&oe=694632C9" alt="Gise Cassiani mom life" />
  </div>
</section>
    )
}

export default Hero;
