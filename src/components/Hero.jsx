import './Hero.css';
import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';


function Hero () {
    return (
        
<>
  <div className="layer">
    <video autoPlay
  muted
  loop
  playsInline
  preload="auto">
      <source src="/videos/video1.mp4" type="video/mp4" />
    </video>

    <video autoPlay
  muted
  loop
  playsInline
  preload="auto">
      <source src="/videos/video2.mp4" type="video/mp4" />
    </video>

    <video autoPlay
  muted
  loop
  playsInline
  preload="auto">
      <source src="/videos/video3.mp4" type="video/mp4" />
    </video>
  </div>

  <section className="hero">
    <div className="hero-content">
      <h1>Gise Cassiani</h1>
      <h2>Mom life, lifestyle & real moments</h2>
      <p>
        Compartiendo la maternidad real, el día a día y momentos con intención.
      </p>
      <Link to="/blog" className="hero-btn">
        Blog
      </Link>

      <SocialLinks />
    </div>
      <div className="hero-image"><img alt="Gise Cassiani mom life" src="https://scontent.fctg3-1.fna.fbcdn.net/v/t51.75761-15/503026976_18511885459011112_2456021382755067186_n.jpg?stp=dst-jpegr_tt6&amp;_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=127cfc&amp;_nc_eui2=AeEJ5tXMD-n3V9BIS-ztU80rF9k1qYMoCCYX2TWpgygIJgUkuuZP88f-YH3IKpjZo5Q&amp;_nc_ohc=Zje1Ehq4kSgQ7kNvwG0SACr&amp;_nc_oc=AdlqIrtq3ppjXYlmYpKWI8tEPPYNf-Zu9GfLUAcRdyX_sLE4BKFoMyeKhp075-ZJnHE&amp;_nc_zt=23&amp;se=-1&amp;_nc_ht=scontent.fctg3-1.fna&amp;_nc_gid=ptJI0P4zEsAsw2rT-fEWlg&amp;oh=00_AfmQml0ncFbPvBjseEDhQUqyEDAn9_atL4_vonfWXRqfjQ&amp;oe=694A1FDA" /></div>
  </section>
  
</>

    )
}

export default Hero;
